

import React, { useState, useEffect } from 'react';

import { Button, View, Text, Touchable, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useTranslation } from "react-i18next";

import '../../configuration/translation';

import { useDispatch, useSelector } from 'react-redux';
import { storeLocation, getLocation } from '../../actions/location';

import styled from 'styled-components';

const Login = () => {
  const dispatch = useDispatch();
  const Geoloc = useSelector(state => state.location.value);
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();



  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);


  return (
    <Container>
      <Title>{t('home')}</Title>
      <BoxContainer>
        <ButtonContainer onPress={() => navigation.navigate('BottomNavigator', { screen: 'Home' })}>
          <ButtonText>{t('direction')}</ButtonText>
        </ButtonContainer>
      </BoxContainer>

    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.blackColor};
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10%;
`

const BoxContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
`

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.theme.lightGreyColor};
  border-radius: 4px;
  padding: 16px;
  width: 75%;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.blackColor};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export default Login;

