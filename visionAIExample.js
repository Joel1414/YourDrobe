const vision = require('@google-cloud/vision');
const fs = require('fs');

const CREDENTIALS = JSON.parse(JSON.stringify(
    {
        "type": "service_account",
        "project_id": "image-detection-398323",
        "private_key_id": "46553ffc21fc7133407ed73cd002d4a104d70ef9",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDWrKFdoW5Mb4+a\nwbQwPUFRKNzOrczE/Z9Ms2/RrBZMy4NrV98KSBJ7ORXHWJXHiSYkK8FQEE2NthUj\niJUf/Yz7cNZdue5v2tXTWMXsnZ+Xcj6bDBuKN5SlgD2LOqgS0cqeQOR+px/NInXy\nuwH41GVCnctVIbiI9jUhcIRA46OARNkvdH+znUmbbWCDNa38VHj4MrTIsOmkmxqz\nvlQMEkOkgq2gxTjNXy+aunOVv4Xh7rIDniVdIBk+haZQ3T1vBVQ5tOrchd8ftLnH\nPUIxymBW1sWeo+sNcLR+uPrE8yPkOWzDBBFeADPBmta+cUNFBnygkdTBZrBLnu2s\nTOn8Tby7AgMBAAECggEARo4jVPYfHcEW1hqu4aHoS0feVpFZuS7QQfHBoQxpoeDL\ndybAuAzbAiPPbB7Jz3RclEvLM8i/7ID5Lp4PwR1gzi0WT2SyIJIwb89/8ZYWozxZ\npjTTAljlIoXk9FMZdWH9MYkLcDL2aUHXuSjMa59HDp90+ixkjaM58B0eYoNOs/OS\nsnsrZar530//4zRdvt+Nu7TZD+VSrZxh2cqgF/Frb9nnCVheO1Ez9orL0zwSeAQx\n0noAKFfzpNHw6/CCDuVqMdMHptHlZA7YP9Hz7aFS/E3Z6V0d6ew4vnEncLvvHwb4\nOorvXdBmkGxzVuTW9mbM2O/3UTXDLNDFBZRFdAMoqQKBgQDxV2/ZiIzQu0FqUxVb\nQ6CltSl+GU/OpmI6ZPZHPh8IWqCodD60blOYreazGzsfcdZlSrgr5//mLk+v6dQA\naUGq+dkz4s+jBaT2Wzq7NBkGmVPvPBON+/PSJnkM9+57wuoqWZhjZSmBiw8mllof\n2m3FPUl7BGGYraPXnbA1MScL2QKBgQDjto0alcnZpaILSyfvp+9VN4Mrd/LJY/VQ\nyWIF/NAl6PMYNH1Yxj0hIm6X0zkhDqukRy70HG5+NDKvbolUnBZ/3lUCQ36Gz/X7\nGIzNUgDCfpA5Np5HGqZQU+/G4+YJUkHqUakIITcamjPP6+bi6bFwwGkuIrhYZu94\nahOibv+UswKBgQDBIjXSIaJ+z7uzuLVYibAfq/B+hwcE2sW08WLc9GulJdF3vT8I\n6Vlgz5nVLy+LJHBsMvVbvZddvyXqIveTNKhmiPc2vIVpcnTm6W8ArNpyG3W995e2\ngjBGtp8cr7RbuknmhjibIjOrBXukZ6HL5+L8euU42vK3Wg3J2NlQV/tlUQKBgQDd\nwtqIGXgKThQRi4/JBXM/OmCz5Iy9NGuj0Xt0+VB8mvCjkfrAic7ehfnOQhZQ60id\nI/XGJio1HgB+eNelXp1Kyetf2PtPrxePAcmd605yG2+5SEe8V2fAsv3AZBGS4ljv\nKbfEAxT3A1WSF9szAQOdGsVT+Nwuu5BbZHLard6ZoQKBgQCwqZC5UAqIEAm7vQxu\nBfwjoZStpM4eutKcZKIAgmAYoOyJnw9qM3TmP34/r76V190stGdJTIJa0OkklNCX\nv99NGr39KZEuBBaFKlNFQuktKJC+FW01zjJCTx9vtPCTYtOgF8xpsuXx+8E5Esr2\nQNPCzPnKhCyMbS46PTCR41cnXA==\n-----END PRIVATE KEY-----\n",
        "client_email": "joel-886@image-detection-398323.iam.gserviceaccount.com",
        "client_id": "108560503789789819323",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/joel-886%40image-detection-398323.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
      }
));

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
}

const client = new vision.ImageAnnotatorClient(CONFIG);

//detects objects in the image
async function detect(filePath) {
    let [result] = await client.objectLocalization(filePath);
    const objects = result.localizedObjectAnnotations;
    objects.push(filePath);
    return objects;
}

//saves the JSON from the detect function to a file with all previously saved JSONs
async function saveJSON(filePath) {
    let objects = await detect(filePath);
    let data = JSON.parse(fs.readFileSync('objects.json'));
    data.push(objects);
    fs.writeFileSync('data.json', JSON.stringify(data));
    console.log('done');
}




saveJSON('images/shirt2.jpeg');

