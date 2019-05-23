import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {

    const {viewStyle, textStyle} = styles

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#e2e2e2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 32
    },
});

export  { Header };