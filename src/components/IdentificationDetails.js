import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Modal, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, Checkbox, HelperText } from 'react-native-paper';
import DatePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import moment from "moment";


const IdentificationDetails = (props) => {

  const [showSSN, setShowSSN] = useState(true);
  const [showCSSN, setShowCSSN] = useState(true);
  const [AINModal, setAINModal] = useState(false);

  const [bcModalVisible, setBCModalVisible] = useState(false);
  const [AINType, setAINType] = useState('Select type');
  const [bankType, setBankType] = useState('Select');
  const [showLicense, setShowLicense] = useState(false);
  const [showAdhaar, setShowAdhaar] = useState(false);
  const [empId, setEmpId] = useState("");
  const [isValidEmpId, setIsValidEmpId] = useState(true);
  const [DOB, setDOB] = useState('');
  const [isValidDOB, setIsValidDOB] = useState(true);
  const [SSN, setSSN] = useState(1234567897);
  const [isValidSSN, setIsValidSSN] = useState(true);
  const [CSSN, setCSSN] = useState('');
  const [isValidCSSN, setIsValidCSSN] = useState(true);
  const [AINNo, setAINNo] = useState('');
  const [isValidAINNo, setIsValidAINNo] = useState(true);
  const [isValidAINType, setIsValidAINType] = useState(true);
  const [stateIssue, setStateIssue] = useState('');
  const [isValidStateIssue, setIsValidStateIssue] = useState(true);
  const [isValidBC, setIsVaildBC] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [isSameSSN, setIsSameSSN] = useState(true);
  const [date, setDate] = useState(new Date());
  const [checked, setChecked] = useState(false);
  const [isValidTerms, setIsValidTerms] = useState(true);












  const validate = () => {
    var errors = [];

    const pattern = /^[0-9]{9}$/;
    const pattern1 = /^(?!\d*(\d)\d*\1)\d{9}$/;
    console.log("pattern value", pattern.test(empId));
    console.log("pattern1 value", pattern1.test(empId));
    if (!pattern.test(empId) && ((!pattern1.test(empId)) && empId != "") || (pattern1.test(empId) && empId == "") || (!pattern1.test(empId))) {

      setIsValidEmpId(false);
      errors.push('EMPLOYEEID');
      console.log(errors);

    }
    // if (pattern1.test(empId)) {
    //   setIsValidEmpId(false);
    //   errors.push('EMPLOYEEID');
    //   console.log(errors);
    // }

    if (!pattern.test(SSN) && ((!pattern1.test(SSN)) && SSN != "") || (pattern1.test(SSN) && SSN == "") || (!pattern1.test(SSN))) {
      setIsValidSSN(false);
      errors.push('SSN');
      console.log(errors);
    }
    if (!pattern.test(CSSN) && ((!pattern1.test(CSSN)) && CSSN != "") || (pattern1.test(CSSN) && CSSN == "") || (!pattern1.test(CSSN))) {
      setIsValidCSSN(false);
      errors.push('CSSN');
      console.log(errors);
    }
    if (!pattern.test(AINNo) && ((!pattern1.test(AINNo)) && AINNo != "") || (pattern1.test(AINNo) && AINNo == "") || (!pattern1.test(AINNo))) {
      setIsValidAINNo(false);
      errors.push('AINNO');
      console.log(errors);
    }
    if (DOB == '') {
      setIsValidDOB(false);
      console.log('DOB');
      errors.push('DOB');
    }
    if ((SSN == CSSN) && (SSN.length == 9 || CSSN.length == 9)) {

      setIsSameSSN(false);
      setIsValidCSSN(true);
      setIsValidSSN(true);
      errors.pop('CSSN');
      errors.pop('SSN');
      errors.push('SSN and CSSN donot match')
    }
    if (bankType == 'Select') {
      setIsVaildBC(false);
      errors.push('bankruncy');
    }
    if (AINType == 'Select type') {
      setIsValidAINType(false);
      errors.push('AIN type');
    }
    if (!checked) {
      setIsValidTerms(false);
      errors.push('Terms invalid');
    }

    if ((errors.length) == 0) {
      console.log('error log inside if', errors);
      return true;
    }
    else {
      console.log('error log inside else', errors);
      return false;
    }
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDOB(currentDate);
  };

  const handleDate = async (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };
  const submitForm = () => {

    const IsValid = validate();

    if (IsValid) {
      // props.navigation.navigate("ContactDetails");
      console.log('Success');
    }
    else {
      console.log("details are not valid");
    }


    props.navigation.navigate("ContactDetails");

  }
  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setShowCalendar(false);
  };
  const previousForm = () => {
    props.navigation.navigate("Dashboard");
  }


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container1}>
        <Text style={styles.headingFormat}>Identification Details</Text>
        <Text style={styles.subHeading1} >Please provide your Identification details</Text>
        <Text style={styles.subHeading}>Employee Id</Text>

        <TextInput style={styles.inputStyle} placeholder='Employee Id' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType="numeric" value={empId} onChangeText={(e) => {
          setEmpId(e)
          setIsValidEmpId(true)
        }} right={<TextInput.Icon name="information" color='rgba(34, 42, 53, 0.6)' />} />

        {!isValidEmpId ? (<HelperText type="error">
          Employee Id is invalid!
        </HelperText>) : (null)}
        <TextInput
          style={styles.inputStyle}
          placeholder="Date Of Birth"
          placeholderTextColor="rgba(34, 42, 53, 0.6)"
          value={moment(DOB).format("L")}
          right={
            <TextInput.Icon
              name="calendar"
              color="rgba(34, 42, 53, 0.6)"
              onPress={() => handleDate()}
            />
          }
          onTouchStart={() => handleDate()}
        />

        {!isValidDOB ? (<HelperText type="error">
          Date of birth  is invalid!
        </HelperText>) : (null)}

        <TextInput style={styles.inputStyle} placeholder='Social Security Number' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType="numeric" secureTextEntry={showSSN ? false : true} value={SSN} onChangeText={(e) => {
          setSSN(e)
          setIsValidSSN(true)
          setIsSameSSN(true)
        }
        } right={<TextInput.Icon name={showSSN ? 'eye' : 'eye-off'} color='rgba(34, 42, 53, 0.6)' onPress={() => setShowSSN(!showSSN)}
        />} />

        {!isValidSSN ? (<HelperText type="error">
          Social Security Number is invalid!
        </HelperText>) : (null)}
        {!isSameSSN ? (<HelperText type="error">
          Social Security Number donot match with Confirm Social security Number
        </HelperText>) : (null)}

        <TextInput style={styles.inputStyle} placeholder='Confirm Social Security Number' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType="numeric" secureTextEntry={showCSSN ? false : true} value={CSSN} onChangeText={(e) => {
          setCSSN(e)
          setIsValidCSSN(true)
          setIsSameSSN(true);
        }} right={<TextInput.Icon name={showCSSN ? 'eye' : 'eye-off'} color='rgba(34, 42, 53, 0.6)' onPress={() => setShowCSSN(!showCSSN)} />} />

        {!isValidCSSN ? (<HelperText type="error">
          Confirm Social Security Number is invalid!
        </HelperText>) : (null)}
        {!isSameSSN ? (<HelperText type="error">
          COnfirm Social Security Number donot match with  Social security Number
        </HelperText>) : (null)}
        <Text style={styles.subHeading}>Additional Identification Type</Text>
        <TouchableOpacity style={styles.buttonContainer1} onPress={() => setAINModal(!AINModal)}  >
          <View style={styles.iconContainer}><Text style={styles.textcenter}>{AINType}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{ padding: 3 }} /></View>

        </TouchableOpacity>
        {!isValidAINType ? (<HelperText type="error">
          Additional Identification Number Type is invalid
        </HelperText>) : (null)}
        <View >
          <Modal
            animationType="slide"
            transparent={true}
            visible={AINModal}
            onRequestClose={() => {

              setAINModal(!AINModal);
            }}
          >

            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>

                  <TouchableOpacity onPress={() => setAINModal(!AINModal)}>

                    <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.textcenter1}>Select Type</Text>


                <TouchableOpacity style={AINType == 'Driving License' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setAINType('Driving License');
                  setAINModal(false);
                  setShowLicense(true);
                  setShowAdhaar(false);
                  setIsValidAINType(true);

                }}>
                  <Text style={AINType == 'Driving License' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>Driving License</Text>
                </TouchableOpacity>
                <TouchableOpacity style={AINType == 'Adhaar Card' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {

                  setAINType('Adhaar Card');
                  setAINModal(false);
                  setShowAdhaar(true);
                  setShowLicense(false);
                  setIsValidAINType(true);
                }}>
                  <Text style={AINType == 'Adhaar Card' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >Adhaar Card</Text>
                </TouchableOpacity>
              </View>
            </View>

          </Modal>
        </View>
        <View>
          {
            showLicense ? (<View style={{ marginLeft: 30 }}><TextInput style={styles.inputStyle} placeholder='State of Issusance' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={stateIssue} onChangeText={(e) => {
              setStateIssue(e)
              setIsValidStateIssue(true)
            }}></TextInput>

              {!isValidStateIssue ? (<HelperText type="error">
                State is invalid!
              </HelperText>) : (null)}
              <TextInput style={styles.inputStyle} placeholder='License Number' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType="numeric" value={AINNo} onChangeText={(e) => {
                setAINNo(e)
                setIsValidAINNo(true)
              }}></TextInput>
              {!isValidAINNo ? (<HelperText type="error">
                Additional Identification Number is invalid!
              </HelperText>) : (null)}
            </View>) : (null)
          }
        </View>

        <View>
          {
            showAdhaar ? (<View style={{ marginLeft: 30 }}><TextInput style={styles.inputStyle} placeholder='State of Issusance' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={stateIssue} onChangeText={(e) => {
              setStateIssue(e)
              setIsValidStateIssue(true)
            }}></TextInput>

              {!isValidStateIssue ? (<HelperText type="error">
                State is invalid!
              </HelperText>) : (null)}

              <TextInput style={styles.inputStyle} placeholder='Adhaar Number' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType="numeric" value={AINNo} onChangeText={(e) => {
                setAINNo(e)
                setIsValidAINNo(true)
              }}></TextInput>
              {!isValidAINNo ? (<HelperText type="error">
                Additional Identification Number is invalid!
              </HelperText>) : (null)}
            </View>) : (null)
          }
        </View>

        <Text style={styles.subHeading}>Are you currently participating in a bankruptcy proceeding</Text>
        <TouchableOpacity style={styles.buttonContainer1} onPress={() => setBCModalVisible(!bcModalVisible)}  >
          <View style={styles.iconContainer}><Text style={styles.textcenter}>{bankType}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{ padding: 3 }} /></View>

        </TouchableOpacity>
        {!isValidBC ? (<HelperText type="error">
          bankruptcy is invalid!
        </HelperText>) : (null)}


        <Modal
          animationType="slide"
          transparent={true}
          visible={bcModalVisible}
          onRequestClose={() => {

            setBCModalVisible(!bcModalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>

                <TouchableOpacity onPress={() => setBCModalVisible(!bcModalVisible)}>

                  <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
                </TouchableOpacity>
              </View>
              <Text style={styles.textcenter1}>Select </Text>


              <TouchableOpacity style={bankType == 'YES' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                setBankType('YES');
                setBCModalVisible(false);
                setIsVaildBC(true);
              }}>
                <Text style={bankType == 'YES' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity style={bankType == 'NO' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                setBankType('NO');
                setBCModalVisible(false);
                setIsVaildBC(true);
              }}>
                <Text style={bankType == 'NO' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >NO</Text>
              </TouchableOpacity>

            </View>
          </View>
        </Modal>



        <View style={styles.checkboxContainer}>
          <Checkbox color='green'
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
              setIsValidTerms(true);
            }}
          /><Text style={styles.checkboxtext}>I Agree to <Text style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://google.com')}>Terms of service</Text>  and <Text style={{ color: 'blue' }}
              onPress={() => Linking.openURL('http://google.com')}>Private policy</Text></Text>
        </View>
        {!isValidTerms ? (<HelperText type="error">
          Terms and conditions is invalid!
        </HelperText>) : (null)}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton}><Text style={styles.buttonText} onPress={() => previousForm()}>Back</Text></TouchableOpacity>
        <TouchableOpacity style={styles.nextButtonContainer} onPress={() => submitForm()}><Text style={styles.nextButton}>Next Step</Text></TouchableOpacity>

      </View>
    </View>
  );


}
export default IdentificationDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

    justifyContent: "space-evenly",
    padding: 20,
  },


  inputContainer: {
    backgroundColor: '#EEEFF2'

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 20,
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  modalView: {
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    width: 100 + "%",
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  buttonContainer1: {
    backgroundColor: '#EEEFF2',
    height: 50,
    marginBottom: 10,
    // fontFamily: 'Poppins',
    fontSize: 14,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0,
    borderRadius: 5
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
  }, subHeading1: {
    marginBottom: 10,
    color: 'grey',
    //   fontFamily:'Poppins',
    fontSize: 16,
  },
  inputStyle: {

    borderRadius: 10,
    height: 50,
    backgroundColor: '#EEEFF2',
    //  fontFamily: 'Poppins',
    marginBottom: 10,
    fontSize: 14,
    paddingHorizontal: 10,
    borderWidth: 0,
    shadowOffset: {
      width: 0,
      height: 0
    },
    elevation: 0

  },
  textcenter: {
    textAlign: 'justify',
    fontSize: 14,

    color: "rgba(34, 42, 53, 0.6)",
  },
  checkboxtext: {
    padding: 5

  },
  checkbox: {

    color: "green",
  },

  modalText: {
    padding: 15,
    textAlign: "center",

  },
  centeredView: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "auto",

  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
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
  },



  textcenter1: {
    textAlign: 'justify',
    fontSize: 14,
    color: 'rgba(34, 42, 53, 0.6)',
    marginBottom: 10
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  modalOptionDefault: {
    backgroundColor: '#FFFFFF',
    width: 100 + "%",
    borderRadius: 10,
    justifyContent: "center"
  },
  modalOptionTrue: {

    backgroundColor: '#047E40',
    width: 100 + "%",
    borderRadius: 10,
    justifyContent: "center"
  },
  modalOptionTextTrue: {
    color: '#EEEFF2',
    padding: 15,
    textAlign: "center"
  },
  modalOptionTextDefault: {
    padding: 15,
    textAlign: "center",
  },
  modalHeader: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    margin: 10
  },


});

