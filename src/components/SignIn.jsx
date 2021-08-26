import React from 'react';
import Text from './Text';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import { Pressable, View, StyleSheet } from 'react-native';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.containerBackground,
    padding: 10,
  },
  submitContainer: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.appBackground,
    borderRadius: 3,
    margin: 3,
    flexDirection: 'row',
  },
  submitButton: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonText: {
    color: theme.colors.barTextPrimary,
    fontSize: theme.fontSizes.subheading,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" secureTextEntry={true} />
      <View style={styles.submitContainer}>
        <Pressable style={styles.submitButton} onPress={onSubmit}>
            <Text fontWeight="bold" style={styles.submitButtonText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      history.push('/');
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
