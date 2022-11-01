import { addDoc, collection, DocumentData, getDocs } from 'firebase/firestore'
import db from '../firestore'
import { Leg } from './leg.interface'

export async function addNewLeg(newLeg: Leg) {
  try {
    const docRef = await addDoc(collection(db, 'legs'), newLeg)
    return docRef.id
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export async function getAllLegs() {
  const querySnapshot = await getDocs<DocumentData>(collection(db, 'legs'))
  const legs: DocumentData[] = []
  querySnapshot.forEach((leg) => {
    console.log(`${leg.id} => ${leg.data()}`)
    legs.push({ leg_id: leg.id, ...leg.data() })
  })
  return legs
}
