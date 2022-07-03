import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCWWxT4qckxcMw3Zl5jv55GBTQyvmIXF8k",
    authDomain: "sole-utn-2022.firebaseapp.com",
    projectId: "sole-utn-2022",
    storageBucket: "sole-utn-2022.appspot.com",
    messagingSenderId: "484408000967",
    appId: "1:484408000967:web:8ff4d65890cd34bd6ad9e2"
  };

firebase.initializeApp(firebaseConfig)





firebase.auth=firebase.auth()
firebase.db=firebase.firestore()

export default firebase