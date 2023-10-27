import {collection, query, where, getDocs} from "@firebase/firestore";
import {db, s3} from "./Item.js"
import {types} from "./Constants";


export const getItemsWithLabel = async (lbl) => {
    try {
        const q = query(collection(db, "items"), where("labels", "array-contains", lbl));
        const querySnapshot = await getDocs(q);

        const blueItems = [];
        querySnapshot.forEach((doc) => {
            blueItems.push({
                id: doc.id,
                ...doc.data()
            });
        });
        console.log("Query Results!")
        console.log(blueItems);
        return blueItems;
    } catch (error) {
        console.error("Error querying documents: ", error);
    }
}

export const getItemsWithTypeInTempRange = async (typeLabel, temp) => {
    try {
        const q = query(collection(db, "items"), where("type", "==", typeLabel));
        const querySnapshot = await getDocs(q);

        const filteredItems = [];
        const tooHotForItems = [];
        const tooColdForItems = [];
        querySnapshot.forEach((doc) => {
            const itemData = doc.data();
            if (itemData.maxTemp != null && itemData.maxTemp > temp) {
                if (itemData.minTemp != null && itemData.minTemp < temp) {
                    filteredItems.push(itemData.name);
                } else {
                    tooColdForItems.push(itemData.name)
                }
            } else {
                tooHotForItems.push(itemData.name)
            }
        });
        // console.log(`${temp} Too Hot For Items: ${tooHotForItems}`)
        // console.log(`${temp} Too Cold For Items: ${tooColdForItems}`)
        return filteredItems;
    } catch (error) {
        console.error("Error querying documents: ", error);
    }
}


export const getOutfit = async (temp) => {
    let outfit = {};
    for (const type in types) {
        let typeLabel = types[type];
        const possibleChoices = await getItemsWithTypeInTempRange(typeLabel, temp);
        if (possibleChoices.length > 0) {
            const randomIndex = Math.floor(Math.random() * possibleChoices.length);
            outfit[typeLabel] = {
                name: possibleChoices[randomIndex],
                imageUrl: nameToImageUrl(possibleChoices[randomIndex])
            };
        } else {
            console.log(`No choices available for ${typeLabel}`)
        }
    }
    return outfit; 
}



const getImageFromS3 = async (name) => {
    const params = {
        Bucket: "yourdrobe-items",
        Key: (name + ".png")
    };

    return new Promise((resolve, reject) => {
        s3.getObject(params, (err, data) => {
            if (err) reject(err);
            else resolve(data.Body);
        });
    });
}

const getBase64ImageUriFromS3 = async (name) => {
    try {
        const imageBuffer = await getImageFromS3(name);
        const base64Image = imageBuffer.toString('base64');
        return `data:image/png;base64,${base64Image}`;
    } catch (error) {
        console.error("Error fetching image:", error);
        return null;
    }
};

export const nameToImageUrl = (name) => {
    const region = 'ap-southeast-2';
    const bucketName = 'yourdrobe-items';

    return `https://s3.${region}.amazonaws.com/${bucketName}/${name}.png`;
}

export const getItemImageUrlsOfType = async (typeLabel) => {
    try {
        const q = query(collection(db, "items"), where("type", "==", typeLabel));
        const querySnapshot = await getDocs(q);

        const filteredNames = [];
        querySnapshot.forEach((doc) => {
            const itemData = doc.data();
            filteredNames.push(nameToImageUrl(itemData.name));
        });
        return filteredNames
    } catch (error) {
        console.error("Error querying documents: ", error);
    }
}

