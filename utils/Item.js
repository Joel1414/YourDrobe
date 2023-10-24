import AWS from 'aws-sdk';
import {Buffer} from 'buffer';

AWS.config.update({
    region: 'ap-southeast-2', // e.g., 'us-west-1'
    accessKeyId: 'AKIAR22UWHU2WAW72GLE',
    secretAccessKey: 'nhOfr2n9Okn+SoiFMv+1hdM0+DOHp3IKnxw883Px',
});

const s3 = new AWS.S3();

class Item {
    constructor(name, base64Data) {
        this.name = name;
        this.base64Data = base64Data;
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
        // await this.removeBackground()
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
                Key: "Outlined.jpg",
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
            Key: "bucket_hat.png"        //TODO: Change to this.name after testing
        };

        return new Promise((resolve, reject) => {
            s3.getObject(params, (err, data) => {
                if (err) reject(err);
                else resolve(data.Body);
            });
        });
    }

    fetchGoogleVisionLabels = async (base64Image) => {

        const visionApiKey = "AIzaSyCsFOFyouaN-l9IDyOSHtJKaB3uzUBWrdw"
        const GOOGLE_CLOUD_VISION_API_ENDPOINT = `https://vision.googleapis.com/v1/images:annotate?key=` + visionApiKey;
        const body = JSON.stringify({
            requests: [
                {
                    image: {
                        content: base64Image.toString('base64'),
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
}

export default Item;