import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AllBrunchPlaces extends Component {

  componentDidMount () {
    // this.props.onLoadPuppies();
  }

  render () {
    return (
      <div>
        {
          this.props.brunchplaces.map(brunch => {
            return (
              <ul key={brunch.id} className="list-unstyled">
                <li>
                  <Link to={`brunchplaces/${brunch.place_id}`}> { brunch.name }</Link>
                </li>
              </ul>
            )
          })
        }
      </div>
    );
  }
}
