// Registration.tsx
import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonRouterLink } from '@ionic/react';
import AuthService from '../components/AuthService';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import '../components/AuthPages.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize the useHistory hook

  const handleRegister = async () => {
    const result = await AuthService.register(email, password);

    if (result.success) {
      console.log('Registration successful');
      history.push('/tabs/tab1'); // Use history.push to navigate to Tab 1 upon successful registration
    } else {
      console.error('Registration failed:', result.error);
    }
  };

  return (
    <IonPage>
      <IonContent className="auth-page ion-padding">
        <h2>Register</h2>
        <IonInput type="email" placeholder="Email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonButton expand="full" onClick={handleRegister}>Register</IonButton>
        <IonRouterLink routerLink="/login">Already have an account? Login here.</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Register;
