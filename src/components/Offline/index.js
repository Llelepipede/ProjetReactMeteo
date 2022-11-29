import React from 'react';

import { Text, SafeAreaView } from 'react-native';

import { useTranslation } from "react-i18next";

import '../../configuration/translation';

const Offline = () => {
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView>
      <Text>{t('offline')}</Text>
      <Text>{t('continue')}</Text>
    </SafeAreaView>
  );
};

export default Offline;
