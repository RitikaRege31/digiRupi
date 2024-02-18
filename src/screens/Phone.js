import { View, Text, SafeAreaView, Button, TextInput, Image, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import { useState, useRef, useContext } from 'react';
import { useNavigation } from "@react-navigation/native";
import { FirebaseRecaptchaVerifierModal, FirebaseAuthApplicationVerifier } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../config';
import firebase from 'firebase/compat/app';
import axios from 'axios';
import { AppContext } from '../../AppContext';

const Phone = () => {


  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const navigation = useNavigation();

  const [verificationId, setVerificationId] = useState(null);
  const [code, setCode] = useState('');
  const recaptchaVerifier = useRef(null);
  const [isLoading, setIsLoading] = useState(false);


  const createUser = async () => {

    setIsLoading(true);


    try {
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/check-phone', {
        phoneNumber: phoneNumber,
      });
      console.log(response);
      const isalreadyUser = response.data.exists;
      console.log(phoneNumber);
      console.log(isalreadyUser);
      if (isalreadyUser) {
        Alert.alert("User already exists, please login.");
        setTimeout(() => {
          navigation.navigate('login');
        }, 3000);
      }
      else {
        try {
          const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/create-user', {
            phoneNumber: phoneNumber,
          });

          console.log(response.data);
          navigation.navigate('userDetails');
        } catch (error) {
          console.log(error);
          alert(error);

        }

      }


    } catch (error) {
      console.log('Error fetching user info:', error);
    } finally {
      setIsLoading(false);
    }



  }

  const sendVerification = () => {
    console.log(phoneNumber);
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        setCode('');
        createUser(phoneNumber);
      })
      .catch((error) => {
        alert(error);
        navigation.navigate("otp");
      })
  }


  return (
    <SafeAreaView className="bg-white h-screen">
      <View className="items-center  bg-white">


        <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>
        <FirebaseRecaptchaVerifierModal ref={recaptchaVerifier} firebaseConfig={firebaseConfig} />

        <Text className="font-bold text-xl p-3 mb-5">Phone Verification</Text>

        <View className="h-screen w-screen  bg-blue-300 rounded-t-3xl">
          <Text className="text-center mt-5  mb-1 font-semibold text-lg"> Enter your Phone Number: </Text>
          <View className="bg-white flex-row ml-12 mr-12 mt-3 mb-3 p-2 rounded-lg">

            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder="+910000000000"
              keyboardType="phone-pad"
            />

          </View>
          <View className="mx-auto p-4 mb-5  mt-3 rounded-3xl w-3/5"><Button className="text-black text-center " color="#82E0AA" onPress={sendVerification} title="Send Verification" /></View>


          <Text className="text-center mt-2  mb-1 font-semibold text-lg"> Enter your OTP: </Text>
          <View className="bg-white flex-row ml-12 mr-12 mt-3 mb-3 p-2 rounded-lg">

            <TextInput
              value={code}
              onChangeText={setCode}
              placeholder="OTP"
              keyboardType="phone-pad"
            />

          </View>

          <View className="mx-28 p-4 mb-10  mt-3 rounded-3xl"><Button className="text-black text-center" color="#82E0AA" onPress={confirmCode} title="Check OTP" /></View>

          {isLoading && (
            <View className=" justify-center items-center z-40">
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

        </View>
      </View>



    </SafeAreaView>


  )
}


export default Phone;