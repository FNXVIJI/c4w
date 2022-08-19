import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

const QuickRelief = (props) => {
    const submitForm = () => {
        props.navigation.navigate("MonthlyBudget");
    };

    const previousForm = () => {
        props.navigation.navigate("DesignYourLoan");
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.headingFormat}>You have selected QuickRelief Loan Details</Text>
                    <Text style={styles.subHeading1}>*Only one loan per employee is permitted to be outstanding at any time. Our loan products do not charge prepayment penalties or late fees.</Text>
                    <View style={styles.cardFormat1}><View style={styles.cellFormat}><Text>Loan Amount</Text><Text>$500.00</Text></View></View>
                    <View style={styles.cardFormat22}><View style={styles.cellFormat}><Text>Terms in Months</Text><Text>05</Text></View></View>
                    <View style={styles.cardFormat11}><View style={styles.cellFormat}><Text>Number of Payments</Text><Text>22</Text></View></View>
                    <View style={styles.cardFormat22}><View style={styles.cellFormat}><Text>Estimated Loan Payment</Text><Text>$23.86</Text></View></View>
                    <View style={styles.cardFormat11}><View style={styles.cellFormat}><Text>Estimated First Payment Due Date</Text><Text>01/07/2022</Text></View></View>
                    <View style={styles.cardFormat2}><View style={styles.cellFormat}><Text>Payment Frequency</Text><Text>Weekly</Text></View></View>
                    <View style={styles.info}><AntDesign name="infocirlce" size={18} color="grey" /><Text style={styles.infoText}>CREDITWORKS LLC charges a $25.00 Credit Investigation Fee on all loans. The Fee is used to offset the cost of investigating and processing your loan application.</Text></View>
                    <View style={styles.info}><AntDesign name="infocirlce" size={18} color="grey" /><Text style={styles.infoText}>Your loan application is subject to application and employment verifications. Other terms and conditions apply. Not all applicants will qualify for a loan.</Text></View>
                    <View style={styles.info}><AntDesign name="infocirlce" size={18} color="grey" /><Text style={styles.infoText}>Your loan information is accurate as of today's date. If your loan application is approved on a subsequent date, your loan terms may be recalculated as of the date that you sign your loan documents.</Text></View>
                </View>

            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton}><Text style={styles.buttonText} onPress={() => previousForm()}>Back</Text></TouchableOpacity>
                <TouchableOpacity style={styles.nextButtonContainer} onPress={() => submitForm()}><Text style={styles.nextButton}>Next Step</Text></TouchableOpacity>

            </View>
        </View>

    );


}
export default QuickRelief
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
        fontSize: 22,
        // fontFamily: 'Poppins'
    },
    subHeading: {
        marginBottom: 10,
        color: '#222A35',
        //   fontFamily:'Poppins',
        fontSize: 16,
    },
    subHeading1: {
        marginBottom: 20,
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
        backgroundColor: '#FFFFFF',
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
    },

});