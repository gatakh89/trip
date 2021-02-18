import React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';

import { LISTDATA } from '../List/list'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'


// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달됨
const Home = ({ navigation }) => {

  const list = LISTDATA;
  

  return (
    <View>
      <ImageBackground 
            	style={{ width: "100%", height: "100%", justifyContent:"center"}}  //View를 꽉채우도록
                source={require('../details/background1.jpg')}  //이미지경로
                resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                >
      <View>
      <ScrollView 
        contentContainerStyle={
          { flexGrow:1, alignItems:"flex-start", justifyContent:"center"}}
      >
        {
          list.map((item, i) => (
           <ListItem 
            containerStyle={{width:"32%",  justifyContent:"center"}} 
            key={i}
            onPress={()=>{navigation.navigate(item.callId, {id: 1})}}
            >
             <Avatar source={{uri: item.image}} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
                <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>
      </View> 
      </ImageBackground>
    </View>
  )
}
export default Home;


