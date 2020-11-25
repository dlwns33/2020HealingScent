import "react-native-gesture-handler";
import React, { Component } from "react";
import {Image,TextInput,StyleSheet,Button,View,Text,TouchableOpacity} from "react-native";
import CardScan from "./card";
import CardScan1 from "./card1";
import ExampleTwo from "./Step";
import ExampleOne from "./Feelings";
import Recom from "./Recom";
import Calendar from "./Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

TouchableOpacity.defaultProps = { activeOpacity: 0.1 };

function LoginScreen({ navigation }) {

  return (
    <View style={styles.container1}>
      <Image 
        style={styles.image}
        source={require('./logo.jpg')} />
      <TextInput placeholder={"ID"} style={styles.input} />
      <TextInput placeholder={"P/W"} style={styles.input} />
      <AppButton
        title="로그인"
        backgroundColor="#6a9171"
        onPress={() => navigation.navigate("Subscription")}
      />
      <AppButton
        title="회원가입"
        backgroundColor="#6a9171"
        onPress={() => navigation.navigate("Sign Up")}
      />
    </View>
  );
}

function SubScreen({ navigation }) {
  return (
    <View style={styles.container1}>
      <Image 
        style={styles.image}
        source={require('./logo.jpg')} />
      <AppButton
        title="한 달 무료 이용 시작"
        backgroundColor="#6a9171"
        onPress={() => navigation.navigate("Payment Information")}
      />
      <AppButton
        title="홈으로"
        backgroundColor="#6a9171"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

function SignScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO HEALING SCENT!</Text>
      <TextInput placeholder={"ID"} style={styles.input} />
      <TextInput placeholder={"P/W"} style={styles.input} />
      <TextInput placeholder={"EMAIL"} style={styles.input} />
      <AppButton 
      title="시작하기" 
      backgroundColor="#6a9171"
      onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

function Address({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>배송지 정보</Text>
      <TextInput placeholder={"수령인"} style={styles.input} />
      <TextInput placeholder={"휴대폰"} style={styles.input} />
      <TextInput placeholder={"우편번호"} style={styles.input} />
      <TextInput placeholder={"주소지"} style={styles.input} />
      <TextInput placeholder={"상세주소"} style={styles.input} />
      <TextInput placeholder={"배송메모"} style={styles.input} />
      <Text>정기 결제 금액: 10,000원 / 1개월</Text>
      <AppButton
        title="한 달 무료 이용 시작"
        backgroundColor="#6a9171"
        onPress={() => navigation.navigate("Loading...")}
      />
    </View>
  );
}

function Address1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>배송지 정보</Text>
      <TextInput placeholder={"수령인"} style={styles.input} />
      <TextInput placeholder={"휴대폰"} style={styles.input} />
      <TextInput placeholder={"우편번호"} style={styles.input} />
      <TextInput placeholder={"주소지"} style={styles.input} />
      <TextInput placeholder={"상세주소"} style={styles.input} />
      <TextInput placeholder={"배송메모"} style={styles.input} />
      <Text>정기 결제 금액: 10,000원 / 1개월</Text>
      <AppButton
        title="홈으로"
        backgroundColor="#6a9171"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  );
}

function Loading({ navigation }) {
  return (
    <View style={styles.container1}>
      <Image 
        style={styles.image}
        source={require('./logo.jpg')} />
      <Text style={styles.title}>당신이 궁금해요!</Text>
      <Text>*감정 질문은 일주일 이내에 느꼈던 감정으로 대답해주세요*</Text>
      <AppButton
        title="계속하기"
        backgroundColor="#6a9171"
        onPress={() => navigation.navigate("Feelings")}
      />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Subscription" component={SubScreen} />
        <Stack.Screen name="Sign Up" component={SignScreen} />
        <Stack.Screen name="Payment Information" component={CardScan} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Feelings" component={ExampleOne} />
        <Stack.Screen name="Questions" component={ExampleTwo} />
        <Stack.Screen name="Loading..." component={Loading} />
        <Stack.Screen name="Recommendation" component={Recom} />
        <Stack.Screen name="Main" component={Calendar} />
        <Stack.Screen name="Changes" component={CardScan1} />
        <Stack.Screen name="Changes..." component={Address1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const AppButton = ({ onPress, title, size, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      size === "sm" && {
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6,
        backgroundColor: "white"
      },
      backgroundColor && { backgroundColor }
    ]}
  >
    <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  image:{
    alignItems: "center",
    marginTop: 70,
    marginBottom: 20
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15
  },
  appButtonContainer: {
    width: 300,
    elevation: 8,
    backgroundColor: "lightgrey",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:7
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }
});

export default App;
