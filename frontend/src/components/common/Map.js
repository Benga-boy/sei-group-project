import React from 'react'
import MapGl, { Marker } from 'react-map-gl'
import { getPostcodeInfo } from '../../lib/ext_api'

import 'mapbox-gl/dist/mapbox-gl.css'


class Map extends React.Component {
  state = {
      latitude: '',
      longitude: ''
  }

  async componentDidMount() {
    try {
      const postcode = this.props.postcode      
      const response = await getPostcodeInfo(postcode)
      const latitude = response.data.result.latitude 
      const longitude = response.data.result.longitude 

      this.setState({latitude,  longitude}, )
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    
    if (!this.state.latitude || !this.state.longitude) return null
    return (
      <MapGl
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        height={'50vh'}
        width={'80vw'}
        mapStyle='mapbox://styles/mapbox/light-v10'
        latitude={51.515}
        longitude={-0.078}
        zoom={12}
      >
          <Marker
          className="marker"
          latitude={51.515}
          longitude={-0.078}
          >
            {/* <span role="img" aria-label="marker">🦆</span> */}
          </Marker>

      </MapGl>
    )
  }
}

export default Map