import React, { Component,useState } from 'react';
import { View, Text ,StyleSheet ,TouchableOpacity ,Linking ,Modal ,ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput,Checkbox,HelperText} from 'react-native-paper';
const  EmployeeDetails =(props)=> {

  const [payCycleModalVisible, setPayCycleModalVisible] = useState(false);

  
  const [eTypeModalVisible, setETypeModalVisible] = useState(false);
  const [jTypeModalVisible, setJTypeModalVisible] = useState(false);
  const [text, setText]=useState('');
  const [salary, setSalary]=useState(Number);
  const [isValidSalary, setIsValidSalary]=useState(true);
  const [payPeriod, setPayPeriod]=useState(Number);
  const [isValidPayPeriod, setIsValidPayPeriod]=useState(true);
  const [DOH, setDOH]=useState(true);
  const [isValidDOH, setIsValidDOH]=useState(true);
  const [type, settype] =useState('Payroll Frequency');
  const [etype, setEtype] =useState('Current Employment Status');
  const [jtype, setJtype] =useState('Job Title');
  const [checked, setChecked] = useState(false);
  const [showblock , setShowBlock]=useState(false);

  const validate=()=>{
    var errors=[];

    const pattern=/^[0-9]{4,6}$/;
    if(!pattern.test(salary)){
      setIsValidSalary(false);
      errors.push('salary');
    }
    if(payPeriod<0){
      setIsValidPayPeriod(false);
      errors.push('payPeriod');
    }

    if((errors.length) == 0) {
      console.log('error log inside if',errors);
      return true;
    } 
    else{
      console.log('error log inside else',errors);
      return false;
    }
  }
  
    const submitForm=()=>{
      const IsValid=validate();

   if(IsValid){
   
    console.log('Success');
   } 
   else{
    console.log("details are not valid");
   }  
        props.navigation.navigate("LoanFunding1");
    }
    const previousForm=()=>{
        props.navigation.navigate("ContactDetails");
    }  
return(
<View style={styles.container}>
  <ScrollView>
  <Text style={styles.headingFormat}>Employee Details</Text>
            <Text style={styles.subHeading} >Please provide your Employee details</Text>
       <TouchableOpacity style={styles.buttonContainer1} onPress={()=>setPayCycleModalVisible(!payCycleModalVisible)}  >
            <View style={styles.iconContainer}><Text style={styles.textcenter}>{type}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{padding:3}} /></View>
                
             </TouchableOpacity>
              <Modal
                animationType="slide"
                  transparent={true}
                  visible={payCycleModalVisible}
                onRequestClose={() => {
          
              setPayCycleModalVisible(!payCycleModalVisible);
              }}
              >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={styles.modalHeader}>
              
              <TouchableOpacity  onPress={() => setPayCycleModalVisible(!payCycleModalVisible)}>
                {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
              </TouchableOpacity>
            </View>
                <Text style={styles.textcenter1}>Select Type</Text>
          
                 <TouchableOpacity style={type=='Weekly' ? styles.modalOptionTrue :styles.modalOptionDefault } onPress={()=>{
                    settype('Weekly');
                    setPayCycleModalVisible(false);
              
                    }}>
                    <Text style={type=='Weekly' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault }>Weekly</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={type=='Monthly' ? styles.modalOptionTrue :styles.modalOptionDefault } onPress={()=>{
                    settype('Monthly');
                    setPayCycleModalVisible(false);
                    }}>
                    <Text style={type=='Monthly' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault } >Monthly</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          <TextInput style={styles.inputStyle} label="Annual Salary"
      value={salary}
      onChange={(e)=>setSalary(e.target.value)} placeholder='Annual Salary' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' right={<TextInput.Affix text="In $" />}/>
      {!isValidSalary ?  (<HelperText type="error">
        Salary is invalid!
      </HelperText>):(null) }
         
        <TextInput style={styles.inputStyle}  placeholder='Grace Pay Per Period' placeholderTextColor="rgba(34, 42, 53, 0.6)" keyboardType='numeric' value={payPeriod} onChange={(e)=>setPayPeriod(e.target.value)} right={<TextInput.Icon name="information" color='rgba(34, 42, 53, 0.6)'/>} />
        {!isValidPayPeriod ?  (<HelperText type="error">
        Pay Period is invalid!
      </HelperText>):(null) }
        <TextInput style={styles.inputStyle}  placeholder='Date Of Hire' placeholderTextColor="rgba(34, 42, 53, 0.6)" value={DOH} onChange={(e)=>setDOH(e.target.value)} right={<TextInput.Icon name="calendar" color='rgba(34, 42, 53, 0.6)' />} />
        {!isValidDOH ?  (<HelperText type="error">
        Date of Hire is invalid!
      </HelperText>):(null) }
        <TouchableOpacity style={styles.buttonContainer1} onPress={()=>setETypeModalVisible(!eTypeModalVisible)}  >
            <View style={styles.iconContainer}><Text style={styles.textcenter}>{etype}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{padding:3}} /></View>
                
             </TouchableOpacity>
             
              <Modal
                animationType="slide"
                  transparent={true}
                  visible={eTypeModalVisible}
                onRequestClose={() => {
          
              setETypeModalVisible(!eTypeModalVisible);
              }}
              >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={styles.modalHeader}>
              
              <TouchableOpacity  onPress={() => setETypeModalVisible(!eTypeModalVisible)}>
                {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
              </TouchableOpacity>
            </View>
                <Text style={styles.textcenter1}>Select Type</Text>
          
                <TouchableOpacity style={etype=='Permanent' ? styles.modalOptionTrue :styles.modalOptionDefault } onPress={()=>{
                    setEtype('Permanent');
                    setETypeModalVisible(false);
                    
                    }}>
                    <Text style={etype=='Permanent' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>Permanent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={etype=='Contract' ? styles.modalOptionTrue :styles.modalOptionDefault } onPress={()=>{
                    setEtype('Contract');
                    setETypeModalVisible(false);
                    
                    }}>
                    <Text style={etype=='Contract' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault } >Contract</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
        
          <TouchableOpacity style={styles.buttonContainer1} onPress={()=>setJTypeModalVisible(!jTypeModalVisible)}  >
            <View style={styles.iconContainer}><Text style={styles.textcenter}>{jtype}</Text><AntDesign name="down" size={14} color="rgba(34, 42, 53, 0.6)" style={{padding:3}} /></View>
                
             </TouchableOpacity>
             <View >
              <Modal
                animationType="slide"
                  transparent={true}
                  visible={jTypeModalVisible}
                onRequestClose={() => {
          
              setJTypeModalVisible(!jTypeModalVisible);
              }}
              >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                <View style={styles.modalHeader}>
              
              <TouchableOpacity  onPress={() => setJTypeModalVisible(!jTypeModalVisible)}>
                {/* <Text style={styles.modalHeaderCloseText}>X</Text> */}
                <AntDesign name="close" size={28} color="rgba(34, 42, 53, 0.3)" />
              </TouchableOpacity>
            </View>
                <Text style={styles.textcenter1}>Select Type</Text>
          
                <TouchableOpacity style={jtype=='Manager' ? styles.modalOptionTrue :styles.modalOptionDefault } onPress={()=>{
                    setJtype('Manager');
                    setJTypeModalVisible(false);
                    
                    }}>
                    <Text style={jtype=='Manager' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault}>Manager</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={jtype=='Asst manager' ? styles.modalOptionTrue :styles.modalOptionDefault } onPress={()=>{
                    setJtype('Asst manager');
                    setJTypeModalVisible(false);
                    
                    }}>
                    <Text style={jtype=='Asst manager' ? styles.modalOptionTextTrue : styles.modalOptionTextDefault } >Asst Manager</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.checkboxContainer}> 
       <Checkbox color='green'
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    /><Text style={styles.checkboxtext}>Authorization for Employer to Share Information with CreditWorks LLC
    <Text style={{fontSize:12}}> I authorize my employer to share my employment information with CREDITWORKS LLC, as requested by CREDITWOR</Text><Text style={{color: 'blue'}}
    onPress={() => Linking.openURL('http://google.com')}>  Read More ...</Text></Text> 
     </View> 

  </ScrollView>

<View style={ styles.buttonContainer }>
    <TouchableOpacity style={styles.backButton}><Text style={styles.backButtonText} onPress={()=>previousForm()}>Back</Text></TouchableOpacity>
      <TouchableOpacity style={styles.nextButton} onPress={()=>submitForm()}><Text style={styles.nextButtonText}>Next Step</Text></TouchableOpacity>
</View>
</View>

);
    
}
export default EmployeeDetails

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FFFFFF',
  
    justifyContent:"space-evenly",
    padding:20,
},


