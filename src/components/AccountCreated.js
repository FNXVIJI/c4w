import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AccountCreated = (prop) => {

    return (
        <View style={styles.container}>
            <AntDesign name="checkcircle" size={24} color="green" />
            <Text style={{ marginBottom: 10, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Account Created Successfully</Text>
            <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'rgba(34, 42, 53, 0.6)' }}>At this time CredtiWorks cannot continue processing your loan application. Within 24 hours, we will send you an email with the specific reasons why we cannot approve your loan application. If you feel you have received this message in error, please contact CreditWorks via email to<Text style={{ color: 'blue' }}
                onPress={() => Linking.openURL('service.delivery@creditworksonline.com')}> service.delivery@creditworksonline.com</Text></Text>
            <TouchableOpacity style={styles.nextButtonContainer1} onPress={() => fulfillLoan()}><Text style={styles.nextButton}>FulFill Loan</Text></TouchableOpacity>
        </View>

    );


}
export default AccountCreated

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#FFFFFF'
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }, nextButtonContainer1: {
        backgroundColor: '#004ADA',
        borderRadius: 10,
        shadowColor: 'rgba(0, 74, 218, 0.25)',
        shadowOffset: {
            width: 0,
            height: 6
        },
        elevation: 0,
        shadowRadius: 10,
        width: 100 + '%',
    },
    nextButton: {
        padding: 15,
        fontWeight: '500',
        textAlign: "center",
        //fontFamily:'Poppins',
        color: 'white',
    },

});