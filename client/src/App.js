import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome/welcome-1';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import UserContext from './context/UserContext';
import axios from 'axios';
import Home from './pages/Home/Paperbase';

function App() {
   const [userData, setUserData] = useState({
      token: undefined,
      user: undefined,
   });

   useEffect(() => {
      const checkLoggedIn = async () => {
         let token = localStorage.getItem('auth-token');
         if (token === null) {
            localStorage.setItem('auth-token', '');
            token = '';
         }
         const tokenRes = await axios.post(
            'http://localhost:5000/api/auth/tokenIsValid',
            null,
            { headers: { 'x-auth-token': token } }
         );
         if (tokenRes.data) {
            const userRes = await axios.get(
               'http://localhost:5000/api/auth/user',
               { headers: { 'x-auth-token': token } }
            );
            setUserData({
               token,
               user: userRes.data,
            });
         }
      };

      checkLoggedIn();
   }, []);

   return (
      <Router>
         <UserContext.Provider value={{ userData, setUserData }}>
            <Switch>
               <Route exact path="/" component={Welcome} />
               <Route exact path="/signin" component={Signin} />
               <Route exact path="/signup" component={Signup} />
               <Route exact path="/home" component={Home} />
            </Switch>
         </UserContext.Provider>
      </Router>
   );
}

export default App;
