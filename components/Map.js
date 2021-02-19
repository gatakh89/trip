import MapView, { Marker } from 'react-native-maps';
import React, { useRef } from 'react';
import {  View, ImageBackground} from 'react-native';
import { DOSIDATA } from '../details/dosi'



import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const list = DOSIDATA
let region = {latitude: 35.81303112696757, longitude: 128.07836639839633, latitudeDelta: 5, longitudeDelta: 5}

const Map = ({}) => {

  const map = useRef(null);

 
 return(
      
      <View>
         <ImageBackground 
            	style={{ width: "100%", height: "100%", alignItems:"center"}}  //View를 꽉채우도록
                source={{uri: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F161CBE4B4F6F525C389AD7"}}  //이미지경로
                resizeMode="cover" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                >
        <MapView  style={{width: '99%', height: '80%'}}
                 region={region} zoomControlEnabled={true}
                 ref={map}
                 
                
        >
                  {list.map((item, index) => (
              <Marker key={index} coordinate={item.coordinate} title={item.title} 
              subtitle={item.subtitle} pinColor={'orange'}
              >
              </Marker>
            ))}
       </MapView>
      
        <View style={{width: '100%', height: '20%'}}>
            <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
            {list.map((item, i) => (
              <ListItem  containerStyle={{width:"100%"}} key={i}  
                        onPress={()=>{map.current.animateToRegion({
                          latitude:item.coordinate.latitude,
                          longitude:item.coordinate.longitude,
                          latitudeDelta: 0.02,
                          longitudeDelta: 0.02
                        })}}>
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