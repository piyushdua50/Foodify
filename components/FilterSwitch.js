import React from 'react';
import { Text, StyleSheet, View, Switch } from 'react-native';

import Colors from '../constants/colors';

const FilterSwitch = (props) => {
    return (
        <View style={styles.filterContainer}>
            <Text style={styles.text}>{props.label}</Text>
            <Switch
                value={props.state}
                onValueChange={props.onChangeFilter}
                trackColor={{
                    true: Colors.primaryColor,
                    // false: Colors.secondaryColor
                }}
                thumbColor={Colors.secondaryColor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: 'open-sans-bold'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterSwitch;