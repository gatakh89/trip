import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home'
import Favorite from './components/Favorite'
import Weather from './components/Weather'
import Search from './components/Search'

import Seoul from './details/dosi/Seoul'
import Taean from './details/dosi/Taean'
import Gangwon from './details/dosi/Gangwon'
import Jeju from './details/dosi/Jeju'
import Jeonju from './details/dosi/Jeonju'
import Busan from './details/dosi/Busan'
import Yeosu from './details/dosi/Yeosu'

import Details from './components/Details'


import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'


const store = createStore(rootReducer);
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();

const tabBarOptions= {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}
const screeOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch(route.name){
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'Weather':
        iconName = focused
          ? 'calendar'
          : 'calendar-outline'; 
        break;
      case 'Search':
        iconName = focused
          ? 'search'
          : 'search-outline'; 
        break;
      case 'Favorite':
        iconName = focused
          ? 'heart'
          : 'heart-outline'; 
        break;
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

function BackBtn() {
  return (
    <Image
      source={require('./details/top.jpg')}
      style={{width: "100%", height: "100%", opacity: 0.3, }}
    />
  );
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={Home} options={{title:"우리나라 관광지도",headerTitleAlign:"ceter"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Seoul" component={Seoul} options={{title:"서울", headerTitleAlign:"center" 
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Busan" component={Busan} options={{title:"부산", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Jeonju" component={Jeonju} options={{title:"전주", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Jeju" component={Jeju} options={{title:"제주", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Gangwon" component={Gangwon} options={{title:"강릉, 양양", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Taean" component={Taean} options={{title:"태안", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Yeosu" component={Yeosu} options={{title:"여수", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Details" component={Details} options={{title:"좋아하는 곳", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
    </HomeStack.Navigator>
  )
}
// ./details/top.jpg
const FavoriteStackScreen = () => {
  return (
    <FavoriteStack.Navigator
    style={{ width: "100%", height: "100%", justifyContent:"center"}}  //View를 꽉채우도록
                source={require('./details/background.jpg')}  //이미지경로
                resizeMode="contain" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                
    >
      <FavoriteStack.Screen name="Favorite" component={Favorite} options={{title:"좋아요", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <FavoriteStack.Screen name="Details" component={Details} options={{title:"좋아하는 곳", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
    </FavoriteStack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
       <NavigationContainer>
        <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screeOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Weather" component={Weather} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Favorite" component={FavoriteStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  
  );
}













// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // from 자바스크립트 파일명
// // from 디렉토리명 -> 디렉토리/index.js
// // import HelloWorld from './components/HelloWorld'
// // import Counter from './components/Counter'
// // import LotsOfGreetings from './components/LotsOfGreetings'
// import SimpleList from './components/SimpleList'


// /* App 컴포넌트 시작 */
// export default function App() {
//   // JSX
//   // UI 템플릿을 작성
//   return (
//         // 속성={값}
//         // 속성={"문자열"}
//         // 속성={{name:"sss", phone:"aaaa"}}
//         // 속성={객체변수}
//     <View style={styles.container}>
//       {/* <HelloWorld></HelloWorld> */}
//       {/* <Counter></Counter> */}
//       {/* <LotsOfGreetings></LotsOfGreetings> */}
//       <SimpleList></SimpleList>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// /* App 컴포넌트 끝 */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
