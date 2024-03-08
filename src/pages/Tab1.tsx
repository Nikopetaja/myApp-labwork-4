// src/pages/Tab1.tsx
import React from "react";
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from "@ionic/react";

const Tab1: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 1</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h2>Content for Tab 1</h2>
    </IonContent>
  </IonPage>
);

export default Tab1;
