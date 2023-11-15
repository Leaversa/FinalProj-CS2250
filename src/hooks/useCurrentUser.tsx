import { firebaseApp } from "@/database/firebase";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
export interface CurrentUser {
    signedIn: boolean;
    user: User;
}

export default function useCurrentUser(): CurrentUser {
    const auth = getAuth(firebaseApp);
    const [signedIn, changeLoginStatus] = useState(false);
    const [user, setUser] = useState({} as User);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            changeLoginStatus(true);
            setUser(user);
            // User is signed in
        } else {
            changeLoginStatus(false);
            setUser({} as User);
            // User is signed out
        }
    });
    return { signedIn, user };
}