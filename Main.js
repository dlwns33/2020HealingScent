import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import "react-native-gesture-handler";

TouchableOpacity.defaultProps = { activeOpacity: 0.1 };

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //set value in state for start and end date
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date, type) {
    //function to handle the date change
      this.setState({
        selectedStartDate: date,
      });
  }

  render() {
    const { selectedStartDate} = this.state;
    const minDate = new Date(2018, 1, 1); // Min date
    const maxDate = new Date(2050, 6, 3); // Max date
    const startDate = selectedStartDate ? selectedStartDate.toString() : ""; //Start date

    return (
      <View style={styles.container1}>
        <CalendarPicker
          startFromMonday={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={["월", "화", "수", "목", "금", "토", "일"]}
          months={[
            "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"
          ]}
          previousTitle="<"
          nextTitle=">"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="#6a9171"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            color: "#000000"
          }}
          onDateChange={this.onDateChange}
        />

        <Text style={styles.title}>오늘은 :</Text>
        <Text style={styles.date}>{startDate}</Text>
        <Text style={styles.title}>오늘의 감정을 기록하세요: </Text>
        <TextInput placeholder={"나는 오늘..."} style={styles.title} />
    
        <AppButton
        title="저장"
        backgroundColor="#6a9171"
      />
    <View style = {styles.container}>
         <Icon.Button
         name="credit-card" 
         size={40} 
         color="#6a9171"
         backgroundColor="white"
         onPress={() => this.props.navigation.navigate("Changes")}/>
         <Icon.Button
         name="address-book" 
         size={40} 
         color="#6a9171"
         backgroundColor="white"
         onPress={() => this.props.navigation.navigate("Changes...")}/>
         <Icon.Button
         name="question" 
         size={40} 
         color="#6a9171"
         backgroundColor="white"
         onPress={() => this.props.navigation.navigate("Questions")}/>
         <Icon.Button
         name="sign-out-alt" 
         size={40} 
         color="#6a9171"
         backgroundColor="white"
         onPress={() => this.props.navigation.navigate("Login")}/>
    </View>
        
      </View>
    );
  }
}

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
    container:
    {
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: "space-between",
        marginBottom:100
    },
    container1: {
      fontWeight: "bold",
      alignItems: "center",
      backgroundColor: "white"
    },
    title:{
      fontSize: 15,
      fontWeight: "bold",
      padding: 10,
    },
    title1:{
      fontSize: 15,
      fontWeight: "bold",
      padding: 10,
    },
    date:{
        fontSize: 15,
        color: "#6a9171",
        fontWeight: "bold",
        padding: 10,
      },
    appButtonContainer: {
      width: 300,
      elevation: 8,
      backgroundColor: "lightgrey",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginTop:20,
      marginBottom:30
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
    }
  });
  