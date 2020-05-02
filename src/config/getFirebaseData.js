import config from "./firebaseconfig.js";
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

let imageDataArr = [];

function getFirebaseData() {
  const app = firebase.initializeApp(config);
  const db = app.database();

  db.ref("/postcards/Femo9MeefOLq5hOsc3CM/").on("value", (querySnapShot) => {
    // console.log(`${JSON.stringify(querySnapShot)}`)
    imageDataArr.push(querySnapShot.val());

    console.log(imageDataArr[0]);


    return imageDataArr;
  });
}
getFirebaseData();

console.log(imageDataArr);
export default imageDataArr;
