// src/pages/Registration.tsx
import React, { useState } from "react";
import { IonPage, IonContent, IonInput, IonButton } from "@ionic/react";
import AuthService from './components/AuthService';

const Registration: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const result = await AuthService.register(email, password);

    if (result.success) {
      console.log("Registration successful");
    } else {
      console.error("Registration failed:", result.error);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Registration</h2>
        <IonInput type="email" placeholder="Email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonButton onClick={handleRegister}>Register</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Registration;
