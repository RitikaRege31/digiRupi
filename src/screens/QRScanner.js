import { Image, View, Text, Button, SafeAreaView, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useState, useEffect, useContext , useRef} from "react";
import axios from 'axios';
import { Alert } from 'react-native';
import { AppContext } from "../../AppContext";
import firebase from 'firebase/compat/app';
import CryptoJS from 'react-native-crypto-js';


const QRScanner = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [id, setId] = useState(null);
  const [error, setError] = useState('');
  const { phoneNumber, setphoneNumber } = useContext(AppContext);

  const [CompanyName, setCompanyName] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isredeemed, setIsredeemed] = useState(false);
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [allowScan, setallowScan] = useState(false);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //setText(data);
    fetchVoucherInfo(data);
    setId(data);
    console.log(data);
    console.log('Type: ' + type + '\nData: ' + data)
  };


  if (hasPermission === null) {
    return (
      <View className="">
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }
  const updateVoucher = async (id) => {
    if (isredeemed === false && allowScan === true) {
      setIsLoading(true);
      try {

        const response = await axios.patch("https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/create-voucher", {
          voucherId: id

        });
        console.log(response.data);
        Alert.alert("Voucher has been redeemed!");
        setTimeout(() => {
          setError('');
          navigation.navigate('serviceProviderHomePage');
        }, 2000);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    else if (isredeemed === true) {

      Alert.alert("Voucher has already been redeemed 😔");
      setTimeout(() => {
        setError('');
        navigation.navigate('serviceProviderHomePage');
      }, 2000);

    }
    else {
      Alert.alert("You don't have permission to scan the voucher!");
      setTimeout(() => {
        setError('');
        navigation.navigate('serviceProviderHomePage');
      }, 2000);
    }

  };


  async function fetchVoucherInfo(data) {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/get-voucher-info/${data}`);
      console.log(response.data);
      const voucher = response.data;

      setCompanyName(voucher.PvtOrgBy.CompanyName);
      setAmount(voucher.voucherAmount);

      setIsredeemed(voucher.voucherRedeemed);
      setallowScan(voucher.ServiceProviderUser.Users.phoneNumber === phoneNumber);

      const fnPromise = CryptoJS.AES.decrypt(voucher.BeneficiaryUser.Users.firstName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");
      const lnPromise = CryptoJS.AES.decrypt(voucher.BeneficiaryUser.Users.lastName, "xx6appn3TCL0LRx9zmRrqHgWmn8noXAVPMQXbjFssLDQ0+vS28QMNUp0rzT+5eTu");

      const firstName = await fnPromise;
      const lastName = await lnPromise;

      const decryptedFirstName = firstName.toString(CryptoJS.enc.Utf8);
      const decryptedLastName = lastName.toString(CryptoJS.enc.Utf8);


      const bName = `${decryptedFirstName} ${decryptedLastName}`;
      setBeneficiaryName(bName);
      console.log(beneficiaryName);

    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function ConfirmRedeem(data) {

    Alert.alert(
      'Sure you want to redeem the voucher?',
      'Press OK to continue',
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK pressed, calling function...');
            updateVoucher(data)
          }
        }
      ]
    );

  }


  return (
    <SafeAreaView className="bg-white h-full">
      <View className="items-center mt-2 p-1 bg-white">


        <Image
          className="h-14 w-1/2 mt-10 mb-9"

          source={require('../../assets/e-rupi.png')}></Image>

        <View className="">
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 450 }} />
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-7" />
        ) : scanned ? (
          <View className="flex-col space-y-5">
            <View className="flex-col bg-blue-200 h-26 p-2 mt-2 space-y-3 rounded-lg">
              <Text className=" font-light text-sm"> Beneficiary Name : {beneficiaryName}</Text>
              <Text className=" font-light text-sm"> Private Org: {CompanyName}</Text>
              <Text className=" font-light text-sm"> Amount: {amount}</Text>
            </View>
            <View className="flex-row gap-5">
              <View>
                <Button title={'Scan Again'} onPress={() => setScanned(false)} className="text-black" color="#81C3FD" />
              </View>
              <View>
                <Button title={'Redeem'} onPress={() => { ConfirmRedeem(id) }} className="text-black" color="#8EA2FD" />
              </View>

            </View>
          </View>
        ) : null}

      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
});

export default QRScanner;