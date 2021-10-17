import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWQ9z8BjYdHBTMVpDj72ZoIlzllrnlwEo",
    authDomain: "twitter-clone-643c4.firebaseapp.com",
    projectId: "twitter-clone-643c4",
    storageBucket: "twitter-clone-643c4.appspot.com",
    messagingSenderId: "634515777365",
    appId: "1:634515777365:web:b50a6b669f47a3cbf4b1dc"

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
// const storage = firebase.storage();

export default db;
// export { storage };