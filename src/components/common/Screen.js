
import React, { Component } from "react";
import { View} from "react-native";
import { Container,Header,Button,Text, Content, Icon,Body,Form,CheckBox,Textarea,ListItem, Item,Input, Label } from 'native-base';

class Screen extends Component {

  render() {
  
  
        return (
          <Container>
            <Header />
            <Content>
            <View style={{flexDirection: 'row' }}>
          <Button style = {{width: 150}} ><Text> Complaints</Text></Button>
          <Button  style = {{width: 150}}><Text> History </Text></Button>
          <Button style = {{width: 150}}  ><Text> Report </Text></Button>      
        </View>

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
    export default Screen;