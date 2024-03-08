// src/components/Tabs.tsx
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';

const Tabs: React.FC = () => (
  <Switch>
    <Route path="/tabs/tab1" component={Tab1} />
    <Route path="/tabs/tab2" component={Tab2} />
    <Route path="/tabs/tab3" component={Tab3} />
    <Redirect exact from="/tabs" to="/tabs/tab1" />
  </Switch>
);

export default Tabs;
