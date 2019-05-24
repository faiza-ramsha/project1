import React, { Component } from "react";
import { View, Text , Button, Image,TextInput,autoCorrect } from "react-native";
import firebase from "firebase";
import { Header } from "./components/common";
import { CustomButton , Card, CardSection, Input} from "./components/common";
import { createStackNavigator,  createAppContainer,  createBottomTabNavigator } from "react-navigation";
import Screen from "./components/common/Screen";



class HomeScreen extends React.Component {
 
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
 
  
    static navigationOptions = {
     title: 'Clean And Green Karachi',
   };
   state = { email: "", password: "",errorMessage:null };
   handleLogin = () => {
    const { email, pasword } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

   render() {
    return (
          <View  >
            <Image source={require('./components/common/2.jpg')}
            style = {{marginLeft: 100,marginTop : 10,borderRadius :20}}/>
            
            <Card>
{/* For User ID */}
<CardSection>
{/* When the text input is not treated as a custom component 
<TextInput
value={this.state.text}
onChangeText={text => this.setState({ text: text })}
style={{ height: 20, width: 100 }}
/> */}
<Input
autoCorrect
placeholder="user@email.com"
label="Email: "
value={this.state.email}
onChangeText={email => this.setState({ email })}
/>
</CardSection>
{/* For Password */}
<CardSection>
<Input
secureTextEntry
placeholder="password"
label="Password"
value={this.state.password}
onChangeText={password => this.setState({ password })}
/>
</CardSection>
{/* For the Login Button */}
<CardSection>
<CustomButton     
                  onPress={() => {
                  /* 1. Navigate to the Details route with params */
                   this.props.navigation.navigate('Details', {
                   itemId: 86,
                   otherParam: 'anything you want here',
                   });
              }}/>
  
    
              
</CardSection>
</Card>
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
  Details: DetailsScreen
},
{
  initialRouteName: "Home"
  
});




const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
   
  }
}




