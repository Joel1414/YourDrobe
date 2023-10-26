import AWS from 'aws-sdk';
import {Buffer} from 'buffer';
import {possibleLabels, possibleStyleLabels, types} from './Constants.js';
import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBUIkClHP7DYf1yO8b6_z6EfpD3CQ6s97s",
    authDomain: "yourdrobe-fd89a.firebaseapp.com",
    databaseURL: "https://yourdrobe-fd89a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "yourdrobe-fd89a",
    storageBucket: "yourdrobe-fd89a.appspot.com",
    messagingSenderId: "877224895321",
    appId: "1:877224895321:web:7495f1e2f054a871fea248",
    measurementId: "G-XNQ53VKLPP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


AWS.config.update({
    region: 'ap-southeast-2', // e.g., 'us-west-1'
    accessKeyId: 'AKIAR22UWHU2WAW72GLE',
    secretAccessKey: 'nhOfr2n9Okn+SoiFMv+1hdM0+DOHp3IKnxw883Px',
});

export const s3 = new AWS.S3();

class Item {
    constructor(name, base64Data, labels = null, weatherLabels = null) {
        this.name = name;
        this.base64Data = base64Data;
        this.labels = labels;
        this.weatherLabels = weatherLabels;
    }

    uploadToS3 = async () => {
        const binaryData = Buffer.from(this.base64Data, 'base64')

        try {
            const response = await s3.putObject({
                Bucket: 'yourdrobe-items',
                Key: this.name,
                Body: binaryData,
                ContentType: 'image/jpeg', // Or whichever format the image is in
                ACL: "public-read",
            }).promise();
            console.log("Succesfully uploaded: ", response)

        } catch (error) {
            console.error('Error uploading to S3:', error);
        }
        await this.removeBackground()
    }

    removeBackground = async () => {
        const region = 'ap-southeast-2';
        const bucketName = 'yourdrobe-items';

        const imageUrl = `https://s3.${region}.amazonaws.com/${bucketName}/${this.name}`;

        console.log("imageURL: ", imageUrl);

        const photoRoomUrl = 'https://beta-sdk.photoroom.com/v1/render?templateId=aa816f82-7061-458a-9b13-3d2c8c63b1bf&imageUrl=' + imageUrl;
        console.log("photoRoomURL: ", photoRoomUrl)
        const options = {
            method: 'GET',
            headers: {
                Accept: 'image/png, application/json',
                'x-api-key': '8c69eeaa885fa78a49a4c40f4a0218161f1d7f03'
            }
        };

        try {
            const photoRoomResponse = await fetch(photoRoomUrl, options);
            console.log("Successfully Outlined Image");
            const outlinedImageBlob = await photoRoomResponse.blob()
            const response = await s3.putObject({
                Bucket: 'yourdrobe-items',
                Key: `${this.name}.png`,
                Body: outlinedImageBlob,
                ContentType: 'image/jpeg', // Or whichever format the image is in
                ACL: "public-read",
            }).promise();
            console.log("Successfully uploaded: ", response)

        } catch (error) {
            console.error(error);
        }
    }

    getImageFromS3 = async () => {
        const params = {
            Bucket: "yourdrobe-items",
            Key: (this.name + ".png")
        };

        return new Promise((resolve, reject) => {
            s3.getObject(params, (err, data) => {
                if (err) reject(err);
                else resolve(data.Body);
            });
        });
    }


    fetchGoogleVisionLabels = async () => {
        const imageBuffer = await this.getImageFromS3()
        const visionApiKey = "AIzaSyCsFOFyouaN-l9IDyOSHtJKaB3uzUBWrdw"
        const GOOGLE_CLOUD_VISION_API_ENDPOINT = `https://vision.googleapis.com/v1/images:annotate?key=` + visionApiKey;
        const body = JSON.stringify({
            requests: [
                {
                    image: {
                        content: imageBuffer.toString('base64'),
                    },
                    features: [
                        {type: "LABEL_DETECTION", maxResults: 30},
                    ],
                },
            ],
        });

        const response = await fetch(GOOGLE_CLOUD_VISION_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });
        console.log("Response Received")
        const responseJson = await response.json();
        if (responseJson && responseJson.responses && responseJson.responses[0]) {
            return responseJson.responses[0].labelAnnotations.map(label => label.description);
        }

        throw new Error('Unable to fetch labels from Vision API');
    }
    forceLabels = async (newLabels, newWeatherLabels, minTemp, maxTemp, type) => {
        let newStyleLabels = [];
        for (const lbl of newLabels) {
            if (possibleStyleLabels.includes(lbl)) {
                newStyleLabels.push(lbl)
            }
        }
        this.styleLabels = newStyleLabels;
        this.labels = newLabels;
        this.weatherLabels = newWeatherLabels;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.clothingType = type;
    }

    setLabels = async () => {
        const assignedLabels = await this.fetchGoogleVisionLabels()
        let all_labels = [];
        let checkedLabels = 0;
        for (let lbl of assignedLabels) {
            if (possibleLabels.hasOwnProperty(lbl)) {
                if (checkedLabels > 1) {
                    break;
                }
                checkedLabels += 1;
            }
            while (possibleLabels.hasOwnProperty(lbl)) {
                // Don't re-add label that is already in
                if (all_labels.includes(lbl)) {
                    break;
                }

                const lbl_info = possibleLabels[lbl]
                // Check Minimum Temperature
                if (this.minTemp == null && lbl_info.minTemp != null) {
                    this.minTemp = lbl_info.minTemp;
                }

                // Check Max Temperature
                if (this.maxTemp == null && lbl_info.maxTemp != null) {
                    this.maxTemp = lbl_info.maxTemp;
                }

                // Check Weather Labels
                if (this.weatherLabels == null) {
                    this.weatherLabels = lbl_info.weatherLabels || [];
                }

                // Check Other Labels
                if (this.styleLabels == null) {
                    this.styleLabels = lbl_info.styleLabels || [];
                    for (const extra_label of this.styleLabels) {
                        !all_labels.includes(extra_label) && all_labels.push(extra_label);
                    }
                }

                // Add label to list of labels
                all_labels.push(lbl);

                lbl = lbl_info.parentLabel;

                // Check if lbl is clothing type label
                if (types.hasOwnProperty(lbl)) {
                    if (this.clothingType == null) {
                        this.clothingType = types[lbl];
                    }
                    break;
                }
            }
        }
        console.log("Clothing Type:", this.clothingType);
        console.log("Min Temp: ", this.minTemp);
        console.log("Max Temp: ", this.maxTemp);
        console.log(all_labels);
        this.labels = all_labels || [];
    }

    uploadItemToDatabase = async () => {
        const data = {
            name: this.name,
            type: this.clothingType,
            minTemp: this.minTemp,
            maxTemp: this.maxTemp,
            labels: this.labels,
            weatherLabels: this.weatherLabels,
            styleLabels: this.styleLabels,
        };
        try {
            const docRef = await addDoc(collection(db, "items"), data);
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

}

export default Item;