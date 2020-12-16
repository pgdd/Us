import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local imports
import styles from './styles';
import splashImg from '../../assets/splash.png';
import EditProfileTemplate from './EditProfileTemplate';



function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image  style={{height: 150, marginBottom:100, width:150, justifyContent:'center'}}
        source={splashImg}/>
      <Text > Meet anywhere, anyday </Text>
      <Button 
        title=" SIGN UP"
        onPress={() => alert('iam in the profile')}
      />
      <Button
        title="details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Continue as a Guest"
        onPress={() => navigation.navigate('Create Profile')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image  style={{height: 150, width:150, alignItems:'center', justifyContent:'center'}}
        source={splashImg}/>
      <Text>iam in guest screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button
        title="go to Home"
        onPress={() => navigation.navigate('Home')}
      /> 
    </View>
  );
}


function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <EditProfileTemplate />
      <Button
        title="go to Home"
        onPress={() => navigation.navigate('Home')}
      /> 
    </View>
  );
}




const Stack = createStackNavigator();


const Example = props => {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Create Profile" component={EditProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
};

export default Example;
