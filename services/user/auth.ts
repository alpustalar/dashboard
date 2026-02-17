import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import isEmpty from "lodash/isEmpty";
import { auth, googleProvider } from "@/lib/firebase/config";
import { signInWithPopup, User } from "firebase/auth";
import { EmailPassword } from "@/types/transport/auth";
import createAxiosClient from "@/lib/api/createAxiosClient";
import apiReturn from "@/utils/api-return";
import { ApiReturn } from "@/types";
import { asyncHandler } from "@/utils/async-handler";

const mongo = process.env.NEXT_PUBLIC_USE_CUSTOM_SERVER === "true";

const userClient = createAxiosClient("user");

export const userFindOrCreate = async (
  user: User & { isGoogleAuth?: boolean },
): Promise<ApiReturn> => {
  if (!user || isEmpty(user)) {
    return apiReturn(null, new Error("user not found"));
  }
  const [, e] = await asyncHandler(userClient.post("/find-or-create", user));
  if (e) return apiReturn(null, e);
  return apiReturn(user);
};

export const loginWithGoogle = async (): Promise<ApiReturn<User>> => {
  const [userCredential, e] = await asyncHandler(
    signInWithPopup(auth, googleProvider),
  );
  if (e) return apiReturn(null, e);

  if (mongo) {
    const [result, findOrCreateException] = await asyncHandler(
      userFindOrCreate({
        ...userCredential.user,
        isGoogleAuth: true,
      }),
    );
    if (e) return apiReturn(null, findOrCreateException);
    if (result.error) {
      return apiReturn(null, result.error);
    }
  }
};

export const firebaseRegister = async ({
  email,
  password,
}: EmailPassword): Promise<ApiReturn<User>> => {
  const [userCredential, e] = await asyncHandler(
    createUserWithEmailAndPassword(auth, email, password),
  );

  if (e) apiReturn(null, e);
  const user = userCredential?.user;

  if (!user) {
    return apiReturn(null, new Error("userCredential?.user not found"));
  }

  if (mongo) {
    const [result, findOrCreateException] = await asyncHandler(
      userFindOrCreate(user),
    );
    if (findOrCreateException) {
      await user.delete();
      return apiReturn(null, findOrCreateException);
    }
    if (result.error) {
      await user.delete();
      return apiReturn(null, new Error(result.message));
    }
  }

  return apiReturn<User>(userCredential?.user);
};

export const firebaseLogin = async ({
  email,
  password,
}: EmailPassword): Promise<ApiReturn<User>> => {
  const [userCredential, e] = await asyncHandler(
    signInWithEmailAndPassword(auth, email, password),
  );

  if (e) return apiReturn(null, e);

  return apiReturn<User>(userCredential?.user);
};

export const resetPassword = async (email: string): Promise<ApiReturn> => {
  const [, e] = await asyncHandler(sendPasswordResetEmail(auth, email));
  if (e) return apiReturn(null, e);
  return apiReturn(true);
};

export const sendVerificationEmail = async (user: User): Promise<ApiReturn> => {
  const [, e] = await asyncHandler(sendEmailVerification(user));
  if (e) return apiReturn(null, e);
  return apiReturn(true);
};
