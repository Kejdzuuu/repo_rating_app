import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import theme from "../theme";
import RepositoryItemDetail from "./RepositoryItemDetail";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/repo/:id">
          <RepositoryItemDetail />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
