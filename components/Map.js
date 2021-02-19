import MapView, { Marker } from 'react-native-maps';
import React from 'react';
// import  Marker  from 'react-native-maps';
import {  View, ImageBackground} from 'react-native';
import { SEOULDATA } from '../details/dosiDetails/seoul'
import { BUSANDATA } from '../details/dosiDetails/busan'
import { GangwonDATA } from '../details/dosiDetails/gangwon'
import { JEJUDATA } from '../details/dosiDetails/jeju'
import { jeonjuDATA } from '../details/dosiDetails/jeonju'
import { TaeanDATA } from '../details/dosiDetails/taean'
import { YeosuDATA } from '../details/dosiDetails/yeosu'


import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'





const list = SEOULDATA.concat( BUSANDATA, GangwonDATA, JEJUDATA, jeonjuDATA, TaeanDATA, YeosuDATA)
let region = {latitude: 35.81303112696757, longitude: 128.07836639839633, latitudeDelta: 5, longitudeDelta: 5}

  
  
  

  

const Map = ({navigation}) => {


 
 return(
      
      <View>
         <ImageBackground 
            	style={{ width: "100%", height: "100%", alignItems:"center"}}  //View를 꽉채우도록
                source={{uri: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F161CBE4B4F6F525C389AD7"}}  //이미지경로
                resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                >
        <MapView  style={{width: '99%', height: '88%'}}
                 region={region} zoomControlEnabled={true}
                
        >
                  {list.map((item, index) => (
              <Marker key={index} coordinate={item.coordinate} title={item.title} 
              subtitle={item.subtitle} pinColor={'orange'}
              >
              </Marker>
            ))}
       </MapView>
      
        <View style={{width: '100%', height: '12%'}}>
            <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
            {list.map((item, i) => (
              <ListItem  containerStyle={{width:"100%"}} key={i}  onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
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