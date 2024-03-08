// src/pages/Login.tsx
import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import AuthService from '../components/AuthService';

const Login: React.FC = () => {
  const handleLogin = () => {
    AuthService.login();
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h2>Login Page</h2>
        <IonButton onClick={handleLogin}>Login</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
