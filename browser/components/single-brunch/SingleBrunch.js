import React, { Component } from 'react';

export default class SingleBrunch extends Component {

  componentDidMount () {
    // this.props.onLoadSinglePuppy();
  }

  render () {
    return (

      <div>
        <h2>{ this.props.brunch.name }</h2>

        <div>
         {(typeof(this.props.photo) === 'string') && <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.photo}&key=AIzaSyBfORPro4T5h_hqpHX2Ug6QB1sCGOOlCbA`} /> }
        </div>
      </div>
    )
  }
}
