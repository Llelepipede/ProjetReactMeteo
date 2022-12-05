import React from 'react';

import { Button, Text, Touchable, TouchableOpacity, View } from 'react-native';

import { useTranslation } from "react-i18next";

import '../../configuration/translation';

import styled from 'styled-components';

const Settings = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Title>{t('settings')}</Title>
      <Content>
        <SubTitle>{t('langage')}</SubTitle>
        <BoxContainer>
          <ButtonContainer onPress={() => i18n.changeLanguage("fr")}>
            <ButtonText>FR</ButtonText>
          </ButtonContainer>
          <ButtonContainer onPress={() => i18n.changeLanguage("en")}>
            <ButtonText>EN</ButtonText>
          </ButtonContainer>
        </BoxContainer>
      </Content>
    </Container >
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.blackColor};
  height: 100%;
`
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  margin: 6%;
`
const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 6%;
  `

const SubTitle = styled.Text`
color: ${props => props.theme.lightGreyColor};
font-size: 18px;
font-weight: bold;
/* margin: 6%; */
`
const ButtonText = styled.Text`
color: ${props => props.theme.lightGreyColor};
text-align: center;
width: 50px;
`
const ButtonContainer = styled.TouchableOpacity`
border: 2px solid ${props => props.theme.lightGreyColor};
border-radius: 4px;
padding: 2%;
`
const BoxContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-around;
`
export default Settings;
