// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import { getAuth } from "firebase/auth"

//Configuration
const firebaseConfig = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MESUREMENT_ID,
})

export const db = getFirestore(firebaseConfig)
export const auth = getAuth(firebaseConfig)

export default firebaseConfig
