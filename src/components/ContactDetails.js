import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking, Modal, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Checkbox, HelperText } from 'react-native-paper';





const ContactDetails = (props) => {
  const [ptype, setpType] = useState('Select Type');
  const [stype, setsType] = useState('Select Type');
  const [rtype, setrType] = useState('Select Type');
  const [checked, setChecked] = useState(Boolean);
  const [checked1, setChecked1] = useState(Boolean);
  const [rrtype, setrrType] = useState('Years at Residence');
  const [pNoModalVisible, setPNoModalVisible] = useState(false);
  const [sNoModalVisible, setSNoModalVisible] = useState(false);
  const [rentModalVisible, setRentModalVisible] = useState(false);
  const [yearsModalVisible, setYearsModalVisible] = useState(false);
  const [showblock1, setShowBlock1] = useState(false);
  const [showblock2, setShowBlock2] = useState(false);
  const [showblock3, setShowBlock3] = useState(false);
  const [showblock4, setShowBlock4] = useState(false);
  const [primaryNo, setPrimaryNo] = useState(Number);
  const [isValidPNo, setIsValidPNo] = useState(true);
  const [secondaryNo, setSecondaryNo] = useState(Number);
  const [isValidSNo, setIsValidSNo] = useState(true);
  const [homeAddress, setHomeAddress] = useState('');
  const [isValidHAddress1, setIsValidHAddress1] = useState(true);
  const [homeAddress2, setHomeAddress2] = useState('');
  const [isValidHAddress2, setIsValidHAddress2] = useState(true);
  const [homeZipcode, setHomeZipcode] = useState(Number);
  const [isValidHomeZipcode, setIsValidHomeZipcode] = useState(true);
  const [homeCity, setHomeCity] = useState('');
  const [isValidHomeCity, setIsValidHomeCity] = useState(true);
  const [homeState, setHomeState] = useState('');
  const [isValidHomeState, setIsValidHomeState] = useState(true);
  const [residenceAddress, setResidenceAddress] = useState('');
  const [isValidResidenceAddress, setIsValidResidenceAddress] = useState(true);
  const [residenceAddress2, setResidenceAddress2] = useState('');
  const [isValidResidenceAddress2, setIsValidResidenceAddress2] = useState(true);
  const [RZipcode, setRZipcode] = useState(Number);
  const [isValidRZipcode, setIsValidRZipcode] = useState(true);
  const [RCity, setRCity] = useState('');
  const [isValidRCity, setIsValidRCity] = useState(true);
  const [RState, setRState] = useState('');
  const [isValidRState, setIsValidRState] = useState(true);
  const [isValidPnoType, setIsValidPnoType] = useState(true);
  const [isValidSnoType, setIsValidSnoType] = useState(true);
  const [isValidResidenceType, setIsValidResidenceType] = useState(true);
  const [isValidYearsAtResidence, setIsValidYearsAtResidence] = useState(true);
  const [isValidTerms, setIsValidTerms] = useState(true);



  const validate = () => {
    var errors = [];

    const pattern = /^[2-9]{3}[1-8]{3}[0-9]{4}$/;

    console.log(pattern.test(primaryNo));
    if (!pattern.test(primaryNo)) {
      setIsValidPNo(false);
      errors.push('primaryNo');
      console.log(errors);
    }
    if (!pattern.test(secondaryNo)) {
      setIsValidSNo(false);
      errors.push('SecondaryNo');
      console.log(errors);
    }
    if (rtype == 'Select Type') {
      setIsValidResidenceType(false);
      errors.push('Residence type');
    }
    if (rrtype == 'Years at Residence') {
      setIsValidYearsAtResidence(false);
      errors.push('Years at residence');
    }
    //console.log('size of homeaddress', homeAddres;
    if (homeAddress == '') {
      setIsValidHAddress1(false);
      errors.push('HAddress1');
      console.log(errors);
    }
    if (homeAddress2 == '') {
      setIsValidHAddress2(false);
      errors.push('HAddress2');
      console.log(errors);
    }
    const pattern1 = /^[0-9]{5}$/;
    console.log("zipcode pattern test", pattern1.test(homeZipcode));

    if (!pattern1.test(homeZipcode)) {
      setIsValidHomeZipcode(false);
      errors.push('homeZipcode');
      console.log(errors);
    }
    if (homeCity == '') {
      setIsValidHomeCity(false);
      errors.push('homeCity');
      console.log(errors);
    }
    if (homeState == '') {
      setIsValidHomeState(false);
      errors.push('HomeState');
      console.log(errors);
    }
    if (residenceAddress == '') {
      setIsValidResidenceAddress(false);
      errors.push('RAddress1');
      console.log(errors);
    }
    if (residenceAddress2 == '') {
      setIsValidResidenceAddress2(false);
      errors.push('RAddress2');
      console.log(errors);
    }

    if (!pattern1.test(RZipcode)) {
      setIsValidRZipcode(false);
      errors.push('RZipcode');
      console.log(errors);
    }
    if (RCity == '') {
      setIsValidRCity(false);
      errors.push('Res City');
      console.log(errors);
    }
    if (RState == '') {
      setIsValidRState(false);
      errors.push('Res state');
      console.log(errors);
    }
    if (checked) {
      errors.pop('Res state');
      errors.pop('Res City');
      errors.pop('RZipcode');
      errors.pop('RAddress2');
      errors.pop('RAddress1');
    }
    if (!checked1) {
      setIsValidTerms(false);
      errors.push('terms and conditions');
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

  const submitForm = () => {
    const IsValid = validate();

    if (IsValid) {
      // props.navigation.navigate("EmployeeDetails");
      console.log('Success');
    }
    else {
      console.log("details are not valid");
    }

    props.navigation.navigate("EmployeeDetails");

  }
  const previousForm = () => {
    props.navigation.navigate("IdentificationDetails");
  }
  const copyAddress = (e) => {
    console.log('inside if _ checkbox', checked, ' ', homeAddress);

    if (!checked) {
      setResidenceAddress(homeAddress);
      setResidenceAddress2(homeAddress2);
      setRZipcode(homeZipcode);
      setRState(homeState);
      setRCity(homeCity);
      setIsValidResidenceAddress(true);
      setIsValidResidenceAddress2(true);
      setIsValidRCity(true);
      setIsValidRZipcode(true);
      setIsValidRState(true)
    }
    else {
      setResidenceAddress('');
      setResidenceAddress2('');
      setRZipcode('');
      setRState('');
      setRCity('');

      // setIsValidResidenceAddress(false);
      // setIsValidResidenceAddress2(false);
      // setIsValidRCity(false);
      // setIsValidRZipcode(false);
      // setIsValidRState(false)
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headingFormat}>Contact Details</Text>
        <Text style={{ fontFamily: 'Poppins', color: 'black', marginBottom: 10 }} >Please provide your contact details</Text>
        <Text style={{ fontFamily: 'Poppins', color: 'black', marginBottom: 10 }}>Primary Phone Type</Text>
        <View>
          <TouchableOpacity style={styles.buttonContainer1} onPress={() => setPNoModalVisible(!pNoModalVisible)}  >
            <View style={styles.iconContainer}><Text style={styles.textcenter}>{ptype}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{ padding: 3 }} /></View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={pNoModalVisible}
            onRequestClose={() => {

              setPNoModalVisible(!pNoModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>

                  <TouchableOpacity onPress={() => setPNoModalVisible(!pNoModalVisible)}>
                    {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                    <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.textcenter1}>Select Type</Text>

                <TouchableOpacity style={ptype == 'Personal Mobile' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setpType('Personal Mobile');
                  setPNoModalVisible(false);
                  setShowBlock1(true);
                  setIsValidPnoType(true)

                }}>
                  <Text style={ptype == 'Personal Mobile' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>Personal Mobile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ptype == 'Office' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setpType('Office');
                  setPNoModalVisible(false);
                  setShowBlock1(true);
                  setIsValidPnoType(true)
                }}>
                  <Text style={ptype == 'Office' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >Office</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View>
            {
              showblock1 ? (<View><TextInput style={styles.inputStyle} placeholder='Enter your 10 digit Phone number' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType="numeric" value={primaryNo} onChangeText={(e) => {
                setPrimaryNo(e)
                setIsValidPNo(true)
              }}></TextInput>
              </View>) : (null)
            }
          </View>
          {!isValidPNo ? (<HelperText type="error">
            Primary phone number is invalid!
          </HelperText>) : (null)}

          <Text style={{ fontFamily: 'Poppins', color: 'black', marginBottom: 10 }}>Secondary Phone Type</Text>
          <TouchableOpacity style={styles.buttonContainer1} onPress={() => setSNoModalVisible(!sNoModalVisible)}  >
            <View style={styles.iconContainer}><Text style={styles.textcenter}>{stype}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{ padding: 3 }} /></View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={sNoModalVisible}
            onRequestClose={() => {

              setSNoModalVisible(!sNoModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>

                  <TouchableOpacity onPress={() => setSNoModalVisible(!sNoModalVisible)}>
                    {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                    <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.textcenter1}>Select Type</Text>

                <TouchableOpacity style={stype == 'Home' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setsType('Home');
                  setSNoModalVisible(false);
                  setShowBlock2(true);
                  setIsValidSnoType(true);
                }}>
                  <Text style={stype == 'Home' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stype == 'Office' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setsType('Office');
                  setSNoModalVisible(false);
                  setShowBlock2(true);
                  setIsValidSnoType(true);
                }}>
                  <Text style={stype == 'Office' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >Office</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>

          <View>
            {
              showblock2 ? (<View><TextInput style={styles.inputStyle} placeholder='Enter your 10 digit Phone number' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType="numeric" value={secondaryNo} onChangeText={(e) => {
                setSecondaryNo(e)
                setIsValidSNo(true)
              }}></TextInput>
              </View>) : (null)
            }
          </View>

          {!isValidSNo ? (<HelperText type="error">
            Secondary phone number is invalid!
          </HelperText>) : (null)}


          <Text style={{ fontFamily: 'Poppins', color: 'black', marginBottom: 10 }}>Residence - Rent or Own</Text>
          <TouchableOpacity style={styles.buttonContainer1} onPress={() => setRentModalVisible(!rentModalVisible)}  >
            <View style={styles.iconContainer}><Text style={styles.textcenter}>{rtype}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{ padding: 3 }} /></View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={rentModalVisible}
            onRequestClose={() => {

              setRentModalVisible(!rentModalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.modalHeader}>

                  <TouchableOpacity onPress={() => setRentModalVisible(!rentModalVisible)}>
                    {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                    <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.textcenter1}>Select Type</Text>

                <TouchableOpacity style={rtype == 'Rent' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setrType('Rent');
                  setRentModalVisible(false);
                  setShowBlock3(true);
                  setIsValidResidenceType(true)
                }}>
                  <Text style={rtype == 'Rent' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>Rent</Text>
                </TouchableOpacity>
                <TouchableOpacity style={rtype == 'Own' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                  setrType('Own');
                  setRentModalVisible(false);
                  setShowBlock3(true);
                  setIsValidResidenceType(true);
                }}>
                  <Text style={rtype == 'Own' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >Own</Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>
          {!isValidResidenceType ? (<HelperText type="error">
            Residence address type is invalid!
          </HelperText>) : (null)}

          <View>
            {
              showblock3 ? (<View style={{ marginTop: 10, marginBottom: 10 }}>
                <TouchableOpacity style={styles.buttonContainer1} onPress={() => setYearsModalVisible(!yearsModalVisible)}  >
                  <View style={styles.iconContainer}><Text style={styles.textcenter}>{rrtype}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{ padding: 3 }} /></View>
                </TouchableOpacity>

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={yearsModalVisible}
                  onRequestClose={() => {

                    setYearsModalVisible(!yearsModalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={styles.modalHeader}>

                        <TouchableOpacity onPress={() => setYearsModalVisible(!yearsModalVisible)}>
                          {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                          <AntDesign name="close" size={28} color='rgba(34, 42, 53, 0.3)' />
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.textcenter1}>Select Type</Text>
                      <TouchableOpacity style={rrtype == '< 1 year' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                        setrrType('< 1 year');
                        setYearsModalVisible(false);
                        setIsValidYearsAtResidence(true);

                      }}>
                        <Text style={rrtype == '< 1 year' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}> Less than 1 Year</Text>
                      </TouchableOpacity><TouchableOpacity style={rrtype == '< 2 year' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                        setrrType('< 2 year');
                        setYearsModalVisible(false);
                        setIsValidYearsAtResidence(true);

                      }}>
                        <Text style={rrtype == '< 2 year' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >Less than 2 Years</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={rrtype == '2 years' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                        setrrType('2 years');
                        setYearsModalVisible(false);
                        setIsValidYearsAtResidence(true);

                      }}>
                        <Text style={rrtype == '2 years' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} > 2 years</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={rrtype == '5 years' ? styles.modalOptionTrue : styles.modalOptionDefault} onPress={() => {
                        setrrType('5 years');
                        setYearsModalVisible(false);
                        setIsValidYearsAtResidence(true);

                      }}>
                        <Text style={rrtype == '5 years' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault} >5 years</Text>
                      </TouchableOpacity>


                    </View>
                  </View>
                </Modal>
                {!isValidYearsAtResidence ? (<HelperText type="error">
                  Years at residence is invalid!
                </HelperText>) : (null)}

              </View>) : (null)
            }
          </View>
        </View>

        <View style={{ marginLeft: 30 }}>
          <Text style={{ color: 'black', fontFamily: 'Poppins', marginTop: 10, marginBottom: 10 }}>Home Mailing Address</Text>
          <TextInput style={styles.inputStyle} placeholder='Address line 1' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={homeAddress} onChangeText={(e) => {
            setHomeAddress(e)
            setIsValidHAddress1(true)
          }} />
          {!isValidHAddress1 ? (<HelperText type="error">
            Home mailing address is invalid!
          </HelperText>) : (null)}
          <TextInput style={styles.inputStyle} placeholder='Address Line 2' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={homeAddress2} onChangeText={(e) => {
            setHomeAddress2(e)
            setIsValidHAddress2(true)
          }} />
          {!isValidHAddress2 ? (<HelperText type="error">
            Address line 2 is invalid!
          </HelperText>) : (null)}
          <TextInput style={styles.inputStyle} placeholder='Zip Code' keyboardType='numeric' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={homeZipcode} onChangeText={(e) => {
            setHomeZipcode(e)
            setIsValidHomeZipcode(true)
          }} />
          {!isValidHomeZipcode ? (<HelperText type="error">
            Zipcode is invalid!
          </HelperText>) : (null)}
          <TextInput style={styles.inputStyle} placeholder='City' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={homeCity} onChangeText={(e) => {
            setHomeCity(e)
            setIsValidHomeCity(true)
          }} />
          {!isValidHomeCity ? (<HelperText type="error">
            City is invalid!
          </HelperText>) : (null)}
          <TextInput style={styles.inputStyle} placeholder='State' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={homeState} onChangeText={(e) => {
            setHomeState(e)
            setIsValidHomeState(true)
          }} />
          {!isValidHomeState ? (<HelperText type="error">
            State is invalid!
          </HelperText>) : (null)}



          <Text style={{ color: 'black', fontFamily: 'Poppins', marginBottom: 10 }}>Residence Mailing Address</Text>

          <TouchableOpacity style={{
            backgroundColor: '#EEEFF2', marginBottom: 10,
            borderRadius: 10, borderColor: '#047E40'

          }} onPress={(e) => {
            copyAddress(e);
            setChecked(!checked);

          }}>
            <View style={checked ? {
              flexDirection: "row",

              backgroundColor: '#047E40',
              borderWidth: 0,
              borderRadius: 5,
              borderColor: '#047E40',
              height: 50,

              alignItems: 'center',
              fontFamily: 'poppins',
              color: '#FFFFFF',
            } : {
              flexDirection: "row",

              backgroundColor: '#EEEFF2',
              borderWidth: 1,
              borderRadius: 5,
              borderColor: '#047E40',

              height: 50,
              alignItems: 'center',
              fontFamily: 'poppins',
              color: '#047E40',
            }}>
              <Checkbox color='white'
                status={checked ? 'checked' : 'unchecked'}

              /><Text style={checked ? {
                color: '#FFFFFF', fontFamily: 'Poppins',
                fontSize: 14
              } : {
                marginLeft: 10,
                fontFamily: 'Poppins',
                fontSize: 14,
                color: '#047E40',
              }}> Same as Home Address </Text>

            </View>
          </TouchableOpacity>
          <TextInput style={styles.inputStyle} placeholder='Address line 1' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={residenceAddress} onChangeText={(e) => {
            setResidenceAddress(e)
            setIsValidResidenceAddress(true)
          }} />
          {!isValidResidenceAddress ? (<HelperText type="error">
            Residence Address is invalid!
            {residenceAddress}
          </HelperText>) : (null)}
          <TextInput style={styles.inputStyle} placeholder='Address Line 2' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={residenceAddress2} onChangeText={(e) => {
            setResidenceAddress2(e)
            setIsValidResidenceAddress2(true)
          }} />
          {!isValidResidenceAddress2 ? (<HelperText type="error">
            Residence Address line 2 is invalid!
          </HelperText>) : (null)}
          <TextInput style={styles.inputStyle} placeholder='Zip Code' keyboardType='numeric' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={RZipcode} onChangeText={(e) => {
            setRZipcode(e)
            setIsValidRZipcode(true)
          }} />
          {!isValidRZipcode ? (<HelperText type="error">
            Residence Zipcode is invalid!
          </HelperText>) : (null)}
          <TextInput style={styles.inputStyle} placeholder='City' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={RCity} onChangeText={(e) => {
            setRCity(e)
            setIsValidRCity(true)
          }} />
          {!isValidRCity ? (<HelperText type="error">
            Residence City is invalid!
          </HelperText>) : (null)}
          <TextInput style={styles.inputStyle} placeholder='State' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={RState} onChangeText={(e) => {
            setRState(e)
            setIsValidRState(true)
          }} />
          {!isValidRState ? (<HelperText type="error">
            Residence state is invalid!
          </HelperText>) : (null)}
        </View>





        <View style={styles.checkboxContainer}>
          <Checkbox color='green'
            status={checked1 ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked1(!checked1);
              setIsValidTerms(checked);

            }}
          />
          <Text style={styles.checkboxtext}>You agree that, in order for CREDITWORKS LLC to service this loan or to collect any amounts you owe, that we may from time to   <Text style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://google.com')}>Read More ...</Text>  </Text>
        </View>
        {!isValidTerms ? (<HelperText type="error">
          terms and conditions is invalid!
        </HelperText>) : (null)}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton}><Text style={styles.backButtonText} onPress={() => previousForm()}>Back</Text></TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => submitForm()}><Text style={styles.nextButtonText}>Next Step</Text></TouchableOpacity>

      </View>
    </View>
  );



}
export default ContactDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',

    justifyContent: "space-evenly",
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    padding: 20,
    justifyContent: 'center'
  },
  checkboxContainer1: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: '#EEEFF2',
    borderWidth: 0,
    borderRadius: 5,
    borderColor: '#EEEFF2',
    height: 50,
    alignItems: 'center',
    fontFamily: 'poppins',
    color: '#047E40',
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
    fontFamily: 'Poppins',
    fontSize: 14,
    marginBottom: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0,
    borderRadius: 5,
  },
  headingFormat: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Poppins'
  },
  subHeading: {
    margin: 10,
    color: '#222A35',
    fontFamily: 'Poppins',
    fontSize: 16,
  },
  inputStyle: {

    borderRadius: 10,
    height: 50,
    backgroundColor: '#EEEFF2',
    fontFamily: 'Poppins',
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
  inputStyle1: {

    borderRadius: 10,
    height: 50,
    width: 70,
    backgroundColor: '#EEEFF2',
    fontFamily: 'Poppins',
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
    marginBottom: 10,
    color: "rgba(34, 42, 53, 0.6)",
  },
  checkboxtext: {
    // padding:5,
    // flexWrap:'wrap',
    // marginRight:10,
  },
  checkboxtext1: {
    marginLeft: 10,
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#047E40',

  },
  checkbox: {
    marginTop: 8,
    color: "green",
    alignSelf: "left",
    borderColor: '#047E40'
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
  backButton: {
    backgroundColor: '#EEEFF2',
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EEEFF2',
    width: 100,
  },
  backButtonText: {
    padding: 15,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'Poppins',
    color: 'rgba(34, 42, 53, 0.6)'
  },
  nextButton: {
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
    width: 100
  },
  nextButtonText:
  {
    padding: 15, fontWeight: '500', textAlign: "center", fontFamily: 'Poppins', color: 'white'
  },
});

