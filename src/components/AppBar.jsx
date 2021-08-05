import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" path="/" />
        <AppBarTab text="Sign in" path="/login" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
