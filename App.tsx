import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
 
import DetailsScreen from './(tabs)/DetailsScreen';


// login / sign up screens
import LogInScreen from './signIn/LogInScreen';
import SignUpScreen from './signIn/SignUpScreen';


//edit Profile screens
import ProfileEditOne from './editProfile/ProfileEditOne';
import ProfileEditTwo from './editProfile/ProfileEditTwo';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{
          headerLeft:()=>null,
        }}
        
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        <Stack.Screen name="EditOne" component={ProfileEditOne}/>
        <Stack.Screen name="EditTwo" component={ProfileEditTwo}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}
