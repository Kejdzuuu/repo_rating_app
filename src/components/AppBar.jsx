import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../theme';
import { useApolloClient, useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';
import useAuthStorage from '../hooks/useAuthStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

const AppBar = () => {
  const {loading, error, data} = useQuery(GET_AUTHORIZED_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const user = loading ? null : data.authorizedUser;

  const handleSignOff = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" path="/" />
        {user
          ? <AppBarTab text="Sign off" onPress={handleSignOff} />
          : <AppBarTab text="Sign in" path="/login" />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;
