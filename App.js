import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fingerprint from "./src/screens/Fingerprint"
import HomePage from "./src/screens/HomePage";
import Login from "./src/screens/Login";
import PinRegister from "./src/screens/PinRegister";
import UserDetails from './src/screens/UserDetails';
import Phone from './src/screens/Phone';
import SelectRole from './src/screens/SelectRole';
import BankDetails from './src/screens/BankDetails';
import E_rupi_wallet from './src/screens/E_rupi_wallet';
import E_rupee_wallet from './src/screens/E_rupee_wallet';
import GenerateVoucher from './src/screens/GenerateVoucher';
import QRScanner from './src/screens/QRScanner';
import BeneficiaryHomePage from './src/screens/BeneficiaryHomePage';
import PvtOrgInfo from './src/screens/PvtOrgInfo';
import PvtOrgHomePage from './src/screens/PvtOrgHomePage';
import SelectServiceProvider from './src/screens/SelectServiceProvider';
import ServiceProviderHomePage from './src/screens/ServiceProviderHomePage';
import ServiceProviderInfo from './src/screens/ServiceProviderInfo';
import RequestedVouchers from './src/screens/RequestedVouchers';
import { AppProvider } from './AppContext';
import Phone_test from './src/screens/Phone_test';
import VoucherQR from './src/screens/VoucherQR';
import VoucherGenerated from './src/screens/VoucherGenerated';
import Profile from './src/screens/Profile';

import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import awsExports from './src/aws-exports';

Amplify.configure(awsExports);


export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="home" component={HomePage}></Stack.Screen>
          <Stack.Screen name="fingerprint" component={Fingerprint}></Stack.Screen>
          <Stack.Screen name="otp" component={Phone}></Stack.Screen>
          {/* <Stack.Screen name="otp_test" component={Phone_test}></Stack.Screen> */}
          <Stack.Screen name="login" component={Login}></Stack.Screen>
          <Stack.Screen name="userDetails" component={UserDetails}></Stack.Screen>
          <Stack.Screen name="bankDetails" component={BankDetails}></Stack.Screen>
          <Stack.Screen name="pinRegister" component={PinRegister}></Stack.Screen>
          <Stack.Screen name="selectRole" component={SelectRole}></Stack.Screen>
          <Stack.Screen name="beneficiaryHomePage" component={BeneficiaryHomePage}></Stack.Screen>
          <Stack.Screen name="e_rupi_wallet" component={E_rupi_wallet}></Stack.Screen>
          <Stack.Screen name="e_rupee_wallet" component={E_rupee_wallet}></Stack.Screen>
          <Stack.Screen name="pvtOrgInfo" component={PvtOrgInfo}></Stack.Screen>
          <Stack.Screen name="pvtOrgHomePage" component={PvtOrgHomePage}></Stack.Screen>
          <Stack.Screen name="generateVoucher" component={GenerateVoucher}></Stack.Screen>
          <Stack.Screen name="selectServiceProvider" component={SelectServiceProvider}></Stack.Screen>
          <Stack.Screen name="serviceProviderHomePage" component={ServiceProviderHomePage}></Stack.Screen>
          <Stack.Screen name="requestedVouchers" component={RequestedVouchers}></Stack.Screen>
          <Stack.Screen name="serviceProviderInfo" component={ServiceProviderInfo}></Stack.Screen>
          <Stack.Screen name="qrScanner" component={QRScanner}></Stack.Screen>
          <Stack.Screen name="voucherQR" component={VoucherQR}></Stack.Screen>
          <Stack.Screen name="voucherGenerated" component={VoucherGenerated}></Stack.Screen>
          <Stack.Screen name="profile" component={Profile}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}





