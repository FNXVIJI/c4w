import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import IdentificationDetails from './src/components/IdentificationDetails';
import ContactDetails from './src/components/ContactDetails';
import Dashboard from './src/components/Dashboard';
import EmployeeDetails from './src/components/EmployeeDetails';
import LoanFunding1 from './src/components/LoanFunding1';
import DesignYourLoan from './src/components/DesignYourLoan';
import QuickRelief from './src/components/QuickRelief';
import FlexibleLifeline from './src/components/FlexibleLifeline';
import MonthlyBudget from './src/components/MonthlyBudget';
import LoanSummary from './src/components/LoanSummary';
import ApplicationLoading from './src/components/ApplicationLoading';

// import {

//   en,
//   registerTranslation,
// } from 'react-native-paper-dates'

// registerTranslation('en', en)

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard"
        screenOptions={{
          headerTintColor: 'grey',
          headerStyle: { backgroundColor: 'white' },
          headerTitleStyle: {
            textAlign: 'right',
          }
        }}
      >
        <Stack.Screen
          name="IdentificationDetails"
          component={IdentificationDetails}

          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 1 of 8
              </Text>
            )
          }}



        />
        <Stack.Screen name="ContactDetails"
          component={ContactDetails}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 2 of 8
              </Text>
            )
          }}

        />
        <Stack.Screen name="EmployeeDetails"
          component={EmployeeDetails}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 3 of 8
              </Text>
            )
          }}
        />
        <Stack.Screen name="Dashboard"
          component={Dashboard}

          options={{
            title: 'DashBoard',
          }}

        />

        <Stack.Screen name="LoanFunding1"
          component={LoanFunding1}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 4 of 8
              </Text>
            )
          }}

        />
        <Stack.Screen name="DesignYourLoan"
          component={DesignYourLoan}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 5 of 8
              </Text>
            )
          }}

        />
        <Stack.Screen name="QuickRelief"
          component={QuickRelief}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 6 of 8
              </Text>
            )
          }}

        />
        <Stack.Screen name="FlexibleLifeline"
          component={FlexibleLifeline}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 6 of 8
              </Text>
            )
          }}

        />
        <Stack.Screen name="MonthlyBudget"
          component={MonthlyBudget}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 6 of 8
              </Text>
            )
          }}

        />
        <Stack.Screen name="LoanSummary"
          component={LoanSummary}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 7 of 8
              </Text>
            )
          }}

        />
        <Stack.Screen name="ApplicationLoading"
          component={ApplicationLoading}
          options={{
            title: null,

            headerRight: () => (
              <Text style={styles.headerText}>
                Step 8 of 8
              </Text>
            )
          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    backgroundColor: 'white',
    color: 'grey',
    fontSize: 16,
    padding: 15
  },
});
