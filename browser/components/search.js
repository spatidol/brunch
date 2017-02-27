import React from 'react';
import { Link, history } from 'react-router';
import { loadBrunchPlaces } from '../action-creators';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId } from 'react-places-autocomplete';

export default class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = { address: 'San Francisco, CA' }
    this.onChange = (address) => this.setState({ address })
  }

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  handleFormSubmit(event) {
    event.preventDefault()
    const { address } = this.state

    geocodeByAddress(address,  (err, { lat, lng }) => {
      if (err) { console.log('Oh no!', err) }

      const location = lat + "," + lng;
      console.log(location);
      const nav = '/brunchplaces/' + location;
       console.log(nav);
      this.context.router.push(`/brunchplaces/${location}`);
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.onChange}
        />
        <button className = "btn btn-info" type="submit">search.</button>
      </form>
    )
  }
}
