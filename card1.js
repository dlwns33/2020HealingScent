//card.js
import React, { Component } from "react";
import "react-native-gesture-handler";
import { Platform, StyleSheet, Text, View, Button, Switch, Image, TextInput, TouchableOpacity }
 from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

TouchableOpacity.defaultProps = { activeOpacity: 0.1 };

export default class CardScan1 extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            
            }
      };

  state = { useLiteCreditCardInput: false };
  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });
  render() {
    return (
      <View style={s.container}>
        {/* <View style={s.icon}>
          <TouchableOpacity style={s.icon}>
            <Image source={require('./icon/iconX.png')}/>
          </TouchableOpacity>
        </View> */}
        <View>
          <Text style={s.title}> 결제 정보 등록 </Text>
        </View>
        <View style={s.container}>
        {/* <Text sytle={s.switchText}>
          입력방식 전환
        </Text> */}
        <Switch
          style={s.switch}
          onValueChange={this._setUseLiteCreditCardInput}
          value={this.state.useLiteCreditCardInput} />


        { this.state.useLiteCreditCardInput ?
          (
            <LiteCreditCardInput
              autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          ) : (
            <CreditCardInput
              autoFocus

              requiresName
              requiresCVC
              requiresPostalCode

              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
          )
        }
        </View>

        <AppButton 
        title="홈으로" 
        backgroundColor="#6a9171"
        onPress={() => this.props.navigation.navigate("Main")} />

      </View>
      
    );
  }
}


const AppButton = ({ onPress, title, size, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      s.appButtonContainer,
      size === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6,
      },
      backgroundColor && { backgroundColor }
    ]}
  >
    <Text style={[s.appButtonText, size === "sm" && { fontSize: 14 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const s = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:"center",
    marginTop:60
  },
  icon:{
    flex:0.5,
    margin:6,
    marginRight:'1.4%',
    alignItems: 'flex-end',
    backgroundColor: 'gold'

  },
  title:{
    // flex:1,
    marginTop:70,
    fontSize:20, 
    fontWeight:'bold',
    backgroundColor:'white',
    alignSelf:'center'
  },
  below:{
    flex:8,
    backgroundColor:'white',
    // flexDirection:'row',
    // justifyContent:'space-around',
  },
  // switchText:{
  //   justifyContent: "center",
  //   alignSelf:'center',
  //   fontSize:14
  // },
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "white",
    marginTop: 30,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "lightgrey",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:20
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }

});

