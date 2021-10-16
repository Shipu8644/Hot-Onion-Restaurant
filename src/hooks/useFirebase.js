import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     console.log(result.user);
            //     setUser(result.user);
            // })
            .catch(error => {
                console.log(error.message);
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }
        , [])

    const logout = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            console.log(error.message);
        });
    }

    return {
        user,
        signInGoogle,
        logout

    }

}

export default useFirebase;