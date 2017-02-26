import { combineReducers } from 'redux';
import { RECEIVE_BRUNCH_PLACES, SELECT_BRUNCH, SELECT_PHOTO } from './action-creators';

function allBrunchPlacesReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_BRUNCH_PLACES: return action.receivedBrunchPlaces;
    default: return state;
  }
}

function selectedBrunchReducer (state = {}, action) {
  switch (action.type) {
    case SELECT_BRUNCH: return action.selectedBrunch;
    default: return state;
  }
}

function selectedPhotoReducer (state = {}, action) {
  switch (action.type) {
    case SELECT_PHOTO: return action.selectedPhoto;
    default: return state;
  }
}

const rootReducer = combineReducers({
  allBrunchPlaces: allBrunchPlacesReducer,
  selectedBrunch: selectedBrunchReducer,
  selectedPhoto: selectedPhotoReducer
});

export default rootReducer;
