import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')
import "react-native-gesture-handler";

TouchableOpacity.defaultProps = { activeOpacity: 0.1 };

const styles = {
  container: {
    flex: 1,
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: "white"
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a9171'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a9171'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6a9171'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  title1: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  title3: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15
  },
  title2: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20
  },

  appButtonContainer: {
    width: 300,
    elevation: 8,
    backgroundColor: "lightgrey",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop:7,
    marginBottom:100
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
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

export default class Recom extends Component {
    static navigationOptions = ({ navigation }) => {
        return {};
      };
      constructor(props){
        super(props);
        this.state = {
          name: '',
        };
      }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>INHA님을 위한 향 추천 결과</Text>
        <Swiper style={styles.wrapper} height={200} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>1. 코튼 블러썸</Text>
            <Text style={styles.title1}>- 섬유유연제와 흡사한 안기고 싶은 향</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>2. 가든스윗피</Text>
            <Text style={styles.title1}>- 하늘하늘하고 달달한 꽃 향</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>3. 프렌치 라벤다</Text>
            <Text style={styles.title1}>- 마음을 편안하게 해주며 불면증에 좋은 향</Text>
          </View>
        </Swiper>
        <Text style={styles.title3}>감정을 기분좋게 바꿔줄 3개의 향입니다.</Text>
        <Text style={styles.title2}>버튼을 눌러 샘플을 배송받으세요.</Text>
        <AppButton 
        title="샘플키트 배송받기"
        backgroundColor="#6a9171"
        onPress={() => this.props.navigation.navigate("Main")}
      />
      </View>
    )
  }
}