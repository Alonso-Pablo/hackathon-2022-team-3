import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export async function googleSignIn() {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}
