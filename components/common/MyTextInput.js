import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const MyTextInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { labelStyle, textInputStyle, containerStyle } = styles;
    
    return (    
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                style={textInputStyle} 
                onChangeText={onChangeText}
                value={value}
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 18,
        lineHeight: 40,
        paddingLeft: 10,
        // flex: 1
    },
    textInputStyle: {
        color: 'black',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export { MyTextInput };
