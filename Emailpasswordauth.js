import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';

const Emailpasswordauth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] =useState ("")
  const createuser=()=>{
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }
  const singin=()=>{
   auth()
  .signInWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/wrong-password') {
      console.log('Invalid password!');
    }
    else if (error.code === 'auth/user-not-found') {
      console.log('User not found!');
    }
    else {
      console.error(error);
    }
  });
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     
      <TextInput
        placeholder="enter the email" 
        value={email} 
        onChangeText={(txt)=>{
          setEmail(txt)
        }}
        style={{
          height: 50,
          width: '80%',
          borderWidth: 0.5,
          borderRadius: 20,
          paddingLeft: 10,

        }}
      />
      <TextInput
        placeholder="enter the password"
        value={password}
        onChangeText={(txt)=>{
          setPassword(txt)
        }}
        style={{
          height: 50,
          width: '80%',
          borderWidth: 0.5,
          borderRadius: 20,
          paddingLeft: 10,
          marginTop: 20,
        
        }}
      />
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          backgroundColor: 'black',
          marginTop: 50,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Text style={{ color: "white" }} onPress={()=>{
          createuser()
        }}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          backgroundColor: 'black',
          marginTop: 50,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center"
        }}>
        <Text style={{ color: "white" }} onPress={()=>{
          singin()
        }}>Login Account</Text>
      </TouchableOpacity>
    
    </View>
  );
};

export default Emailpasswordauth;

const styles = StyleSheet.create({});
