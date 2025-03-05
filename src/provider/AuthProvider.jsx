import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../auth/firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  //User Login with email and password
  const userRegister = async (email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  //Update user
  const updateUser = async (name, photo) => {
    setLoading(true);
    return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //User Login with email and password

  const userLogin = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // Login and and register with google
  const googleLogin = async () => {
    try {
      setLoading(true);
      return await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  //LogOut

  const logOut = async () => {
    return await signOut(auth);
  };
  const authInfo = {
    user,
    setUser,
    loading,
    userRegister,
    updateUser,
    userLogin,
    googleLogin,
    logOut,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user?.email]);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
