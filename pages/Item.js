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
            }).promise();

            console.log('Successfully uploaded image to S3:', response);
            const url = s3.getSignedUrl('getObject', {
                Bucket: 'yourdrobe-items',
                Key: this.name,
                Expires: 60 * 5 // URL will be valid for 5 minutes
            });

            console.log(url);
        } catch (error) {
            console.error('Error uploading to S3:', error);
        }
    }
}

export default Item;
