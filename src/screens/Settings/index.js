import React from 'react';

import {Text, View, Button} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Title>Setting</Title>
      <Button
        title="Deconnexion"
        type="submit"
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

const Title = styled.Text`
  margin: 12px;
  text-align: center;
  font-size: 40px;
  color: ${props => props.theme.lightGreyColor};
`;

export default Settings;
