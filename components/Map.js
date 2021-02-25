import React from 'react';
import { View, ImageBackground } from 'react-native';


import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'



const Map = ({ navigation, list}) => {


//console.log(list);
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
          { flexGrow:1, alignItems:"flex-start", justifyContent:"center", }}
      >
        {
          list.map((item, i) => (
           <ListItem 
            containerStyle={{width:"80%",  justifyContent:"center", justifyContent: 'center'}} 
            key={i}
            onPress={()=>{navigation.navigate('MapDetails',{addr1: item.addr1})}}
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
export default Map;


