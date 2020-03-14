import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SigninScreen = () => {

    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return <>
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            {/* <NavigationEvents 
            onWillFocus={() => {}} 
            onDidlFocus={() => {}} 
            onWillBlur={() => {}} 
            onDidlBlur={() => {}} 
            /> */}
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink routeName="Signup" text="Don´t have an account? Sign up instead" />
        </View>
    </>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
    link: {
        color: 'blue'
    }
});

SigninScreen.navigationOptions = () => {
    return {
        header: null
    };
};


export default SigninScreen;