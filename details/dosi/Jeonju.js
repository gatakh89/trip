import MapView, { Marker } from 'react-native-maps';
import React from 'react';
// import  Marker  from 'react-native-maps';
import { View} from 'react-native';
import { jeonjuDATA } from '../dosiDetails/jeonju'

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'


const Jeonju = ({ navigation }) =>{
  const list = jeonjuDATA;

 
    return(
      
      <View>
        <MapView  style={{width: '100%', height: '50%'}}
        initialRegion={{latitude: 35.83123693378438, longitude:  127.12327440610352, latitudeDelta: 0.06, longitudeDelta: 0.06,}}
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


export default Jeonju;

