// Tab1.tsx
import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const Tab1: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      {/* Your content for Tab 1 */}
      <h2>Welcome to my app</h2>
      <p>This is the home page for my app. <br></br> After registering or login in you can see this page. <br></br> This app has a simple to-do list page and a contact page that you can now explore.</p>
    </IonContent>
  </IonPage>
);

export default Tab1;
