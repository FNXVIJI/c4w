import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import Slider from '@react-native-community/slider';

const FlexibleLifeline = (props) => {


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.headingFormat}>Design the Loan That’s Right For You</Text>
                <Text style={styles.subHeading}>Select Your Loan Amount</Text>
                <Slider
                    style={{ width: 100 + '%', height: 50 }}
                    minimumValue={500}
                    maximumValue={6000}
                    minimumTrackTintColor="rgba(120, 120, 128, 0.2)"
                    maximumTrackTintColor="#004ADA"
                    thumbTintColor="#004ADA"
                />
                <Card style={styles.cardFormat}>
                    <Text style={styles.subHeading}>6 Months</Text>
                    <View style={styles.cardView}><Text style={styles.subHeading}>Loan Payment</Text><Text style={styles.subHeading1}>$21.56</Text></View>
                    <View style={styles.cardView}><Text style={styles.subHeading}>No of Payment</Text><Text style={styles.subHeading1}>26</Text></View>
                    <TouchableOpacity style={styles.nextButtonContainer1} onPress={() => quickLoan()}><Text style={styles.nextButton}>Select 6 Months</Text></TouchableOpacity>
                </Card>
                <Card style={styles.cardFormat}>
                    <Text style={styles.subHeading}>12 Months</Text>
                    <View style={styles.cardView}><Text style={styles.subHeading}>Loan Payment</Text><Text style={styles.subHeading1}>$21.56</Text></View>
                    <View style={styles.cardView}><Text style={styles.subHeading}>No of Payment</Text><Text style={styles.subHeading1}>48</Text></View>
                    <TouchableOpacity style={styles.nextButtonContainer1} onPress={() => quickLoan()}><Text style={styles.nextButton}>Select 12 Months</Text></TouchableOpacity>
                </Card>
                <Card style={styles.cardFormat}>
                    <Text style={styles.subHeading}>18 Months</Text>
                    <View style={styles.cardView}><Text style={styles.subHeading}>Loan Payment</Text><Text style={styles.subHeading1}>$21.56</Text></View>
                    <View style={styles.cardView}><Text style={styles.subHeading}>No of Payment</Text><Text style={styles.subHeading1}>56</Text></View>
                    <TouchableOpacity style={styles.nextButtonContainer1} onPress={() => quickLoan()}><Text style={styles.nextButton}>Select 18 Months</Text></TouchableOpacity>
                </Card>
            </ScrollView>
        </View>





    );


}
export default FlexibleLifeline
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',

        justifyContent: "space-evenly",
        padding: 20,
    }, headingFormat: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 30,
        // fontFamily: 'Poppins'
    }, subHeading: {
        margin: 10,
        fontSize: 20,
        color: '#222A35'
    }, cardFormat: {

        borderColor: '#EEEFF2',
        borderWidth: 1,
        backgroundColor: '#EEEFF2',
        padding: 10,
        margin: 15
    }, subHeading1: {
        margin: 10,
        color: 'grey',
        //   fontFamily:'Poppins',
        fontSize: 16,
    }, cardView: {
        flexDirection: 'row',
        justifyContent: "space-between"
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
