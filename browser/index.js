'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AllBrunchPlacesContainer from './components/all-brunches/AllBrunchPlacesContainer';
import SingleBrunchContainer from './components/single-brunch/SingleBrunchContainer';
import Layout from './components/layout';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';
import { loadBrunchPlaces, loadOneBrunch, loadPhoto } from './action-creators';



const onBrunchPlacesEnter = function () {
  const thunk = loadBrunchPlaces();
  store.dispatch(thunk);
};

const onSingleBrunchEnter = function (nextRouterState) {
  const brunchId = nextRouterState.params.brunchId;
  const thunk = loadOneBrunch(brunchId);
  const thunk2 = loadPhoto(brunchId);
  store.dispatch(thunk);
  store.dispatch(thunk2);
};

ReactDOM.render(
  <Provider store={store}>
    <div className="container flexbox-container">
      <div className="jumbotron">
        <Router history={ hashHistory }>
          <Route path="/" component= {Layout}>
            <Route path="brunchplaces" component={AllBrunchPlacesContainer} onEnter={onBrunchPlacesEnter} />
            <Route path="brunchplaces/:brunchId" component={SingleBrunchContainer} onEnter={onSingleBrunchEnter} />
            <IndexRoute component={AllBrunchPlacesContainer} onEnter={onBrunchPlacesEnter} />
          </Route>
        </Router>
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
);
