// Tab2.tsx
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/react';

const Tab2: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 2</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      {/* Your content for Tab 2 */}
      <h2>Todo List in Tab 2</h2>
    </IonContent>
  </IonPage>
);

export default Tab2;
