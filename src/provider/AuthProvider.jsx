import PropTypes from "prop-types";
import { createContext, useState } from "react";
import auth from "../auth/firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

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
  const authInfo = {
    user,
    setUser,
    loading,
    userRegister,
    updateUser,
    userLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
