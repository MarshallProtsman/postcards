import config from "./firebaseconfig.js";
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database

// declare an empty Array to add the firebase data to
let imageDataArr = [];

export default function getFirebaseData() {
  const app = firebase.initializeApp(config);
  const db = app.database();

  db.ref("/postcards/Femo9MeefOLq5hOsc3CM/").on("value", (querySnapShot) => {
    imageDataArr = querySnapShot.val();

    console.log(imageDataArr);
  });
}

// getFirebaseData();

function waitToLog(x) {
  setTimeout(() => {
    console.log(`wait to log ${x/1000} seconds`)
    console.log(imageDataArr);
  }, x);
}

waitToLog(2500);
// Now we log it again,
// but it gives me an empty Array
// >>> []
// console.log(imageDataArr);

// I'm obviosly missing some fundamental JS knowledge here... pls help
// export default getFirebaseData();