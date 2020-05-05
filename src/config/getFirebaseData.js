import config from "./firebaseconfig.js";
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

// declare an empty Array to add the firebase data to
let imageDataArr = [];

function getFirebaseData() {
  const app = firebase.initializeApp(config);
  const db = app.database();

  db.ref("/postcards/Femo9MeefOLq5hOsc3CM/").on("value", (querySnapShot) => {
    imageDataArr = querySnapShot.val();

    console.log(imageDataArr);
  });
}

getFirebaseData();

function waitToLog() {
  setTimeout(() => {
    console.log(imageDataArr);
  }, 1000);
}

waitToLog();
// Now we log it again,
// but it gives me an empty Array
// >>> []
// console.log(imageDataArr);

// I'm obviosly missing some fundamental JS knowledge here... pls help
export default imageDataArr;
