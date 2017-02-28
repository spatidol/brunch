import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


export default class BrunchMap extends React.Component {

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'270px'}
        lat={ this.props.lat }
        lng={ this.props.lng }
        zoom={15}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyC0vvjFqBZe32mJj4FX3egNJ69dbrKzI4c'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={ this.props.lat }
          lng={ this.props.lng }
          draggable={true}
          onDragEnd={this.onDragEnd} />


      </Gmaps>
    );
  }

}

