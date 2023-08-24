import {
    doc, setDoc, getDocs, collection, query, addDoc,  deleteDoc, where, updateDoc
} from "firebase/firestore";

import { db } from "./config";

export const addData = (data) => {
    return new Promise((resolve,reject)=>{
        const coll = collection(db, 'expense');
        
        addDoc(coll, data)
        .then((doc)=>{
           
            resolve(doc.id)
        })
        .catch((err)=>{
            console.log("error here ", err)
            reject(err)
        })
    })
    
    
};

export const getData = async (userEmail) => {
    const finalResult = [];
    const coll = collection(db, "expense");
    const dbQuery = query(coll, where("email", "==", userEmail));

    return new Promise((resolve, reject) => {
        getDocs(dbQuery)
            .then((queRes) => {
                // console.log(queRes)
                queRes.forEach((res) => {
                    // console.log(res.id)
                    // console.log(res.data())
                    const data = { ...res.data(), id: res.id };
                    finalResult.push(data);
                });
                resolve(finalResult);
                // console.log("finalResult    ", fina)
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const deleteData = (id) => {
    // console.log("id  ", id)
    const dbDoc = doc(db, "expense", id);
    return new Promise((resolve, reject) => {
        deleteDoc(dbDoc)
        .then(() => {
            // console.log("Successfully deleted!");
            resolve("");
        })
        .catch((error) => {
            console.error("Error:", error);
            reject(error);
        });
    });

   
};



export const updateData = (id,data)=>{
    const dbDoc = doc(db, "expense", id);
    return new Promise((resolve, reject) => {
           updateDoc(dbDoc, data)
        .then(() => {
        
            resolve(true)
        })
        .catch((error) => {
        console.error("Error: ", error);
        }); 
    });

}