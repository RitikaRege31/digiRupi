import { View, Text, SafeAreaView, Image, Button, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { AppContext } from "../../AppContext";
import { useContext, useState } from "react";
import { useEffect } from 'react';
import Footer from '../components/Footer';
import CryptoJS from "react-native-crypto-js";


const Profile = () => {

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bankName, setBankName] = useState('');
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const [BusinessName, setBusinessName] = useState('');
  const [PositionInBusiness, setPositionInBusiness] = useState('');
  const [BusinessTag, setBusinessTag] = useState('');
  const [CompanyName, setCompanyName] = useState('');
  const [positionInCompany, setPositionInCompany] = useState('');
  const [is_Beneficiary, set_is_Benefiary] = useState(false);
  const [is_PvtOrg, set_is_PvtOrg] = useState(false);
  const [is_serviceProvider, set_is_serviceProvider] = useState(false);
  const [bankAccountHolderName, setBankAccHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUserInfo() {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-user-info/${phoneNumber}`);
      console.log(response.data);
      const user = response.data;

      let fn = CryptoJS.AES.decrypt(user.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln = CryptoJS.AES.decrypt(user.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn = CryptoJS.AES.decrypt(user.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankName(bn.toString(CryptoJS.enc.Utf8));
      console.log(bankName);

      set_is_Benefiary(user.isBeneficiary);
      set_is_PvtOrg(user.isPvtOrg);
      set_is_serviceProvider(user.isServiceProvider);

      let ahn = CryptoJS.AES.decrypt(user.bankAccountHolderName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankAccHolderName(ahn.toString(CryptoJS.enc.Utf8));
      console.log(bankAccountHolderName);

      let decryptaccNumber = CryptoJS.AES.decrypt(user.accountNumber, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      let originalaccNumber = decryptaccNumber.toString(CryptoJS.enc.Utf8);
      console.log(originalaccNumber);
      setAccountNumber(originalaccNumber);

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchUserInfo();

    if (is_PvtOrg) {
      fetchPvtOrgInfo();
    }

    if (is_serviceProvider) {
      fetchSPInfo();
    }
  }, [is_PvtOrg, is_Beneficiary, is_serviceProvider]);


  async function fetchSPInfo() {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-serviceProvider-info/${phoneNumber}`);
      console.log(response.data);
      const serviceProvider = response.data;

      setBusinessName(serviceProvider.BusinessName);


      let pb = CryptoJS.AES.decrypt(serviceProvider.PositionInBusiness, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setPositionInBusiness(pb.toString(CryptoJS.enc.Utf8));
      console.log(PositionInBusiness);

      setBusinessTag(serviceProvider.BusinessTag);

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchPvtOrgInfo() {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-pvtOrg-info/${phoneNumber}`);
      console.log(response.data);
      const pvtorg = response.data;

      let fn = CryptoJS.AES.decrypt(pvtorg.Users.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setFirstName(fn.toString(CryptoJS.enc.Utf8));
      console.log(firstName);

      let ln = CryptoJS.AES.decrypt(pvtorg.Users.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setLastName(ln.toString(CryptoJS.enc.Utf8));
      console.log(lastName);

      let bn = CryptoJS.AES.decrypt(pvtorg.Users.bankName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setBankName(bn.toString(CryptoJS.enc.Utf8));
      console.log(bankName);

      setCompanyName(pvtorg.CompanyName);


      let pb = CryptoJS.AES.decrypt(pvtorg.positionInCompany, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      setPositionInCompany(pb.toString(CryptoJS.enc.Utf8));
      console.log(positionInCompany);

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <SafeAreaView className="bg-white h-full">

      {isLoading ? (
        <View className=" justify-center items-center mt-72">
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (


        <View className="flex-col justify-between h-full">

          <View className=" items-center ">

            <Image
              className="h-14 w-1/2 mt-10 mb-9"

              source={require('../../assets/e-rupi.png')}></Image>

            <View className="bg-blue-200 h-40 w-11/12 rounded-lg shadow-xl flex-row justify-between shadow-black  z-30">

              <View className="rounded-full  h-16 w-16 mt-12  mx-5 z-50 shadow-lg items-center  ">
                <View className="my-auto mx-auto">
                  <Ionicons name="person-circle-outline" size={60} ></Ionicons>
                </View>

              </View>
              <View className="mr-5 mt-1 my-auto">
                <View className="" >
                  <Text className="text-right text-gray-700 font-semibold text-xl">{firstName} {lastName}</Text>
                  <Text className="text-right font-medium text-sm text-stone-600">{phoneNumber}</Text>
                </View>

                <Text className="text-right font-md text-lg">Roles</Text>
                <View className>
                  {is_Beneficiary === true && <Text className="text-right text-stone-600">Beneficiary</Text>}
                  {is_PvtOrg === true && <Text className="text-right text-stone-600">Private Organisation</Text>}
                  {is_serviceProvider === true && <Text className="text-right text-stone-600">Service Provider</Text>}
                </View>

              </View>
            </View>

            {is_PvtOrg === true &&

              <View className="bg-blue-200 mt-5  h-30 p-1 w-11/12 rounded-lg shadow-xl flex-row justify-between shadow-black  z-30">

                <View className="rounded-md text-gray-500 h-16 w-16 my-auto mx-5 z-50 shadow-lg items-center  ">
                  <View className="my-auto mx-auto text-gray-500">
                    <Ionicons name="business-outline" className="text-gray-500" size={60} ></Ionicons>
                  </View>

                </View>
                <View className="mr-5 my-auto">

                  <Text className="text-right text-gray-700 font-semibold text-lg">Private Organisation</Text>

                  <View className="flex-row justify-evenly" >
                    <Text className="text-right font-medium text-sm text-stone-600"> {CompanyName}</Text>
                    <Text>  |  </Text>
                    <Text className="text-right font-md text-sm text-stone-600"> {positionInCompany}</Text>
                  </View>

                </View>
              </View>
            }

            {is_serviceProvider === true &&

              <View className="bg-blue-200 mt-5 h-30 p-1 w-11/12 rounded-lg shadow-xl flex-row justify-between shadow-black  z-30">

                <View className="rounded-md  h-16 tex-gray-400 w-16 my-auto mx-5 z-50 shadow-lg items-center  ">
                  <View className="my-auto mx-auto">
                    <Ionicons name="business-outline" size={60} ></Ionicons>
                  </View>

                </View>
                <View className=" mr-5 my-auto">

                  <Text className="text-right text-gray-700 font-semibold text-xl">Service Provider</Text>
                  <View className="flex-row justify-between" >
                    <Text className="text-right font-medium text-sm text-stone-600">{BusinessName}</Text>
                    <Text>|</Text>
                    <Text className="text-right font-medium text-sm text-stone-600">{PositionInBusiness}</Text>
                  </View>

                  <Text className="text-right font-md text-sm text-stone-600">{BusinessTag}</Text>

                </View>
              </View>


            }


            <View className="bg-blue-200 mt-5  h-30 p-1 w-11/12 rounded-lg shadow-xl flex-row justify-between shadow-black  z-30">

              <View className="rounded-md text-gray-500 h-16 w-16 my-auto mx-5 z-50 shadow-lg items-center  ">
                <View className="my-auto mx-auto text-gray-500">
                  <Ionicons name="card-outline" className="text-gray-500" size={60} ></Ionicons>
                </View>

              </View>
              <View className="mr-5 my-auto">
                <View className="" >
                  <Text className="text-right text-gray-700 font-semibold text-xl break-normal">Bank Details</Text>
                  <View className="flex-col items-right justify-between">
                    <Text className="text-right font-medium text-sm text-stone-600 break-normal"> {bankName}</Text>

                    <Text className="text-right font-medium text-sm text-stone-600 "> {bankAccountHolderName}</Text>
                  </View>

                </View>

                <Text className="text-right font-md text-sm text-stone-600">Acc. No. : {accountNumber}</Text>

              </View>
            </View>

        <TouchableOpacity className="h-24" onPress={() => {navigation.navigate("home")}}>
            <View className="bg-gray-500 pt-2 pb-2 pr-4 pl-4 rounded-lg mt-5 "><Text className="text-white">Logout</Text></View>
        </TouchableOpacity>
        


          </View>


          <Footer />
        </View>

      )}

    </SafeAreaView>
  )
}

export default Profile;