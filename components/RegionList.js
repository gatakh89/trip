import MapView, { Marker } from 'react-native-maps';
import React from 'react';
// import  Marker  from 'react-native-maps';
import { View, ImageBackground} from 'react-native';
import { DOSIDATA } from '../details/dosi'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'


const Seoul = ({ route, navigation }) =>{
  let list = DOSIDATA;
 
  
  const { regions } = route.params;
  const list2 = list.filter(item => item.regions == regions);
  const map = list2[0];
 console.log(map);
    return(
      
      <View>
         <ImageBackground 
            	style={{ width: "100%", height: "100%", alignItems:"center"}}  
                source={{uri: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F161CBE4B4F6F525C389AD7"}}  //이미지경로
                resizeMode="cover" 
                >
                  
        <MapView  style={{width: '100%', height: '50%'}}
                   region={map.regionCoordinate}
        >
                  {list2.map((item, index) => (
              <Marker key={index} coordinate={item.coordinate} title={item.title} 
             
              />
            ))}
       </MapView>
      
        <View style={{width: '100%', height: '50%'}}>
            <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
            {list2.map((item, i) => (
              <ListItem  containerStyle={{width:"100%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
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


export default Seoul;