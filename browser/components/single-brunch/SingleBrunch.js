import React, { Component } from 'react';
import BrunchMap from '../map'

export default class SingleBrunch extends Component {

  componentWillMount () {

  }

  render () {
    var num = Math.round(this.props.brunch.rating);


    return (
      <div className="clearfix">
      <div className="white-nav2"></div>
        <div className="info">
          <h6>{ this.props.brunch.name }</h6>
            <div className="border">
              <div className="large-photo">
                {(typeof(this.props.photo) === 'string') ? <img src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${this.props.photo}&key=AIzaSyBfORPro4T5h_hqpHX2Ug6QB1sCGOOlCbA`}/> : <img src={'/public/img/photoless.png'}/> }
              </div>
            </div>
            <div className="deets">
              <h4><a href={"tel:"+ this.props.brunch.international_phone_number} target="_blank"> <span className="glyphicon glyphicon-earphone" aria-hidden="true"></span></a></h4>

              <h4><a href={this.props.brunch.website} target="_blank"> <span className="glyphicon glyphicon-globe" aria-hidden="true"></span></a></h4>
              <h4>
                {this.props.brunch.price_level && Array.apply(null, Array(this.props.brunch.price_level)).map((item, i) =>
                    <span key={i} className="glyphicon glyphicon-usd" aria-hidden="true"></span>
                )}
              </h4>
              <h4>
                {num && Array.apply(null, Array(num)).map((item, i) =>
                    <span key={i} className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                )}
              </h4>
            </div>
        </div>
        <div className="brunch-map">
            {this.props.brunch.geometry && <BrunchMap lat={this.props.brunch.geometry.location.lat} lng={this.props.brunch.geometry.location.lng}/>}
        </div>
      </div>
    )
  }
}
