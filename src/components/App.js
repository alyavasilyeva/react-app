import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ChatPage from './ChatPage';
import WelcomePage from './WelcomePage'

const App = ({ classes }) => (
    <Router>
        <Switch>
            <Route path='/chat' component = {ChatPage} />
            <Route exact path='/(welcome)?' component = {WelcomePage} />
            <Redirect to='/' />
        </Switch>
    </Router>
);

export default App;
 