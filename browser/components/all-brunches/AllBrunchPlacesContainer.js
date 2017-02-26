import { connect } from 'react-redux';
import { loadBrunchPlaces } from '../../action-creators';
import AllBrunchPlaces from './AllBrunchPlaces';

const mapStateToProps = function (state) {
  return {
    brunchplaces: state.allBrunchPlaces
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadBrunchPlaces: function () {
      const thunk = loadBrunchPlaces();
      dispatch(thunk);
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const AllBrunchPlacesContainer = componentCreator(AllBrunchPlaces);
export default AllBrunchPlacesContainer;
