import React from "react";
import { View, StyleSheet, Text } from "react-native";


function Category({ item }) {
    return (
        <View>
            <Text style={styles.text}>
                {item.strCategory}
            </Text>
        </View>
    );

}
export default Category;


const styles = StyleSheet.create({
    text: {
        backgroundColor: 'white',
        color: 'blue',
    }

}
)