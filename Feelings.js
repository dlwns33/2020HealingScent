import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import "react-native-gesture-handler";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";

TouchableOpacity.defaultProps = { activeOpacity: 0.1 };

class ExampleOne extends Component {
  static navigationOptions = ({ navigation }) => {
    return {};
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
      flex: 1,
      justifyContent: "center"
    }
  };

  onNextStep = () => {
    console.log("called next step");
  };

  onPrevStep = () => {
    console.log("called previous step");
  };

  onSubmitSteps = () => {
    console.log("called on submit step.");
  };

  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: "#8977ad",
      activeLabelColor: "#8977ad",
      activeStepNumColor: "white",
      activeStepIconColor: "#8977ad",
      completedStepIconColor: "#8977ad",
      completedProgressBarColor: "#8977ad",
      completedCheckColor: "#d3d3d3d3"
    };

    const buttonTextStyle = {
      color: "#686868",
      fontWeight: "bold"
    };

    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label="Q1"
            nextBtnText = "다음"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>
                Q1. 나는 우울감을 느낀 적이 있다
              </Text>
              <AppButton title="매우 그렇다" backgroundColor="#8977ad" />
              <AppButton title="그렇다" backgroundColor="#8977ad" />
              <AppButton title="보통이다" backgroundColor="#8977ad" />
              <AppButton title="그렇지 않다" backgroundColor="#8977ad" />
              <AppButton title="전혀 그렇지 않다" backgroundColor="#8977ad" />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Q2"
            previousBtnText = "이전"
            nextBtnText = "다음"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>
                Q2. 나는 감정의 기복이 심하다
              </Text>
              <AppButton title="매우 그렇다" backgroundColor="#8977ad" />
              <AppButton title="그렇다" backgroundColor="#8977ad" />
              <AppButton title="보통이다" backgroundColor="#8977ad" />
              <AppButton title="그렇지 않다" backgroundColor="#8977ad" />
              <AppButton title="전혀 그렇지 않다" backgroundColor="#8977ad" />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Q3"
            previousBtnText = "이전"
            nextBtnText = "다음"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>
                Q3. 나는 안정감을 느낀다
              </Text>
              <AppButton title="매우 그렇다" backgroundColor="#8977ad" />
              <AppButton title="그렇다" backgroundColor="#8977ad" />
              <AppButton title="보통이다" backgroundColor="#8977ad" />
              <AppButton title="그렇지 않다" backgroundColor="#8977ad" />
              <AppButton title="전혀 그렇지 않다" backgroundColor="#8977ad" />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Q4"
            previousBtnText = "이전"
            nextBtnText = "다음"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>Q4. 나는 위축되어 있다</Text>
              <AppButton title="매우 그렇다" backgroundColor="#8977ad" />
              <AppButton title="그렇다" backgroundColor="#8977ad" />
              <AppButton title="보통이다" backgroundColor="#8977ad" />
              <AppButton title="그렇지 않다" backgroundColor="#8977ad" />
              <AppButton title="전혀 그렇지 않다" backgroundColor="#8977ad" />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Q5"
            previousBtnText = "이전"
            finishBtnText = "다음"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            onSubmit={() => this.props.navigation.navigate("Questions")}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>Q5.나는 지금보다 행복해지고 싶다</Text>
              <AppButton title="매우 그렇다" backgroundColor="#8977ad" />
              <AppButton title="그렇다" backgroundColor="#8977ad" />
              <AppButton title="보통이다" backgroundColor="#8977ad" />
              <AppButton title="그렇지 않다" backgroundColor="#8977ad" />
              <AppButton title="전혀 그렇지 않다" backgroundColor="#8977ad" />
            </View>
          </ProgressStep>
        </ProgressSteps>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 7
  },
  appButtonContainer: {
    width: 300,
    elevation: 8,
    backgroundColor: "lightgrey",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 7
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  }
});

export default ExampleOne;
