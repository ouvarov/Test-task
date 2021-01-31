import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.sass';
import User from './components/User';
import UsersList from './components/UsersList';

const App: React.FunctionComponent = () => (
    <div className="App">
        <BrowserRouter>
            <div className="body">
                <Switch>
                    <Route path="/user/:userUrl" render={() => <User />} />
                    <Route path="/users-list/:userSort" render={() => <UsersList />} />
                    <Redirect from="/" to="/users-list/0" />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
);

export default App;
