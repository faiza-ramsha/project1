import React, { Component } from "react";
import { View, Text , Button, Image } from "react-native";
import { createStackNavigator,  createAppContainer,  createBottomTabNavigator } from "react-navigation";
import { Container, Header, Content, Icon,Body,Form,CheckBox,Textarea,ListItem, Item, Input, Label } from 'native-base';




class HomeScreen extends React.Component {
  
    static navigationOptions = {
     title: 'Clean And Green Karachi',
   };
 
    render() {
     return (
         <Container>
         <Content>
           <Form>
             <Item floatingLabel>
               <Label>Username</Label>
               <Input />
             </Item>
              <Item floatingLabel last>
               <Label>Password</Label>
               <Input />
              </Item>
              <View style={{ flex: 1, margin: 40}}>
                <Button
                title="Log In"
                  onPress={() => {
                  /* 1. Navigate to the Details route with params */
                   this.props.navigation.navigate('Details', {
                   itemId: 86,
                   otherParam: 'anything you want here',
                   });
              }}
              />
      </View>
           </Form>
         </Content>
       </Container>
     );
   }
 }
 



class DetailsScreen extends React.Component {

    static navigationOptions = {
        title: 'Details',
      };

  render() {
  
  
        return (
          <Container>
            <Header />
            <Content>
              <Item regular>
              <Icon active name='home' />
                <Input placeholder='Location'/>
              </Item>
    
               <Form>
                <Textarea rowSpan={5} bordered placeholder="Issues:" />
              </Form>
    
               <Item rounded>
                <Input placeholder='Are You Resident?'/>
              </Item>
    
              <ListItem>
                <CheckBox checked={false} />
                <Body>
                  <Text>Yes</Text>
                </Body>
              </ListItem> 
              <ListItem>
                <CheckBox checked={false} />
                <Body>
                  <Text>No</Text>
                </Body>
              </ListItem>
    
                <Item>
                <Input placeholder="Context:" />
              </Item>
    
               <Item>
                <Input placeholder="Attachments:" />
              </Item>
            </Content>
          </Container>
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




