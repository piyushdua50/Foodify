import React from 'react';
import { View, StyleSheet } from 'react-native';

import DefaultText from './DefaultText';

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        marginHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default ListItem;