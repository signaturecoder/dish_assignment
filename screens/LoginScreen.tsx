import React, { useEffect, useState } from 'react'
import { Alert, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import axios from 'axios';
import { Image } from 'react-native-elements';
import FormField from '../components/FormField';
import StyledButton from '../components/StyledButton';
import validateLogin from '../helpers/validateLogin';
import Server from '../api/Server';
import AsyncStorage from '@react-native-community/async-storage';
import { STORAGE_KEY } from '../constants/Constant';
import { loadUser, userLogin } from '../redux/actions/loginActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/store/rootReducer';
import { getUsersData } from '../helpers/dbData';
const LoginScreen = ({navigation}: any) => {
    const dispatch = useDispatch();
    const loginState = useSelector((state:AppState) => state.loginState)
    const [loginValues, setLoginValues] = useState({
        username: '',
        password: ''
    });
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState<any>({  
    })
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const readData = () => {
             getUsersData().then(user => dispatch(loadUser(user)));
          }
        readData();
    }, [])

    // useEffect(() => {
    //     console.log('ERRORS -->', errors);
    //     console.log('Submit -->', isSubmitting);
    //     if(Object.keys(errors).length > 0){
    //         setIsSubmitting(false);
    //     }
        
    //     if (Object.keys(errors).length === 0 && isSubmitting) {
    //          console.log('now call the api');
    //          const userLogged = {
    //             username: loginValues.username,
    //             password: loginValues.password,
    //           };
          
           
    //     }
    // }, [errors])

    const handleLogin = () => {
        setErrors(validateLogin(loginValues));
        console.log({loginValues});
        const userLogged = {
            uname: loginValues.username,
            password: loginValues.password,
          };
        //   console.log('USERS', users);
        dispatch(userLogin(userLogged));
        //   const foundUsers = users && users.find((user: any) => {
        //         return (user.uname === userLogged.username && user.password === userLogged.password)
        //     })

        //     if( foundUsers ){
        //         navigation.navigate('Main');
        //     } else {
        //         alert('username and password mismatch');
        //     }

        // Server.get('/users', {
        //     params: {
        //         uname: userLogged.username,
        //         password: userLogged.password,
        //       },
        //   }).then(res => {
        //       console.log('REs', res.data);
        //       Alert.alert(res.data);
        //       if(res.data.length === 1) {
        //           navigation.navigate('Root');
        //       }
        //   }).catch(err => console.log('Err', err));
        // setIsSubmitting(true);
    }

    const handleChange = (value: string, fieldId: string) => {
        let newloginValues = { ...loginValues, [fieldId]: value };
        setLoginValues(newloginValues);

    }

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.loginContainer}>
                <View style={styles.header}>
                    <Image containerStyle={styles.avatar} source={require('../assets/images/chapati.jpg')} />
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.footer}>
                    <FormField
                        label=" Username"
                        placeholder="Username"
                        onInputChange={(newValue: string) => handleChange(newValue, "username")}
                        values={loginValues.username}
                        errMsg={errors.username}
                        icon="user"
                    />

                    <FormField
                        label="Password"
                        placeholder="Password"
                        secure={true}
                        onInputChange={(newValue: string) => handleChange(newValue, "password")}
                        values={loginValues.password}
                        errMsg={errors.password}
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
