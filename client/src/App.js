import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome/welcome-1';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';

function App() {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
         </Switch>
      </Router>
   );
}

export default App;
