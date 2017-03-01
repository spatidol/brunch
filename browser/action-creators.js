import 'whatwg-fetch';
export const RECEIVE_BRUNCH_PLACES = 'RECEIVE_BRUNCH_PLACES';
export const SELECT_BRUNCH = 'SELECT_BRUNCH';
export const SELECT_PHOTO = 'SELECT_PHOTO';



////////sync action creators
const receiveBrunchPlaces = function (brunchplaces) {
  return {
    type: RECEIVE_BRUNCH_PLACES,
    receivedBrunchPlaces: brunchplaces
  };
};


const selectBrunch = function (brunch) {
  return {
    type: SELECT_BRUNCH,
    selectedBrunch: brunch,
  };
};

export const selectPhoto = function (photo) {
  return {
    type: SELECT_PHOTO,
    selectedPhoto: photo,
  };
};

/////////thunk action creators

export const loadBrunchPlaces = function (location) {
  return function (dispatch) {
    fetch(`/api/brunchplaces/${location.params.location}`)
      .then(res => res.json())
      .then(brunchplaces => {
        dispatch(receiveBrunchPlaces(brunchplaces.results));
      })
      .catch(err => console.error(err));
  };
};

export const loadOneBrunch = function (brunchId) {
  return function (dispatch) {
    fetch(`/api/brunchplace/${brunchId}`)
      .then(res => res.json())
      .then(brunch => {
        return dispatch(selectBrunch(brunch.result));
      })
      .catch(err => console.error(err));
  };
};

export const loadPhoto = function (brunchId) {
  return function (dispatch) {
    fetch(`/api/brunchplace/${brunchId}`)
      .then(res => res.json())
      .then(brunch => {
        if(brunch.result.photos) {
        return dispatch(selectPhoto(brunch.result.photos[1].photo_reference));
        } else {
          return dispatch(selectPhoto(null))
        }
      })
      .catch(err => console.error(err));
  };
};
