import { auth, db } from "../Config/firebase.config";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

export const getUserDetail = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const userData = userCred.providerData[0];

        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", userData?.uid),
          (docSnap) => {
            if (docSnap.exists()) {
              resolve(docSnap.data());
            } else {
              setDoc(doc(db, "users", userData?.uid), userData)
                .then(() => {
                  resolve(userData);
                })
                .catch((error) => {
                  reject(error);
                });
            }
          },
          (error) => {
            reject(error);
          }
        );

        return () => {
          unsubscribeSnapshot();
          unsubscribe();
        };
      } else {
        reject(new Error("User is not Authenticated"));
        unsubscribe();
      }
    });
  });
};