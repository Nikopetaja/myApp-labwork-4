// src/components/Tabs.tsx
import React from 'react';
import { IonTabs, IonTabBar, IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Tab1 from '../pages/Tab1';
import Tab3 from '../pages/Tab3';
import TodoList from './TodoList';

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/tabs/tab1" exact>
        <Tab1 />
      </Route>
      <Route path="/tabs/tab2" exact>
        <TodoList />
      </Route>
      <Route path="/tabs/tab3" exact>
        <Tab3 />
      </Route>
      <Redirect exact from="/tabs" to="/tabs/tab1" />
    </IonRouterOutlet>
    <IonTabBar>
      {/* Place your IonTabButton components here */}
    </IonTabBar>
  </IonTabs>
);

export default Tabs;
