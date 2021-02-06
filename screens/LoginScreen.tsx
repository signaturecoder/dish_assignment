import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import FormField from '../components/FormField';
import StyledButton from '../components/StyledButton';
import { Avatar, Image } from 'react-native-elements';
const LoginScreen = () => {
    const [loginValues, setLoginValues] = useState({
        username: '',
        password: ''
    });

    const handleLogin = () => {
        console.log('Login');
    }

    const handleChange = (value: any, id: string) => {

    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.loginContainer}>
                <View style={styles.header}>
                    <Avatar containerStyle={styles.avatar} source={require('../assets/images/chapati.jpg')} />
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.footer}>
                    <FormField
                        label=" Username"
                        placeholder="Username"
                        onInputChange={(newValue: string) => handleChange(newValue, "username")}
                        values={loginValues.username}
                        // errMsg={errors.username}
                        icon="user"
                    />

                    <FormField
                        label="Password"
                        placeholder="Password"
                        secure={true}
                        onInputChange={(newValue: string) => handleChange(newValue, "password")}
                        values={loginValues.password}
                        // errMsg={errors.password}
                        icon="eye"
                    />
                    <StyledButton title="Sign in" clicked={() => handleLogin()} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'

    },
    avatar: {
        width: 100,
        height: 100,
        marginTop: 50,
        borderRadius: 50

    },
    title: {
        textAlign: 'center',
        color: 'red',
        fontWeight: '500',
        fontSize: 20,
        paddingTop: 20,

    },
    footer: {
        flex: 2,
        backgroundColor: 'rgb(211, 222, 240)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    error: {
        fontSize: 15,
        textAlign: 'center',
        color: 'red'
    }

})
