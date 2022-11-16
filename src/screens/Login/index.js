import React, { useState, useEffect } from 'react';

import { Button, View, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('BottomNavigator', { screen: 'Home' })}
      />
    </View>
  );
};

export default Login;
