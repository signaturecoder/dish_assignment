import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'


type FormFieldProps = {
    placeholder?: string;
    label: string;
    fieldId?: string;
    values: string;
    errMsg?: string;
    secure?: boolean;
    icon?: any;
    onInputChange: (text: string) => void
}

const FormField = ({placeholder, label, fieldId, values, errMsg, secure, icon, onInputChange }: FormFieldProps) => {
    return (
        <Input  
        placeholder={placeholder}
        label={label}
        inputContainerStyle={[styles.inputContainerStyle, (errMsg ? { borderColor: 'red'} : null) ]}
        value={values}
        onChangeText={(text: string) => onInputChange(text)}
        errorMessage={errMsg}
        secureTextEntry={secure}
        autoCapitalize={'none'}
        leftIcon={<FontAwesome name={icon} size={20} color="black" />}/>
    )
}

export default FormField

const styles = StyleSheet.create({
    inputContainerStyle: {
        borderRadius: 30,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
        height: 45,
        
    }
})
