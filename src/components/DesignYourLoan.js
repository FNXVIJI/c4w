import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

const DesignYourLoan = (props) => {

    const quickLoan = () => {
        props.navigation.navigate("QuickRelief");

    };
    const flexiLoan = () => {
        props.navigation.navigate("FlexibleLifeline");

    };


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.headingFormat}>Design Your Loan</Text>
                <Text style={styles.subHeading1} >Credit4work offers the following loan options to assist your financial needs</Text>
                <Card style={{ borderColor: '#EEEFF2', borderWidth: 1, backgroundColor: '#EEEFF2', padding: 10, margin: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={{ marginBottom: 10, fontSize: 22, fontWeight: 'bold' }}>Quick Relief</Text>
                        <Text style={{ marginBottom: 10, color: 'grey' }}>For Instant Needs</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 10, fontSize: 18 }}>Loan Upto <Text style={{ fontWeight: 'bold' }}>$500.00</Text></Text>
                        <View style={{ flexDirection: 'row', margin: 10 }}><AntDesign name="checkcircle" size={24} color="green" /><Text style={{ marginLeft: 10 }}>Loan with 5-Month Term</Text></View>
                        <View style={{ flexDirection: 'row', margin: 10 }}><AntDesign name="checkcircle" size={24} color="green" /><Text style={{ marginLeft: 10 }}>0% Interest Rate</Text></View>
                        <View style={{ flexDirection: 'row', margin: 10 }}><AntDesign name="checkcircle" size={24} color="green" /><Text style={{ marginLeft: 10 }}>$25 Up-front Fee</Text></View>
                    </View>
                    <TouchableOpacity style={styles.nextButtonContainer1} onPress={() => quickLoan()}><Text style={styles.nextButton}>Selct Quick Relief</Text></TouchableOpacity>

                </Card>
                <Card style={{ borderColor: '#EEEFF2', backgroundColor: '#EEEFF2', padding: 10, margin: 15 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                        <Text style={{ marginBottom: 10, fontSize: 22, fontWeight: 'bold' }}>Flexiable Lifeline</Text>
                        <Text style={{ marginBottom: 10, color: 'grey' }}>For Instant Needs</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ marginBottom: 10, fontSize: 18 }}>Loan Upto <Text style={{ fontWeight: 'bold' }}>$6000.00</Text></Text>
                        <View style={{ flexDirection: 'row', margin: 10 }}><AntDesign name="checkcircle" size={24} color="green" /><Text style={{ marginLeft: 10 }}>Loan with 5-Month Term</Text></View>
                        <View style={{ flexDirection: 'row', margin: 10 }}><AntDesign name="checkcircle" size={24} color="green" /><Text style={{ marginLeft: 10 }}>0% Interest Rate</Text></View>
                        <View style={{ flexDirection: 'row', margin: 10 }}><AntDesign name="checkcircle" size={24} color="green" /><Text style={{ marginLeft: 10 }}>$25 Up-front Fee</Text></View>
                    </View>
                    <TouchableOpacity style={styles.nextButtonContainer1} onPress={() => flexiLoan()}><Text style={styles.nextButton}>Select Flexiable Lifeline</Text></TouchableOpacity>

                </Card>

            </ScrollView>
            {/* <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton}><Text style={styles.buttonText} onPress={() => previousForm()}>Back</Text></TouchableOpacity>
                <TouchableOpacity style={styles.nextButtonContainer} onPress={() => submitForm()}><Text style={styles.nextButton}>Next Step</Text></TouchableOpacity>

            </View> */}
        </View >
    );


}
export default DesignYourLoan
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

        justifyContent: "space-evenly",
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headingFormat: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 30,
        // fontFamily: 'Poppins'
    },
    subHeading: {
        marginBottom: 10,
        color: '#222A35',
        //   fontFamily:'Poppins',
        fontSize: 16,
    },
    subHeading1: {
        marginBottom: 10,
        color: 'grey',
        //   fontFamily:'Poppins',
        fontSize: 16,
    },
    buttonStyle: {
        backgroundColor: '#004ADA',
        borderRadius: 10,
        shadowColor: 'rgba(0, 74, 218, 0.25)',
        shadowOffset: {
            width: 6,
            height: 0
        },
        elevation: 5,
        shadowRadius: 10,
    },
    backButton: {
        backgroundColor: '#EEEFF2',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EEEFF2',
        width: 100,
    },
    buttonText: {
        padding: 15,
        fontWeight: '500',
        textAlign: 'center',
        //  fontFamily:'Poppins',
        color: 'rgba(34, 42, 53, 0.6)',
    },
    nextButtonContainer1: {
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
    nextButtonContainer: {
        backgroundColor: '#004ADA',
        margin: 10,
        borderRadius: 10,
        shadowColor: 'rgba(0, 74, 218, 0.25)',
        shadowOffset: {
            width: 0,
            height: 6
        },
        elevation: 0,
        shadowRadius: 10,
        width: 100,
    },
    nextButton: {
        padding: 15,
        fontWeight: '500',
        textAlign: "center",
        //fontFamily:'Poppins',
        color: 'white',
    },

});
