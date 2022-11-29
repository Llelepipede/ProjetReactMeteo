import React, { useState, useEffect } from 'react';

import { Button, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useTranslation } from "react-i18next";

import '../../configuration/translation';

import { useDispatch, useSelector } from 'react-redux';
import { storeLocation, getLocation } from '../../actions/location';

const Login = () => {
  const dispatch = useDispatch();
  const Geoloc = useSelector(state => state.location.value);
  const [user, setUser] = useState('');
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);


  return (
    <View>
      <Text>{t('login')}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('BottomNavigator', { screen: 'Home' })}
      />
    </View>
  );
};

export default Login;
