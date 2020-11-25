import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import "react-native-gesture-handler";

import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { TouchableHighlight } from "react-native-gesture-handler";

TouchableOpacity.defaultProps = { activeOpacity: 0.1 };

class ExampleTwo extends Component {
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
      activeStepIconBorderColor: "#6a9171",
      activeLabelColor: "#6a9171",
      activeStepNumColor: "white",
      activeStepIconColor: "#6a9171",
      completedStepIconColor: "#6a9171",
      completedProgressBarColor: "#6a9171",
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
                Q1. 어떤 느낌의 향을 좋아하시나요?
              </Text>
              <AppButton title=" 따뜻하고 포근하다" backgroundColor="#6a9171" />

              <AppButton title="상쾌하고 시원하다" backgroundColor="#6a9171" />
              <AppButton title="청순하고 우아하다" backgroundColor="#6a9171" />
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
                Q2. 좋아하는 향기노트를 선택해주세요
              </Text>
              <AppButton
                title="시트러스: 레몬,오렌지 등의 상큼한향"
                backgroundColor="#6a9171"
              />
              <AppButton
                title="플로럴: 장미, 자스민 등의 꽃향"
                backgroundColor="#6a9171"
              />
              <AppButton title="그린: 풀과 나뭇잎" backgroundColor="#6a9171" />
              <AppButton
                title="프루티: 사과, 딸기 등의 과일류"
                backgroundColor="#6a9171"
              />
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
                Q3. 싫어하는 향기노트를 선택해주세요
              </Text>
              <AppButton
                title="시트러스: 레몬,오렌지 등의 상큼한향"
                backgroundColor="#6a9171"
              />
              <AppButton
                title="플로럴: 장미, 자스민 등의 꽃향"
                backgroundColor="#6a9171"
              />
              <AppButton title="그린: 풀과 나뭇잎" backgroundColor="#6a9171" />
              <AppButton
                title="프루티: 사과, 딸기 등의 과일류"
                backgroundColor="#6a9171"
              />
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
              <Text style={styles.title}>Q4. 사용자의 성별</Text>
              <AppButton title="남자" backgroundColor="#6a9171" />
              <AppButton title="여자" backgroundColor="#6a9171" />
              <AppButton title="The third" backgroundColor="#6a9171" />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Q5"
            previousBtnText = "이전"
            finishBtnText = "결과보기"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            onSubmit={() => this.props.navigation.navigate("Recommendation")}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={{ alignItems: "center" }}>
              <Text style={styles.title}>Q5. 사용자의 나이</Text>
              <AppButton title="10대" backgroundColor="#6a9171" />
              <AppButton title="20대" backgroundColor="#6a9171" />
              <AppButton title="30대" backgroundColor="#6a9171" />
              <AppButton title="40대 이상" backgroundColor="#6a9171" />
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

export default ExampleTwo;
