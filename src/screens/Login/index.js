import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {Button, View, Text} from 'react-native';

import styled from 'styled-components';

import {storeLogin, getLogin} from '../../actions/login';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const dispatch = useDispatch();
  const callAPI = useSelector(state => state.login.value);

  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState('');
  const navigation = useNavigation();

  // RECUPERATION DES INFORMATIONS API + CONDITION DU BOUTTON GO TO HOME
  // FONCTIONNALITE submitLogin
  const submitLogin = async text => {
    text.preventDefault();
    dispatch(getLogin());
    try {
      const result = await axios.post(url, user);
      const token = result.headers['x-access-token'];
      if (result && result.headers && result.headers['x-access-token']) {
        await AsyncStorage.setItem('token', token); // UTILISER REDUX
        navigation.navigate('BottomNavigator', {screen: 'Home'});
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>Connexion</Title>

      <View>
        {/* Identifiant */}
        <Input
          label="Username"
          name="username"
          id="username"
          type="username"
          secureTextEntry={false}
          placeholder="Username"
          onChangeText={text => setUser({...user, username: text})}
        />

        {/* Mot de passe */}
        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={text => setUser({...user, password: text})}
        />
      </View>

      <Button
        title="Go to Home"
        type="submit"
        onPress={() => navigation.navigate('BottomNavigator', {screen: 'Home'})}
        color="#1976d2"
      />

      <Button
        title="Go to Home"
        type="submit"
        onPress={e => submitLogin(e)} // FONCTIONNALITE submitLogin VOIR EN HAUT
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
