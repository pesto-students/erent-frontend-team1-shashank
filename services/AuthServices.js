import { getApp } from "firebase/app";
import {
    signInWithPopup,
    getAuth,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

class AuthService {
    constructor(firebaseApp) {
        this.auth = getAuth(firebaseApp);
    }

    waitForUser(callback) {
        return onAuthStateChanged(this.auth, async (userCred) => {
            if (userCred) {
                const idToken = await userCred.getIdToken();
                callback({
                    idToken,
                });
            }
        });
    }

    async loginWithGoogle() {
        try {
            const userCred = await signInWithPopup(
                this.auth,
                new GoogleAuthProvider(),
            );

            return {
                idToken: userCred._tokenResponse.idToken,
            };
        } catch (error) {
            return {
                error: error.message,
            };
        }
    }
    async logout() {
        await signOut(this.auth);
    }
}

export default new AuthService(getApp());
