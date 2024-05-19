import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function acceptInvitation(guest_name) {
    const docRef = doc(db, 'database', 'data')

    await updateDoc(docRef, {
        accepted_invites: arrayUnion(guest_name)
    })
}

async function getGuests() {
    const docRef = doc(db, 'database', 'data');
    const docSnap = await getDoc(docRef);

    return docSnap.data()
}

export default {
    acceptInvitation,
    getGuests
}
