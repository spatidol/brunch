'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllBrunchPlacesContainer from './components/all-brunches/AllBrunchPlacesContainer';
import SingleBrunchContainer from './components/single-brunch/SingleBrunchContainer';
import Layout from './components/layout';
import Home from './components/Home'
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { loadBrunchPlaces, loadOneBrunch, loadPhoto, selectPhoto } from './action-creators';



const onBrunchPlacesEnter = function (location) {
  const thunk = loadBrunchPlaces(location);
  store.dispatch(thunk);
};

const onSingleBrunchEnter = function (nextRouterState) {
  store.dispatch(selectPhoto(null));
  const brunchId = nextRouterState.params.brunchId;
  const thunk = loadOneBrunch(brunchId);
  const thunk2 = loadPhoto(brunchId);
  store.dispatch(thunk);
  store.dispatch(thunk2);
};

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div className="jumbotron">
        <Router history={ hashHistory }>
          <Route path="/" component= {Layout}>
            <Route path="home" component={Home} />
            <Route path="brunchplaces/:location" component={AllBrunchPlacesContainer} onEnter={onBrunchPlacesEnter} />
            <Route path="brunchplace/:brunchId" component={SingleBrunchContainer} onEnter={onSingleBrunchEnter} />
            <IndexRoute component={Home}  />
          </Route>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
