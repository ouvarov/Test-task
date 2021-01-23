import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersList from './UsersList';
import User from './User';

const Body: React.FunctionComponent = () => (
    <BrowserRouter>
        <div className="body">
            <Switch>
                <Route path="/user/:userUrl" render={() => <User />} />
                <Route path="/" render={() => <UsersList />} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Body;
