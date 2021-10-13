import {
    ref
} from 'vue'
import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";
import './firebase'
import '../configs/firebase'

const auth = getAuth();
const error = ref(null);

async function signup(email, password) {
    error.value = null;
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );
        return response
    } catch (err) {
        if (err) {
            error.value = err.code;
        }

    } finally {
        if (error.value == null) {
            error.value = "successful"
        }
    }
}

export function useRegister() {
    return {
        error,
        signup
    };
}