import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestByHealthConditions from './TestByHealthConditions';
import TestDetails from './TestDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={TestByHealthConditions} />
        <Route path="/test/:testId" component={TestDetails} />
      </Switch>
    </Router>
  );
};

export default App;