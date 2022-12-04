import React from 'react';

import { Button, Text, View } from 'react-native';

import { useTranslation } from "react-i18next";

import '../../configuration/translation';

import styled from 'styled-components';

const Settings = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <Title>{t('settings')}</Title>
      <Button onPress={() => i18n.changeLanguage("fr")} title='Français' />
      <Button onPress={() => i18n.changeLanguage("en")} title='Anglais' />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${props => props.theme.blackColor};
  height: 100%;
`
const Title = styled.Text`
  color: ${props => props.theme.lightGreyColor};
  text-align: center;
  font-size: 20px;
  margin: 6%;
`

export default Settings;
