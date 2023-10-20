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
}

export default Item;
