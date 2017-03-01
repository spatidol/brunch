import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AllBrunchPlaces extends Component {

  componentDidMount () {
    // this.props.onLoadPuppies();
  }

  render () {
    return (
      <div className="m-t-3">
       <div className="brunch-grid">
          <div className="white-nav"></div>
          {
            this.props.brunchplaces.map(brunch => {
              return (
                <ul key={brunch.id} className="list-unstyled">
                  <li className="corner">
                    <Link to={`brunchplace/${brunch.place_id}`}> <div className="box"> <img src={brunch.photos ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${brunch.photos[0].photo_reference}&key=AIzaSyBfORPro4T5h_hqpHX2Ug6QB1sCGOOlCbA`: 'public/img/photoless.png'} /> </div> </Link>
                    <Link className="name-bottom" to={`brunchplace/${brunch.place_id}`}> { brunch.name }</Link>
                  </li>
                </ul>
              )
            })
          }
        </div>
      </div>
    );
  }
}
