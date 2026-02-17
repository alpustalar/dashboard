import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import isEmpty from "lodash/isEmpty";

export const waitForUser = () => {
  return new Promise((resolve) => {
    const auth = getAuth();
    if (auth.currentUser) {
      resolve(auth.currentUser);
    } else {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          unsubscribe();
          resolve(user);
        }
      });
    }
  });
};

export const isUser = (obj: unknown): obj is User => {
  return !isEmpty(obj) && typeof obj === "object" && "getIdToken" in obj;
};
