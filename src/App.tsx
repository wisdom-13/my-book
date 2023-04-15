import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './page/Home';
import Signin from './page/Signin';
import Add from './page/Add';
import Detail from './page/Detail';
import Edit from './page/Edit';
import NotFound from './page/NotFound';

import { ConnectedRouter } from 'connected-react-router';
import history from './history';

import { ErrorBoundary } from 'react-error-boundary';
import Error from './page/Error';

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/add' component={Add} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/book/:id' component={Detail} />
          <Route exact path='/edit/:id' component={Edit} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>

  );
}

export default App;
