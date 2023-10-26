import {collection, query, where, getDocs} from "@firebase/firestore";
import item, {db} from "./Item.js"
import {types} from "./Constants";

export class OutfitGenerator {
    getItemsWithLabel = async (lbl) => {
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

    getItemsWithTypeInTempRange = async (typeLabel, temp) => {
        try {
            const q = query(collection(db, "items"), where("type", "==", typeLabel));
            const querySnapshot = await getDocs(q);

            const filteredItems = [];
            querySnapshot.forEach((doc) => {
                const itemData = doc.data();
                if (itemData.maxTemp && itemData.maxTemp > temp && itemData.minTemp && itemData.minTemp < temp) {
                    filteredItems.push(itemData.name);
                }
            });
            return filteredItems;
        } catch (error) {
            console.error("Error querying documents: ", error);
        }
    }


    getOutfit = async (temp) => {
        let availableItems = {};
        for (const type in types) {
            let typeLabel = types[type];
            const possibleChoices = await this.getItemsWithTypeInTempRange(typeLabel, 20);
            if (possibleChoices.length > 0) {
                const randomIndex = Math.floor(Math.random() * possibleChoices.length);
                availableItems[typeLabel] = possibleChoices[randomIndex];
                console.log(`${typeLabel}: ${availableItems[typeLabel]}`);
            } else {
                console.log(`No choices available for ${typeLabel}`)
            }
        }
    }
}