inputContainer:{
  backgroundColor:'#EEEFF2' 
  
},
checkboxContainer:{
  flexDirection: "row",
  marginBottom: 20,
  padding:20,
  
  justifyContent:'center'
    
},
buttonContainer:{
    flexDirection:'row',
    justifyContent:'space-around'
},
textcenter1:{
  textAlign:'justify',
  fontSize:14,
  color:"rgba(34, 42, 53, 0.6)",
  marginBottom:10
},
modalView: {
  marginHorizontal:10,
        backgroundColor: "white",
        borderRadius: 20,
        padding:15,
        alignItems: "center",
        width:100+"%",
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
},
buttonContainer1:{
    backgroundColor:'#EEEFF2',
    height:50,
    marginBottom:10,
    fontFamily: 'Poppins',
    fontSize:14,
    borderColor:'black',
    borderStyle:'solid',
    borderWidth: 0,
    borderRadius:5
},
headingFormat:{
    margin:10,
    fontWeight:'bold',
    fontSize:30,
    fontFamily: 'Poppins'
},
subHeading:{
margin:10,
    color:'#222A35',
    fontFamily:'Poppins',
    fontSize:16,
},
inputStyle:{
  
    borderRadius:10,
    height:50,
    backgroundColor:'#EEEFF2' ,
    fontFamily: 'Poppins',
      marginBottom:10,
    fontSize:14,
    paddingHorizontal:10,
borderWidth:0,
shadowOffset: {
  width: 0,
  height: 0
},
elevation:0

},
textcenter:{
    textAlign:'justify',
    fontSize:14,
    
    color:"rgba(34, 42, 53, 0.6)",
},
checkboxtext:{
  // padding:5,
  // marginRight:5,
  //   flexWrap:'wrap'  

},
checkbox:{
    
    color:"green",
},

