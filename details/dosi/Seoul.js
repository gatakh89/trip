import MapView, { Marker } from 'react-native-maps';
import React from 'react';
// import  Marker  from 'react-native-maps';
import { View} from 'react-native';
import { SEOULDATA } from '../dosiDetails/seoul'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'


const Seoul = ({ navigation }) =>{
  const list = SEOULDATA;

 
    return(
      
      <View>
        <MapView  style={{width: '100%', height: '50%'}}
        initialRegion={{latitude: 37.56421, longitude:  127.0016, latitudeDelta: 0.18, longitudeDelta: 0.18,}}
        >
                  {list.map((item, index) => (
              <Marker key={index} coordinate={item.coordinate} title={item.title} 
              subtitle={item.subtitle}
              />
            ))}
       </MapView>
      
        <View style={{width: '100%', height: '50%'}}>
            <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
            {list.map((item, i) => (
              <ListItem  containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
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
      </View>
     )
  }


export default Seoul;