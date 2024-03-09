// src/App.tsx
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, 
  IonLabel,
  setupIonicReact,
  IonIcon,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from './components/Tabs';
import Login from './pages/Login';
import Register from './pages/Registration';
import AuthService from './components/AuthService';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { ellipse, square, triangle } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact />
          <Route path="/register" component={Register} exact />
          <Route
            path="/tabs"
            render={() =>
              AuthService.isAuthenticated() ? (
                <Tabs />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Redirect exact from="/" to="/tabs" />
        </IonRouterOutlet>

        {/* Define IonTabBar here */}
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tabs/tab1">
            <IonIcon icon={ellipse} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={square} />
            <IonLabel>To-do list</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={triangle} />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
