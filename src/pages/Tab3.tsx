// Tab3.tsx
import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const Tab3: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 3</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      {/* Your content for Tab 3 */}
      <h2>This is the Contact page</h2>
      <p>Here you will find relevant contact information that you can use to give feedback or report any issues. <br></br> Email: paavo.suomalainen@gmail.com <br></br> Phone number: +358 12 3456789 <br></br> Note: This contact information is on this page for demonstration purposes only and is not real.</p>
    </IonContent>
  </IonPage>
);

export default Tab3;
