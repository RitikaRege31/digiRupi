import { View, Text, SafeAreaView, Image, Button, Alert, ActivityIndicator } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState, useEffect } from "react";
import Number_input_ud from "../components/Number_input_ud.js"
import { useForm } from "react-hook-form";
import CryptoJS from 'react-native-crypto-js';
import Header from '../components/Header';


const GenerateVoucher = () => {

  const [BusinessTag, setBusinessTag] = useState('');
  const [BusinessName, setBusinessName] = useState('');
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const [error, setError] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const { serviceProviderChoice, setserviceProviderChoice } = useContext(AppContext);


  async function checkValidBeneficiary(phoneNumber) {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-user-info/${phoneNumber}`);
      console.log(response.data);
      const user = response.data;
      return user.isBeneficiary;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }


  async function fetchUserInfo(phoneNumber) {

    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-pvtOrg-info/${phoneNumber}`);
      console.log(response.data);
      const pvtOrg = response.data;

      let fn = CryptoJS.AES.decrypt(pvtOrg.Users.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln = CryptoJS.AES.decrypt(pvtOrg.Users.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn = CryptoJS.AES.decrypt(pvtOrg.Users.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankName(bn.toString(CryptoJS.enc.Utf8));
      console.log(bankName);

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUserInfo(phoneNumber);
  }, []);

  async function fetchSPInfo(phoneNumber) {

    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-serviceProvider-info/${phoneNumber}`);
      console.log(response.data);
      const serviceProvider = response.data;
      setBusinessTag(serviceProvider.BusinessTag);
      setBusinessName(serviceProvider.BusinessName);

    } catch (error) {
      console.error(error);
      console.log(error);
    }
  }

  useEffect(() => {
    if (serviceProviderChoice) {
      fetchSPInfo(serviceProviderChoice);
    }
  }, [serviceProviderChoice]);

  const createVoucher = async (data) => {
    console.log(phoneNumber);
    console.log(data.amount);
    console.log(data.phoneNumberB);
    console.log(serviceProviderChoice);
    setIsLoading(true);

    const isValidBeneficiary = await checkValidBeneficiary(data.phoneNumberB);

    if (isValidBeneficiary) {
      try {
        const response = await axios.post("https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/create-voucher", {
          voucherAmount: parseInt(data.amount),
          PhoneNumberSP: serviceProviderChoice,
          PhoneNumberB: data.phoneNumberB,
          PhoneNumberPvtOrg: phoneNumber,
          voucherRedeemed: false
        });
        console.log(response.data);
        Alert.alert("Voucher has been created!");
        setTimeout(() => {
          setError('');
          navigation.navigate('pvtOrgHomePage');
        }, 2000);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert("Beneficiary doesn't exist");
      setTimeout(() => {
        setError('');
        navigation.navigate('generateVoucher');
      }, 3000);
      setIsLoading(false);
    }
  };



  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center  bg-white">

        <Image
          className="h-14 w-1/2 mt-10 mb-9"
          source={require('../../assets/e-rupi.png')}></Image>


        {isLoading ? (
          <View className=" justify-center items-center z-40">
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (

          <View>
            <Header firstName={firstName} lastName={lastName} bankName={bankName} type="1" />
          </View>

        )}


        <View className="mt-2 mb-3 items-center">
          <Text className="text-gray-600 font-bold tracking-widest">GENERATE VOUCHER</Text>
        </View>

        <View className="bg-blue-300 w-11/12 rounded-lg ">
          <View className="px-5 py-2 flex-col">
            <Text className="font-semibold text-sm">Phone number of Beneficiary</Text>
            <Number_input_ud
              placeholder="ex. +917766"
              secureTextEntry={true}
              keyboardType="phone-pad"
              name="phoneNumberB"
              control={control}
            />
          </View>

          <View className="px-5 py-1 flex-col gap-1">
            <Text className="font-semibold text-sm">Validity</Text>
            <Number_input_ud
              placeholder="ex. 23-10-23"
              secureTextEntry={true}
              keyboardType="phone-pad"
              name="validity"
              control={control}
            />
          </View>

          <View className="px-5 py-1 flex-col gap-2">
            <Text className="font-semibold text-sm">Amount in e₹</Text>
            <Number_input_ud
              placeholder="ex. 100"
              secureTextEntry={true}
              keyboardType="phone-pad"
              name="amount"
              control={control}
            />
          </View>

          <View className="mx-auto py-2 w-2/3  mt-1 rounded-3xl"><Button className="text-black text-center" color="#82E0AA" title="Search Service Provider" onPress={() => {
            navigation.navigate("selectServiceProvider");
          }} /></View>
          <View className="p-3">
            <Text className="font-semibold mb-2 text-sm">Service Provider Name</Text>
            <View className="p-2 bg-gray-100 rounded-lg w-full h-10">
              <Text className="font-light text-neutral-400 mx-auto ">{serviceProviderChoice ? BusinessName : 'Selected Service Provider'}</Text>
            </View></View>

          <View className="text-center items-center">
          </View>

          <View>
            <View className="flex-row gap-5 items-center mx-auto">
              <Text className="text-md mx-auto font-semibold"> Selected Tag</Text>

              <View className="bg-gray-100 h-8 w-1/3 rounded-lg" ><Text className="font-light mx-auto my-auto  text-neutral-400">{serviceProviderChoice ? BusinessTag : 'No Tag Selected'}</Text></View>
            </View>
          </View>

          <View className="mx-auto py-4  mb-1  mt-1 rounded-3xl"><Button className="text-black text-center" color="#82E0AA" title="Make Request" onPress={handleSubmit(createVoucher)} /></View>

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

export default GenerateVoucher