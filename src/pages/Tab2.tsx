// src/pages/Tab2.tsx
import React from "react";
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const Tab2: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 2</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Content for Tab 2</h2>
    </IonContent>
  </IonPage>
);

export default Tab2;
