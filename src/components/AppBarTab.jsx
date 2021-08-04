import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
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

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
