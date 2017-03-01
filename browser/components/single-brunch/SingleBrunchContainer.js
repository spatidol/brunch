import { connect } from 'react-redux';
import SingleBrunch from './SingleBrunch';
import { loadOneBrunch, loadPhoto } from '../../action-creators';

const mapStateToProps = function (state) {
  return {
    brunch: state.selectedBrunch,
    photo: state.selectedPhoto
  };
};


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onLoadSingleBrunch: function () {
      const brunchId = ownProps.params.brunchId;
      const thunk = loadOneBrunch(brunchId);
      dispatch(thunk);
    },
    onLoadPhoto: function() {
      ownProps.params.brunchId;
      dispatch(loadPhoto(brunchId));
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const SingleBrunchContainer = componentCreator(SingleBrunch);
export default SingleBrunchContainer;
