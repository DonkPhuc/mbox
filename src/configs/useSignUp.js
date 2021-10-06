import {
    ref
} from "vue";
import * as firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FireldValue.serverTimestamp;

export {
    projectAuth,
    projectFirestore,
    timestamp
}

const error = ref(null);
const isPending = ref(false)

async function signup(email, password) {
    isPending.value = true;
    error.value = null;
    try {
        const response = await projectAuth.createUserWithEmailAndPassword(
            email,
            password
        );
        if (!response) throw new Error("Could not create a new user.");
        return response;
    } catch (err) {
        console.log(err);
        error.value = err.message;
    } finally {
        isPending.value = false;
    }
}
export function useSignUp() {
    return {
        error,
        isPending,
        signup
    };
}
