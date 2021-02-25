import MapView, { Marker } from 'react-native-maps';
import React, { useRef,useCallback, useEffect, useState } from 'react';
import {  View, ImageBackground} from 'react-native';
import api from '../api/list'


import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'


// let region = {latitude: 35.81303112696757, longitude: 128.07836639839633, latitudeDelta: 5, longitudeDelta: 5}

const Map = ({list, dosi}) => {
  
 

  const map = useRef(null);

  
  //{latitude: 35.81303112696757, longitude: 128.07836639839633, latitudeDelta: 5, longitudeDelta: 5}
 return(
      
  
      
      <View>
         <ImageBackground 
            	style={{ width: "100%", height: "100%", alignItems:"center"}}  //View를 꽉채우도록
                source={{uri: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F161CBE4B4F6F525C389AD7"}}  //이미지경로
                resizeMode="cover">
           {dosi && list &&         
            <MapView  style={{width: '100%', height: '60%'}} region= {dosi}
          zoomControlEnabled={true} ref={map}>  
                  
                  { list.map((item, index) => ( 
                  <Marker key={index} coordinate={{ latitude: item.mapY, longitude: item.mapX }} title={item.title} 
                  subtitle={item.subtitle} pinColor={'orange'}
                  />)) }
            </MapView>
            }
            
           {   
          list &&         
          <View style={{width: '100%', height: '40%'}}>
              <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
              {list.map((item, i) => (
               
                <ListItem  containerStyle={{width:"100%"}} key={i}  
                
                  onPress={()=>{map.current.animateToRegion({
                  latitude: item.mapY,
                  longitude: item.mapX,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01
                }
                )}
              }>
              
                    <Avatar source={{uri: item.imageUrl}} />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                      <ListItem.Subtitle>{item.themeCategory}</ListItem.Subtitle>
                      
                    </ListItem.Content>
                  {/* <Button style={{width:50}} key={i} onPress={()=>{navigation.navigate("Audio", {tid: item.tid})}}>설명</Button> */}
                </ListItem>
                  
                ))
              }
            </ScrollView>
        </View>
      }      
      </ImageBackground>
      </View>
     )
  }


export default Map;