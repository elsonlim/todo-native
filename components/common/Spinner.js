import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Spinner = ({ size }) => (
    <View style={style.spinnerStyle}>
        <ActivityIndicator size={size || 'large'} />
    </View>
);

const style = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export { Spinner };