modalText: {
  padding:15,
  textAlign: "center",
},
centeredView: {
  flex: 1,
  padding:20,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal:"auto",

},
buttonStyle:{
  backgroundColor:'#004ADA',
borderRadius: 10,
shadowColor: 'rgba(0, 74, 218, 0.25)', 
shadowOffset: {
width: 6,
height: 0
},
elevation:5,
shadowRadius: 10, 


},
iconContainer:{
flexDirection:'row',
justifyContent:'space-between',
padding:10
},
modalOptionDefault:{
  backgroundColor:'#FFFFFF',
  width:100+"%",
  borderRadius:10,
  justifyContent:"center"
},
modalOptionTrue:{

  backgroundColor:'#047E40',
  width:100+"%",
  borderRadius:10,
  justifyContent:"center"
},
modalOptionTextTrue:{
  color:'#EEEFF2',
  padding:15,
  textAlign: "center"
},
modalOptionTextDefault:{
  padding:15,
    textAlign: "center",
},
backButton:
{backgroundColor:'#EEEFF2',margin:10,
borderRadius: 10,borderWidth:1,borderColor:'#EEEFF2',width:100
},
backButtonText:{
  padding:15,fontWeight:'500',textAlign:'center',fontFamily:'Poppins',color: 'rgba(34, 42, 53, 0.6)'
 },
 nextButton:{
  backgroundColor:'#004ADA',
 margin:10,
borderRadius: 10,
shadowColor: 'rgba(0, 74, 218, 0.25)', 
shadowOffset: {
  width: 0,
  height: 6
},
elevation:0,
shadowRadius: 10, width:100
},
nextButtonText:{
  padding:15,
  fontWeight:'500',
  textAlign:"center",
  fontFamily:'Poppins',
  color:'white'
},
modalHeader: {
  flexDirection: "row",
  alignSelf:'flex-end',
  margin:10
},

});

