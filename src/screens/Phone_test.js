import { View, Text, SafeAreaView, Button, TextInput, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import { AppContext } from '../../AppContext';
import { useContext } from 'react';


const Phone_test = () => {
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  async function createUser(phoneNumber) {
    try {
      setIsLoading(true);
      const response = await axios.post('https://bydj1o70lf.execute-api.us-east-1.amazonaws.com/dev/check-phone', {
        phoneNumber: phoneNumber,
      });
      console.log(response.data);
      const isalreadyUser = response.data.exists;
      console.log(phoneNumber);
      console.log(isalreadyUser);
      if (isalreadyUser) {
        setError('User already exists, please login.');
        setTimeout(() => {
          setError('');
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

  return (
    <SafeAreaView className="bg-white h-full content-center">
      <View className="items-center  mt-48 bg-white h-full">
        <TextInput
          className="mb-12"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="+910000000000"
          keyboardType="phone-pad"
        />

        {error ? <Text style={styles.warningText}>{error}</Text> : null}

        <Button
          className="mt-12 mb-5"
          title="verify"
          onPress={() => {
            createUser(phoneNumber);
          }}
        ></Button>

        <View className="items-center mt-12">
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  warningText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
};

export default Phone_test;
