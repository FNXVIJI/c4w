import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

const LoanSummary = (props) => {

    const applyLoan = () => {
        props.navigation.navigate("ApplicationLoading");
    };

    return (

        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.headingFormat}>My Loan Summary Good faith estimate</Text>
                    <Text style={styles.subHeading1}>Please check your loan summary</Text>
                    <Card style={styles.cardFormat1}><View style={styles.cellFormat}><Text style={{ flexWrap: "wrap" }}>Loan proceeds paid directly to borrower</Text><Text>$500.00</Text></View></Card>
                    <Card style={styles.cardFormat22}><View style={styles.cellFormat}><Text>Credit investigation fee</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat11}><View style={styles.cellFormat}><Text>Loan amount</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat22}><View style={styles.cellFormat}><Text>Loan term in months</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat11}><View style={styles.cellFormat}><Text>No of Pay Periods(payments)</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat22}><View style={styles.cellFormat}><Text>Annual Simple Interest Rate</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat11}><View style={styles.cellFormat}><Text>Annual Percentage rate</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat22}><View style={styles.cellFormat}><Text>First Loan payment date</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat11}><View style={styles.cellFormat}><Text>Loan funding Method</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat22}><View style={styles.cellFormat}><Text>Loan term in months</Text><Text>05</Text></View></Card>
                    <Card style={styles.cardFormat2}><View style={styles.cellFormat}><Text>Check Mailing Address</Text><Text>Home Address</Text></View></Card>
                </View>
                <View style={styles.info}><AntDesign name="infocirlce" size={24} color="grey" /><Text style={styles.infoText}>CREDITWORKS LLC charges a $25.00 Credit Investigation Fee on all loans. The Fee is used to offset the cost of investigating and processing your loan application.</Text></View>
            </ScrollView>
            <TouchableOpacity style={styles.nextButtonContainer1} onPress={() => applyLoan()}><Text style={styles.nextButton}>Submit Application</Text></TouchableOpacity>
        </View>
    );


}
export default LoanSummary
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
        margin: 10,
        fontWeight: 'bold',
        fontSize: 30,
        // fontFamily: 'Poppins'
    },
    subHeading: {
        margin: 10,
        color: '#222A35',
        //   fontFamily:'Poppins',
        fontSize: 16,
    },
    subHeading1: {
        margin: 10,
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
    }, cellFormat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }, cardFormat1: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: '#F2F8F4',
        backgroundColor: '#F2F8F4',
        padding: 10,
        borderWidth: 2,
    }, cardFormat2: {
        borderColor: '#F2F8F4',
        backgroundColor: '#F2F8F4',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 2,
        marginBottom: 10

    }, cardFormat11: {
        borderWidth: 2,
        borderColor: '#F2F8F4',
        backgroundColor: '#F2F8F4',
        padding: 10,
    }, cardFormat22: {
        borderColor: '#F2F8F4',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderWidth: 2,

    }, info: {
        flexDirection: 'row',
        margin: 10
    }, infoText: {
        color: 'rgba(34, 42, 53, 0.6)',
        marginLeft: 10,
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




















