// src/pages/Login.tsx
import React, { useState } from "react";
import { IonPage, IonContent, IonInput, IonButton } from "@ionic/react";
import AuthService from './components/AuthService';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const result = await AuthService.login(email, password);

    if (result.success) {
      console.log("Login successful");
    } else {
      console.error("Login failed:", result.error);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Login</h2>
        <IonInput type="email" placeholder="Email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonButton onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
