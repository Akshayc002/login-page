import "./App.css";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import PhotoCarousel from "./components/PhotoCarousel";

export const userDetailsContext = React.createContext();

function App() {
  const [webAccount, setWebAccount] = useState("");
  const [password, setPassword] = useState("");
  const [conferenceId, setConferenceId] = useState("");
  return (
    <div className="App">
      <Navbar />
      <div className="login">
        <userDetailsContext.Provider
          value={{
            webAccount,
            setWebAccount,
            password,
            setPassword,
            conferenceId,
            setConferenceId,
          }}
        >
          <LoginForm className="login-form" />
        </userDetailsContext.Provider>
        <PhotoCarousel className="carousel" />
      </div>
      <div className="footer-text">Copyright © Bsnl. 2008-2013.</div>
    </div>
  );
}

export default App;
