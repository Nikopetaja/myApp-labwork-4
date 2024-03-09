// Login.tsx
import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonRouterLink } from '@ionic/react';
import AuthService from '../components/AuthService';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import '../components/AuthPages.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize the useHistory hook

  const handleLogin = async () => {
    const result = await AuthService.login(email, password);

    if (result.success) {
      console.log('Login successful');
      history.push('/tabs/tab1'); // Use history.push to navigate to Tab 1 upon successful login
    } else {
      console.error('Login failed:', result.error);
    }
  };

  return (
    <IonPage>
      <IonContent className="auth-page ion-padding">
        <h2>Login</h2>
        <IonInput type="email" placeholder="Email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonButton expand="full" onClick={handleLogin}>Login</IonButton>
        <IonRouterLink routerLink="/register">Don't have an account? Register here.</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Login;
