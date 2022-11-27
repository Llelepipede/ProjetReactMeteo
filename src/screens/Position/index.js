// import React, { useEffect } from 'react';

// import { Text, View } from 'react-native';

// import GetLocation from '../../components/GetLocation';

// const Position = () => {
//   useEffect(() => {
//     console.log(GetLocation());
//   });

//   return <GetLocation />
// };

// export default Position;

import React, { useState } from 'react';

import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

const Position = () => {
  const [pin, setPin] = useState({
    latitude: 48.85,
    longitude: 2.35
  })

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.85,
          longitude: 2.35,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      // provider={PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={pin}
          pinColor="black"
          draggable={true}
          onDragStart={(e) => {
            console.log('Drag start', e.nativeEvent.coordinates)
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle center={pin}
          radius={1000}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default Position;
