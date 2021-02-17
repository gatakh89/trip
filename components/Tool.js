import MapView from 'react-native-maps';
import React from 'react';
import  Marker  from 'react-native-maps';

const maps = () =>{
    return(
      <MapView  style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
      initialRegion={{
        latitude: 37.56421,
        longitude:  127.0016,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        {/* <Marker style={{
        flex: 1}}
           LatLng={{
  latitude: 37.56421,
  longitude: 127.0016,
          }}/> */}
          
          
      </MapView>
     )
  }


export default maps;