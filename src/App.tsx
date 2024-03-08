// src/App.tsx
import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, setupConfig } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Tabs from "./Tabs";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import AuthService from "./AuthService";
import { ellipse, square, triangle } from "ionicons/icons";

// Initialize Firebase if it's not already initialized
if (!initializeApp.length) {
  initializeApp(firebaseConfig);
}

setupConfig({
  rippleEffect: true,
  mode: "ios",
});

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Registration} exact />
        <Route
          path="/tabs"
          render={() => (AuthService.isAuthenticated() ? <Tabs /> : <Redirect to="/login" />)}
        />
        <Redirect exact path="/" to="/tabs" />
      </IonRouterOutlet>

      <IonTabs>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tabs/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tabs/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tabs/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
