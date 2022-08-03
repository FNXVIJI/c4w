import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

const SubmitApplication = (probs) => {

    return (

        <View style={styles.container}>
            <Text>Dear BackBoard</Text>
            <Text>Your Flexible Lifeline Loan application has been approved!</Text>
            <Card style={styles.cardFormat}>
                <Text>Please click on each of the three Loan Documents links displayed below to review your loan documents. Then click the check box next to each Loan Document to accept, and e-sign your loan documents. When complete, please click on the Confirm button.</Text>
            </Card>



        </View>
    );
}
export default SubmitApplication
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#FFFFFF'
    }, cardFormat: {
        borderColor: '#EEEFF2',
        borderWidth: 1,
        backgroundColor: '#EEEFF2',
        padding: 10,
        marginTop: 10,
    }

});
