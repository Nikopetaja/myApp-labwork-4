// AuthService.ts
import { initializeApp } from 'firebase/app';  
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, AuthError } from 'firebase/auth';  
import firebaseConfig from '../FirebaseConfig';

// Initialize Firebase if it's not already initialized
if (!initializeApp.length) {
  initializeApp(firebaseConfig);
}

const AuthService = {
  getCurrentUser: () => getAuth().currentUser,

  isAuthenticated: () => {
    // Add your logic to check if the user is authenticated
    const user = getAuth().currentUser;
    return user !== null;
  },

  register: async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as AuthError).message };
    }
  },

  login: async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: (error as AuthError).message };
    }
  },

  logout: async () => {
    await signOut(getAuth());
  },
};

export default AuthService;
