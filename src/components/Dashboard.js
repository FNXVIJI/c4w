import React, { Component } from 'react';
import { View, Text,Button ,StyleSheet,TouchableOpacity} from 'react-native';

const Dashboard =(props)=>{
  
    const applynow=()=>{
        props.navigation.navigate("IdentificationDetails");
    }

  
    return (
      <View style={styles.container}>
        <Text> Dashboard  Screen

        </Text>
        <View style={ styles.buttonContainer }>
    <TouchableOpacity style={{backgroundColor:'#EEEFF2',margin:10,
borderRadius: 10,borderWidth:1,borderColor:'#EEEFF2',width:100
}}><Text style={{padding:15,fontWeight:'500',textAlign:'center',fontFamily:'Poppins',color: 'rgba(34, 42, 53, 0.6)', }} onPress={()=>previousForm()}>Back</Text></TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'#004ADA',margin:10,
borderRadius: 10,shadowColor: 'rgba(0, 74, 218, 0.25)', 
shadowOffset: {
  width: 0,
  height: 6
},
elevation:0,
shadowRadius: 10, width:100
}} onPress={()=>applynow()}><Text style={{padding:15,fontWeight:'500',textAlign:"center",fontFamily:'Poppins',color:'white'}}>Next Step</Text></TouchableOpacity>
      
    </View>
      </View>
    );
 
}
export default Dashboard

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between'

    },buttonContainer:{
      flexDirection:'row',
      justifyContent:'space-around'
  },
   

});

