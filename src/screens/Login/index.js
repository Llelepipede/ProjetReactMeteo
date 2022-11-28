import React, {useState, useEffect} from 'react';

import {Button, View, Text} from 'react-native';

import styled from 'styled-components';

import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Container>
      <Title>Connexion</Title>

      <View>
        <Input
          onChangeText={setUsername}
          value={username}
          placeholder="Identifiant"
        />
        <Input
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
      </View>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('BottomNavigator', {screen: 'Home'})}
        color="#1976d2"
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: black;
  height: 100%;
`;

const Input = styled.TextInput`
  height: 40px;
  margin: 12px;
  border: 1px solid;
  text-align: center;
  background-color: whitesmoke;
`;

const Title = styled.Text`
  margin: 12px;
  text-align: center;
  font-size: 40px;
  color: ${props => props.theme.lightGreyColor};
`;

export default Login;
