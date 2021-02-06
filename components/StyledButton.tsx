import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const StyledButton = ({ title, clicked }: { title: string, clicked: any }) => {
    return (
        <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={clicked}>
            <Text style={styles.textStyle}>{title}</Text>
        </TouchableOpacity>
    </View>
    )
}

export default StyledButton

const styles = StyleSheet.create({
    buttonWrapper: {
       
        borderRadius: 20,
        alignSelf: 'center',
        marginVertical: 10,
        minWidth: 150,
        height: 40,
        paddingTop: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        elevation: 5
    },
    textStyle: {
        fontWeight: "700",
        fontSize: 20,
        color: 'red',

    }
})
