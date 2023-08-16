import React from 'react';
import { View, Text, StyleSheet }  from 'react-native';


const ColorBox = props =>{

    const colorStyle = {
        backgroundColor: props.hexCode,
    };

    return(
        <View style={[styles.box, colorStyle]}>
            <Text style={styles.text}>
                {props.colorName} {props.hexCode}
            </Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ColorBox;