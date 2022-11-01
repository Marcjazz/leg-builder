// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAv2BA-u_MTwnvurvE8YBIInon4UfzWjgs',
  authDomain: 'apcc-c5682.firebaseapp.com',
  projectId: 'apcc-c5682',
  storageBucket: 'apcc-c5682.appspot.com',
  messagingSenderId: '565183123377',
  appId: '1:565183123377:web:b96fc78a636377b88b7790',
  measurementId: 'G-MNZ76VC2PN',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export default getFirestore(app)
