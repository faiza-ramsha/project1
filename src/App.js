import React, { Component } from "react";
import { View, Text , Button, Image,TextInput,autoCorrect } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
// import { CustomButton , Card, CardSection, Input} from "./components/common";
import { createStackNavigator,  createAppContainer,  createBottomTabNavigator } from "react-navigation";
import Screen from "./components/common/Screen";
import SignUp from "./components/common/SignUp";
import Login from "./components/common/Login";


class HomeScreen extends React.Component {
 
  
 
  
    static navigationOptions = {
     title: 'Clean And Green Karachi',
   };
  

   render() {
    return (
          <View  >
            <Image source={require('./components/common/2.jpg')}
            style = {{marginTop : 10,borderRadius :20}}/>
            <Button onPress={() => this.props.navigation.navigate('SignUp')} title="Sign Up"  />
            <Button onPress={() => this.props.navigation.navigate('Login')} title="Login"  />
        
          </View>
        );
      }
    }
       

  class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Details',
      };

  render() {
  
  
        return (
          <Screen/>
        );
      }
    }
    
 const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
);


 const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  SignUp: SignUp,
  Login: Login,
  Details: DetailsScreen
 },
 {
  initialRouteName: "Login"
  
 } 
 );




 const AppContainer = createAppContainer(AppNavigator);

 export default class App extends React.Component {
  componentWillMount() {
      firebase.initializeApp({
      apiKey: "AIzaSyB9RiCp-sEdwqj0IhMPj70hazcBdwHA1lI",
      authDomain: "projectauth1.firebaseapp.com",
      databaseURL: "https://projectauth1.firebaseio.com",
      projectId: "projectauth1",
      storageBucket: "projectauth1.appspot.com",
      messagingSenderId: "406723489661",
      appId: "1:406723489661:web:7afe2186e33a78da"
    });
  }
  render() {
    return <AppContainer />;
   
  }
}




