import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./config";

const auth = getAuth(app);

export async function login_firebase(email, password){
  const userDetails = {
    email : null,
    uid : null,
    success: false,
    errorCode:null,
    errorMessage: null
}
    return new Promise((resolve,reject)=>{
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        

        const user =  userCredential.user;
        
        userDetails.success = true;
        userDetails.email = user.email;
        userDetails.uid = user.uid;
        resolve(userDetails);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       
        userDetails.errorCode = errorCode;
        userDetails.errorMessage = errorMessage;
        userDetails.success = false;
        userDetails.email = null;
        userDetails.uid = null;
        reject(userDetails)
      });
     
    })

   

  
  

}
 

export async function registration_firebase(email, password){

  return new Promise((resolve,reject)=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log(user)
      resolve(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      reject({errorCode:errorCode, errorMessage:errorMessage})
    });
  })
 

}