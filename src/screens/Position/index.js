import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

import MapView, { Callout, Marker } from 'react-native-maps';

import { useDispatch, useSelector } from 'react-redux';
import { storeLocation, getLocation } from '../../actions/location';

const Position = () => {
  const dispatch = useDispatch();
  const Geoloc = useSelector(state => state.location.value);
  const [pin, setPin] = useState({ latitude: 46, longitude: 2 });

  useEffect(() => {
    setPin({ latitude: Geoloc.latitude, longitude: Geoloc.longitude });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: Geoloc.latitude,
          longitude: Geoloc.longitude,
          latitudeDelta: 4,
          longitudeDelta: 4,
        }}
      >
        <Marker coordinate={pin} pinColor="black">
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
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
