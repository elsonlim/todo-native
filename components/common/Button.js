import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

class Button extends React.Component {
    render() {
        const { textStyle, buttonStyle } = styles;

        return (
            <TouchableOpacity 
                onPress={this.props.onPress}
                style={buttonStyle}
            >
                <Text style={textStyle}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: 'blue',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'blue',
        marginLeft: 5,
        marginRight: 5,
    },
});

export { Button };
