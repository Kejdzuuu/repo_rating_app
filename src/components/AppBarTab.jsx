import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    padding: theme.padding.barText,
  },
  text: {
    color: theme.colors.barTextPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ text, path }) => {
  return (
    <Pressable style={styles.tab}>
      <Link to={path}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
