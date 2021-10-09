import {
    ref
} from 'vue'
import {
    getAuth,
    signInWithEmailAndPassword
} from "firebase/auth";
import '../configs/firebase'

const auth = getAuth();
const error = ref(null);

async function signin(email, password) {
    error.value = null;
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return response;
    } catch (err) {
        error.value = err.code;
    }
}
export function useSignIn() {
    return {
        error,
        signin
    };
}