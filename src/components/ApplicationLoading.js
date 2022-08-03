import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const ApplicationLoading = (prop) => {

    return (
        <View style={styles.container}>
            <ActivityIndicator style={{
                color: '#004ADA', marginBottom: 10
            }} />
            <Text style={{ marginBottom: 10, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>Your Application is Being Created, Please Wait ...</Text>
            <Text style={{ textAlign: 'center', alignSelf: 'center', color: 'rgba(34, 42, 53, 0.6)' }}>CreditWorks is processing your loan application. This process may take few minutes. Please do not select your browser’s Back Arrow or Refresh your screen while we are processing your loan application. Thank you for your patience and interest in a CreditWorks loan product.</Text>
        </View>

    );


}
export default ApplicationLoading

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
    }
});