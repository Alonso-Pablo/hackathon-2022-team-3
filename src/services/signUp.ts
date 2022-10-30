import { createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';

import { auth } from '@/services/firebase';

export async function signUp(
  email: string,
  password: string
): Promise<UserCredential> {
  return await createUserWithEmailAndPassword(auth, email, password);
}
