import React from 'react';

import {Text, View, Button} from 'react-native';

import styled from 'styled-components';

import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button
        title="Deconnexion"
        onPress={() => navigation.navigate('Login')}
        color="#1976d2"
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: black;
  height: 100%;
`;

export default Settings;
