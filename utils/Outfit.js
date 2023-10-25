import {collection, query, where, getDocs} from "@firebase/firestore";
import {db} from "./Item.js"

export class Outfit {
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
}

