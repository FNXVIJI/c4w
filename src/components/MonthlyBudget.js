import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { TextInput, HelperText, Card } from 'react-native-paper';

const MonthlyBudget = (props) => {
    const submitForm = () => {
        props.navigation.navigate("LoanSummary");
    };

    const previousForm = () => {
        props.navigation.navigate("MonthlyBudget");
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.headingFormat}>My Monthly Budget</Text>
                <Text style={styles.subHeading1} >Please select your monthy budget </Text>
                <Text style={styles.subHeading}>My Monthly Income</Text>
                <View style={{ marginBottom: 10 }}><TextInput style={styles.inputStyle}

                    onChangeText={(e) => {

                    }} placeholder='Pay Check' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' underlineColor="transparent" right={<TextInput.Affix text="In $" />} />
                    <TextInput style={styles.inputStyle}
                        // value={otherincome}
                        onChangeText={(e) => {

                        }} placeholder='Other Income' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' underlineColor="transparent" right={<TextInput.Affix text="In $" />} />
                    <View style={styles.line}></View>
                    <View style={styles.cellFormat1}><Text style={{ fontSize: 14, fontWeight: '500' }}>Total Monthly Net Income:</Text><Text style={{ fontWeight: '500', color: '#004ADA' }}>$0.00</Text></View>
                </View>
                <Text style={styles.subHeading}>My Monthly Expenses</Text>
                <TextInput style={styles.inputStyle}
                    // value={housing}:
                    onChangeText={(e) => {

                    }} placeholder='Housing' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' underlineColor="transparent" right={<TextInput.Affix text="In $" />} />
                <TextInput underlineColor="transparent" style={styles.inputStyle}
                    //value={Utilites}
                    onChangeText={(e) => {

                    }} placeholder='Utilites' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />} />
                <TextInput style={styles.inputStyle}
                    // value={housing}
                    onChangeText={(e) => {

                    }} placeholder='Groceries' underlineColor="transparent" placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />} />
                <TextInput style={styles.inputStyle}
                    //value={gro}
                    onChangeText={(e) => {

                    }} placeholder='Transportation' underlineColor="transparent" placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />} />
                <TextInput style={styles.inputStyle}
                    //value={housing}
                    onChangeText={(e) => {

                    }} placeholder='Health' underlineColor="transparent" placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />} />
                <TextInput style={styles.inputStyle}
                    //value={Utilites}
                    onChangeText={(e) => {

                    }} placeholder='Insurance' underlineColor="transparent" placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />} />
                <TextInput style={styles.inputStyle}
                    //value={housing}
                    onChangeText={(e) => {

                    }} placeholder='Finance' underlineColor="transparent" placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />} />
                <TextInput style={styles.inputStyle}
                    //value={Utilites}
                    onChangeText={(e) => {

                    }} placeholder='Personal & Family' underlineColor="transparent" placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />} />
                <TextInput style={styles.inputStyle}
                    //value={housing}
                    onChangeText={(e) => {

                    }} placeholder='Others' underlineColor="transparent" placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />} />
                <View style={styles.line}></View>
                <View style={styles.cellFormat1}><Text style={{ fontSize: 14, fontWeight: '500' }}>Total Monthly Expense:</Text><Text style={{ fontWeight: "500", color: '#004ADA' }}>$0.00</Text></View>
                <View style={styles.cardFormat}>
                    <View style={styles.cellFormat}><Text style={{ color: 'rgba(34, 42, 53, 0.6)' }}>Estimated Future Loan Payment</Text><Text>$0.00</Text></View>
                    <View style={styles.line2}></View>
                    <View style={styles.cellFormat}><Text style={{ color: 'rgba(34, 42, 53, 0.6)' }}>Remaining Available Cash</Text><Text>$0.00</Text></View>
                </View>

            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.backButton}><Text style={styles.buttonText} onPress={() => previousForm()}>Back</Text></TouchableOpacity>
                <TouchableOpacity style={styles.nextButtonContainer} onPress={() => submitForm()}><Text style={styles.nextButton}>Next Step</Text></TouchableOpacity>

            </View>
        </View>

    );


}
export default MonthlyBudget
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

        justifyContent: "space-evenly",
        padding: 20,
    }, headingFormat: {
        marginBottom: 10,
        fontWeight: 'bold',
        fontSize: 30,
        //fontFamily: 'Poppins'
    },
    subHeading: {
        marginBottom: 10,
        color: '#222A35',
        // fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '500'


    }, subHeading1: {
        marginBottom: 30,
        color: 'grey',
        //   fontFamily:'Poppins',
        fontSize: 16,
    },
    line: {
        borderTopColor: 'rgba(34, 42, 53, 0.1)',
        borderTopWidth: 1,
        marginBottom: 10
    }, line2: {
        borderTopColor: 'rgba(34, 42, 53, 0.1)',
        borderTopWidth: 1,
        marginVertical: 10
    },
    inputStyle: {
        borderRadius: 10,
        height: 50,
        backgroundColor: '#EEEFF2',
        //   fontFamily: 'Poppins',
        marginBottom: 10,
        fontSize: 14,
        paddingHorizontal: 10,
        borderWidth: 0,
        shadowOffset: {
            width: 0,
            height: 0
        },
        elevation: 0

    }, cellFormat1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }, cellFormat: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardFormat: {
        borderColor: 'rgba(34, 42, 53, 0.1)',
        borderWidth: 1,
        backgroundColor: '#F2F8F4',
        padding: 15,
        marginTop: 10,
        borderRadius: 10
    }, backButton: {
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
        fontSize: 16
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
    }, buttonContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }


});