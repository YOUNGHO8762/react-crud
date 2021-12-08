import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContextProvider } from './contexts/Context';
import Nav from './components/Nav/Nav';
import Login from '../src/pages/Login';
import Forum from './pages/Forum';
import PostDetail from './pages/PostDetail';
import PostWrite from './pages/PostWrite';

const Routes = () => {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="*"
            component={() => (
              <>
                <Nav />
                <Route exact path="/forum" component={Forum} />
                <Route exact path="/forum/:id" component={PostDetail} />
                <Route exact path="/write" component={PostWrite} />
                <Route exact path="/modify/:id" component={PostWrite} />
              </>
            )}
          />
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default Routes;
