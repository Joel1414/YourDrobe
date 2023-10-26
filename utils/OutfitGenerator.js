import {collection, query, where, getDocs} from "@firebase/firestore";
import item, {db} from "./Item.js"
import {types} from "./Constants";
import {coalesceStatuses} from "expo-permissions/build/CoalescedPermissions";

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


    getOutfit = async (temp) => {
        let outfit = {};
        for (const type in types) {
            let typeLabel = types[type];
            const possibleChoices = await this.getItemsWithTypeInTempRange(typeLabel, temp);
            if (possibleChoices.length > 0) {
                const randomIndex = Math.floor(Math.random() * possibleChoices.length);
                outfit[typeLabel] = possibleChoices[randomIndex];
            } else {
                console.log(`No choices available for ${typeLabel}`)
            }
        }
        console.log("Outfit: ", outfit)
    }
}

