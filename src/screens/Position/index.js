import React, { useEffect, useState } from 'react';

import MapView, { Callout, Circle, Marker } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { storeLocation, getLocation } from '../../actions/location';

const Position = () => {
  const dispatch = useDispatch();
  const Geoloc = useSelector(state => state.location.value);
  const [pin, setPin] = useState({ latitude: 48.85, longitude: 2.35 });

  useEffect(() => {
    setPin(Geoloc.latitude, Geoloc.longitude);
    console.log("pin in position: ", pin)
    console.log('geoloc ', Geoloc);
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: Geoloc.latitude,
          longitude: Geoloc.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={pin} pinColor="black">
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={1000} />
      </MapView>
    </View>
  );
};

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
  },
});

export default Position;
