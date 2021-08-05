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
  },
  errorText: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.inputField,
    style
  ];

  const containerStyle = [
    styles.inputContainer,
    error && styles.errorText,
  ];

  return (
    <View style={containerStyle}>
      <NativeTextInput style={textInputStyle} {...props} />
    </View>
  );
};

export default TextInput;
