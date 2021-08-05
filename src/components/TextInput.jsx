import React from 'react';
import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  inputField: {
    padding: 10,
    color: theme.colors.textSecondary,
  },
  inputContainer: {
    borderColor: theme.colors.appBackground,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 3,
    margin: 3,
  }
});

// eslint-disable-next-line no-unused-vars
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.inputField,
    style
  ];

  return (
    <View style={styles.inputContainer}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;
