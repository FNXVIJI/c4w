import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Modal, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, List, RadioButton, HelperText } from 'react-native-paper';

const LoanFunding1 = (props) => {

  const [fundingModalVisible, setFundingModalVisible] = useState(false);
  const [accTypeModalVisible, setAccTypeModalVisible] = useState(false);
  const [type, settype] = useState('Select type');
  const [atype, setAtype] = useState('Account type');
  const [showblock, setShowBlock] = useState(false);
  const [showblock2, setShowBlock2] = useState(false);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState(false);
  const [isValidFunding, setIsValidFunding] = useState(true);
  const [isValidAccType, setIsValidAccType] = useState(true);
  const [routingNumber, setRoutingNumber] = useState(Number);
  const [confirmRoutingNumber, setConfirmRoutingNumber] = useState(Number);
  const [accountNumber, setAccountNumber] = useState(Number);
  const [confirmAccountNumber, setConfirmAccountNumber] = useState(Number);
  const [isVaildRoutingNumber, setIsValidRoutingNumber] = useState(true);
  const [isValidAccountNumber, setIsValidAccountNumber] = useState(true);
  const [isSameAccNo, setIsSameAccNo] = useState(true);
  const [isSameRoutingNo, setIsRoutingNo] = useState(true);


  const validate = () => {
    var errors = [];

    const pattern1 = /^(?!\d*(\d)\d*\1)\d{9}$/;

    if (((!pattern1.test(routingNumber)) && routingNumber != "") || (pattern1.test(routingNumber) && routingNumber == "") || (!pattern1.test(routingNumber)) && (routingNumber == confirmRoutingNumber)) {

      setIsValidRoutingNumber(false);
      errors.push('Routing Number');
      errors.push('Confirm Routing number')
      console.log(errors);

    }
    if (((!pattern1.test(accountNumber)) && accountNumber != "") || (pattern1.test(accountNumber) && accountNumber == "") || (!pattern1.test(accountNumber)) && (accountNumber == confirmAccountNumber)) {

      setIsValidAccountNumber(false);
      errors.push('Account Number');
      errors.push('Confirm Account number')
      console.log(errors);

    }
    if (type == 'Select type') {
      setIsValidFunding(false);
      errors.push('Funding method');
    }
    if (atype == 'Account type') {
      setIsValidAccType(false);
      errors.push('Account type');
    }
    if (accountNumber != confirmAccountNumber) {
      setIsSameAccNo(false);
      errors.push('account no does not match');
    }
    if (routingNumber != confirmRoutingNumber) {
      setIsSameRoutingNo(false);
    }
    if ((errors.length) == 0) {
      console.log('error log inside if', errors);
      return true;
    }
    else {
      console.log('error log inside else', errors);
      return false;
    }
  };

  const submitForm = () => {
    const IsValid = validate();

    if (IsValid) {
      // props.navigation.navigate("IdentificationDetails");
      console.log('Success');
    }
    else {
      console.log("details are not valid");
    }

    props.navigation.navigate("DesignYourLoan");
  };
  const previousForm = () => {
    props.navigation.navigate("EmployeeDetails");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headingFormat}>Loan Funding Details</Text>
        <Text style={styles.subHeading1} >Please select your loan funding method </Text>
        <Text style={styles.subHeading}>Funding Method</Text>
        <TouchableOpacity style={styles.buttonContainer1} onPress={() => setFundingModalVisible(!fundingModalVisible)}  >
          <View style={styles.iconContainer}><Text style={type == 'Select type' ? styles.textcenter : {
            textAlign: 'justify',
            fontSize: 14,
            color: '#004ADA',
          }}>{type}</Text><AntDesign name="down" size={14} color={type == 'Select Type' ? "rgba(34, 42, 53, 0.6)" : '#004ADA'} style={{ padding: 3 }} /></View>

        </TouchableOpacity>
        <View >

          <Modal
            animationType="slide"
            transparent={true}
            visible={fundingModalVisible}
            onRequestClose={() => {

              setFundingModalVisible(!fundingModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>

                  <TouchableOpacity onPress={() => setFundingModalVisible(!fundingModalVisible)}>
                    {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                    <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.textcenter1}>Select Type</Text>


                <TouchableOpacity style={type == 'Direct Deposit' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setIsValidFunding(true);
                  settype('Direct Deposit');
                  setFundingModalVisible(false);
                  setShowBlock(true);
                  setShowBlock2(false);

                }}>
                  <Text style={type == 'Direct Deposit' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>Direct Deposit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={type == 'Check' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setIsValidFunding(true);
                  settype('Check');
                  setFundingModalVisible(false);
                  setShowBlock(false);
                  setShowBlock2(true);

                }}>
                  <Text style={type == 'Check' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >Check</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        {!isValidFunding ? (<HelperText type="error">
          Funding Method  is invalid!
        </HelperText>) : (null)}
        <View>
          {
            showblock ? (<View><Text style={styles.subHeading}>Bank Name</Text>
              <TextInput style={styles.inputStyle} label='Bank Name' placeholderTextColor="rgba(34, 42, 53, 0.6)" />
              <TouchableOpacity style={styles.buttonContainer1} onPress={() => setAccTypeModalVisible(!accTypeModalVisible)}  >
                <View style={styles.iconContainer}><Text style={atype == 'Account type' ? styles.textcenter : {
                  textAlign: 'justify',
                  fontSize: 14,
                  color: '#004ADA',
                }}>{atype}</Text><AntDesign name="down" size={14} color={atype == 'Select Type' ? "rgba(34, 42, 53, 0.6)" : '#004ADA'} style={{ padding: 3 }} /></View>

              </TouchableOpacity>
              <View >
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={accTypeModalVisible}
                  onRequestClose={() => {

                    setAccTypeModalVisible(!accTypeModalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={styles.modalHeader}>

                        <TouchableOpacity onPress={() => setFundingModalVisible(!fundingModalVisible)}>
                          {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                          <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.6)" />
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.textcenter1}>Select Type</Text>

                      <TouchableOpacity style={atype == 'Savings' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                        setAtype('Savings');
                        setIsValidAccType(true);
                        setAccTypeModalVisible(false);

                      }}>
                        <Text style={atype == 'Savings' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>Savings</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={atype == 'Current' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                        setAtype('Current');
                        setIsValidAccType(true);
                        setAccTypeModalVisible(false);

                      }}>
                        <Text style={atype == 'Current' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >Current</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
              {!isValidAccType ? (<HelperText type="error">
                Account Type  is invalid!
              </HelperText>) : (null)}
              <TextInput style={styles.inputStyle} label='Bank Routing Number' underlineColor="transparent" placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' onChangeText={(e) => {
                setRoutingNumber(e);
                setIsSameRoutingNo(true);
                setIsValidRoutingNumber(true);
              }} right={<TextInput.Icon name="information" color='rgba(34, 42, 53, 0.6)' />} />
              {!isVaildRoutingNumber ? (<HelperText type="error">
                Routing Number is invalid!
              </HelperText>) : (null)}
              {!isSameRoutingNo ? (<HelperText type="error">
                Routing number does not match with  Confirm Routing number!
              </HelperText>) : (null)}
              <TextInput style={styles.inputStyle} underlineColor="transparent" keyboardType='numeric' label='Confirm Bank Routing Number' placeholderTextColor="rgba(34, 42, 53, 0.6)" onChangeText={(e) => {
                setConfirmRoutingNumber(e);
                setIsValidRoutingNumber(true);
                setIsSameRoutingNo(true);
              }} />
              {!isVaildRoutingNumber ? (<HelperText type="error">
                Confirm Routing number is invalid!
              </HelperText>) : (null)}
              {!isSameRoutingNo ? (<HelperText type="error">
                Confirm Routing number does not match with Routing number!
              </HelperText>) : (null)}
              <TextInput style={styles.inputStyle} underlineColor="transparent" keyboardType='numeric' label='Account Number' placeholderTextColor="rgba(34, 42, 53, 0.6)" onChangeText={(e) => {
                setAccountNumber(e);
                setIsValidAccountNumber(true);
                setIsSameAccNo(true);
              }} right={<TextInput.Icon name="information" color='rgba(34, 42, 53, 0.6)' />} />
              {!isSameAccNo ? (<HelperText type="error">
                Account number does not match with  Confirm Account number!
              </HelperText>) : (null)}
              {!isValidAccountNumber ? (<HelperText type="error">
                Account Number  is invalid!
              </HelperText>) : (null)}
              <TextInput style={styles.inputStyle} underlineColor="transparent" keyboardType='numeric' label='Confirm Account Number' placeholderTextColor="rgba(34, 42, 53, 0.6)" onChangeText={(e) => {
                setConfirmAccountNumber(e);
                setIsValidAccountNumber(true);
                setIsSameAccNo(true);
              }} />
              {!isSameAccNo ? (<HelperText type="error">
                Confirm Account number does not match with Account number!
              </HelperText>) : (null)}
              {!isValidAccountNumber ? (<HelperText type="error">
                Confirm Account Number is invalid!
              </HelperText>) : (null)}</View>) : (null)
          }
          <View>
            {
              showblock2 ? (<View><Text style={styles.subHeading}>Select Mailing Address</Text>

                <RadioButton.Group
                  value={option1}
                  label=" "
                  color='green'
                  status={option1 ? 'checked' : 'unchecked'}
                  onValueChange={(e) => {
                    setOption1(e);
                    // setOption2(false)
                  }}
                >
                  <TouchableOpacity style={{
                    borderColor: option1 == 'first' ? '#047E40' : '#EEEFF2', borderRadius: 10, backgroundColor: '#rgba(4, 126, 64, 0.1)', borderWidth: 1,
                    marginTop: 10, width: 100 + "%"
                  }}
                    onPress={() => {
                      setOption1('first');

                    }}>
                    <View style={{ flexDirection: 'row' }}>
                      <RadioButton value="first" />
                      <View style={{ flexGrow: 1, paddingTop: 10, alignItems: 'flex-start' }}>

                        <Text style={{ paddingBottom: 10 }}>Home Mailing Address </Text>
                        <View>{option1 == 'first' ? <View style={{ paddingVertical: 10, borderTopWidth: 1, borderTopColor: "rgba(34, 42, 53, 0.1)" }}><Text>Back Board </Text>
                          <Text>3190 Coral Rd Unit 23</Text>
                          <Text>Miami Florida 33147 </Text></View> : null}
                        </View>

                      </View>
                      <AntDesign style={{ padding: 15 }} name={option1 == 'first' ? 'up' : "down"} size={14} color="rgba(34, 42, 53, 0.6)" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    borderColor: option1 == 'second' ? '#047E40' : '#EEEFF2', borderRadius: 10, backgroundColor: '#rgba(4, 126, 64, 0.1)', borderWidth: 1,
                    marginTop: 10, width: 100 + "%"
                  }}
                    onPress={() => {
                      setOption1('second');

                    }}>

                    <View style={{ flexDirection: 'row' }}>
                      <RadioButton value="second" />
                      <View style={{ flexGrow: 1, paddingTop: 10, alignItems: 'flex-start' }}>

                        <Text style={{ paddingBottom: 10 }}>Street Residence Address</Text>
                        <View>{option1 == 'second' ? <View style={{ paddingVertical: 10, borderTopWidth: 1, borderTopColor: "rgba(34, 42, 53, 0.1)" }}><Text>Back Board </Text>
                          <Text>3190 Coral Rd Unit 23</Text>
                          <Text>Miami Florida 33147 </Text></View> : null}
                        </View>

                      </View>
                      <AntDesign style={{ padding: 15 }} name={option1 == 'second' ? 'up' : "down"} size={14} color="rgba(34, 42, 53, 0.6)" />
                    </View>

                  </TouchableOpacity>
                </RadioButton.Group>


              </View>) : (null)
            }
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton}><Text style={styles.backButtonText} onPress={() => previousForm()}>Back</Text></TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => submitForm()}><Text style={styles.nextButtonText}>Next Step</Text></TouchableOpacity>

      </View>
    </View>
  );


}
export default LoanFunding1

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
    flexDirection: 'row',
    justifyContent: 'flex-start'
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
    //  fontFamily: 'Poppins',
    fontSize: 14,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0,
    borderRadius: 10
  },
  headingFormat: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 30,
    //fontFamily: 'Poppins'
  },
  subHeading: {
    marginVertical: 20,
    color: '#222A35',
    //   fontFamily:'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
  }, subHeading1: {
    marginBottom: 20,
    color: 'rgba(34, 42, 53, 0.6)',
    //   fontFamily:'Poppins',
    fontSize: 16,
  },
  inputStyle: {

    borderRadius: 10,
    height: 50,
    backgroundColor: '#EEEFF2',
    // fontFamily: 'Poppins',
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
  textcenter1: {
    textAlign: 'justify',
    fontSize: 14,
    color: "rgba(34, 42, 53, 0.6)",
    marginBottom: 10
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  modalHeader: {
    flexDirection: "row",
    alignSelf: 'flex-end',
    margin: 10
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
  backButton: {
    backgroundColor: '#EEEFF2', margin: 10,
    borderRadius: 10, borderWidth: 1, borderColor: '#EEEFF2', width: 100
  },
  backButtonText: {
    padding: 15, fontWeight: '500', textAlign: 'center',// fontFamily: 'Poppins', 
    color: 'rgba(34, 42, 53, 0.6)'

  },
  nextButton: {
    backgroundColor: '#004ADA', margin: 10,
    borderRadius: 10, shadowColor: 'rgba(0, 74, 218, 0.25)',
    shadowOffset: {
      width: 0,
      height: 6
    },
    elevation: 0,
    shadowRadius: 10, width: 100
  },
  nextButtonText: {
    padding: 15, fontWeight: '500', textAlign: "center",// fontFamily: 'Poppins',
    color: 'white'
  },
});

