import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home'
import Favorite from './components/Favorite'
import Map from './components/Map'
import Search from './components/Search'


import RegionList from './components/RegionList'
import Details from './components/Details'


import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'


const store = createStore(rootReducer);
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const MapStack = createStackNavigator();
const SrearchStack = createStackNavigator();

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
      case 'Map':
        iconName = focused
          ? 'map'
          : 'map-outline'; 
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

const MapStackScreen = () => {
  return (
    <MapStack.Navigator >
    <MapStack.Screen name="Map" component={Map} options={{title:"우리나라 전도",headerTitleAlign:"ceter"
    ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
   
    </MapStack.Navigator>
  )
} 
const SrearchStackScreen = () => {
  return (
    <SrearchStack.Navigator >
     <SrearchStack.Screen name="Search" component={Search} options={{title:" 검색", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
            <SrearchStack.Screen name="RegionList" component={RegionList} options={{title:" 도시들", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
    </SrearchStack.Navigator>
  )

}



const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={Home} options={{title:"우리나라 관광지도",headerTitleAlign:"ceter"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="Details" component={Details} options={{title:"좋아하는 곳", headerTitleAlign:"center"
      ,headerTitleStyle: {fontWeight: 'bold'}, headerBackground: BackBtn, }}/>
      <HomeStack.Screen name="RegionList" component={RegionList} options={{title:" 도시들", headerTitleAlign:"center"
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
            <Tab.Screen name="Map" component={MapStackScreen} />
            <Tab.Screen name="Search" component={SrearchStackScreen} />
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
