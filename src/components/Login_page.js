import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import "./login.css";
import { auth } from "../firebase";

function LoginPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
      <div className="page">
    <div class="container">
      <h2 id="title">Sign Up</h2>

      <div class="items">
        <input
          type="text"
          id="form-text"
          placeholder="Username"
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />

        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          type="password"
          id="form-password"
          placeholder="Password"
        />

        <button id="button" onClick={register}>
          Sign Up
        </button>


        {/* #########################Login############### */}
        <h2 id="title">Login</h2>

      <div class="items">
        <input
          type="text"
          id="form-text"
         
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />

        <input
          
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
          type="password"
          id="form-password"
          placeholder="Password"
        />

        <button id="button"  onClick={login}>
         Log In
        </button>

        
        </div>

        
      </div>
      <p id="form-text"> User Logged In: </p>
        {user?.email}
        <a id="sign" type="submit" href="#" onClick={logout}>
          Sign Out
        </a>
      
    </div>
    </div>
  );
}

export default LoginPage;
