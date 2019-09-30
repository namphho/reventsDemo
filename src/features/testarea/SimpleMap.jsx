import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';
import { GOOGLE_MAP_API } from '../../app/appConstants';

const AnyReactComponent = () => <Icon name='marker' size='big' color='red'/>;

class SimpleMap extends Component {
  static defaultProps = {
    zoom: 11
  }
  render() {
    const {latlng} = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API}}
          defaultCenter={latlng}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={latlng.lat}
            lng={latlng.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
