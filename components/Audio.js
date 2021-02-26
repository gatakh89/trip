
import React from 'react';
import { View, Button, ImageBackground } from 'react-native';


import { ScrollView } from 'react-native-gesture-handler'
import { ListItem, Avatar } from 'react-native-elements'

const Home = ({route, list,navigation}) => {


//console.log(list);
  return (
    
    <View>
    <ImageBackground 
         style={{ width: "100%", height: "100%", alignItems:"center"}}  
           source={{uri: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F161CBE4B4F6F525C389AD7"}}  //이미지경로
           resizeMode="cover">
   {   
     list &&         
     <View style={{width: '100%', height: '100%'}}>
         <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
         {list.map((item, i) => (
           <ListItem  containerStyle={{width:"100%"}} key={i}>
         
               <Avatar source={{uri: item.imageUrl}} />
               <ListItem.Content>
                 <ListItem.Title>{item.title}</ListItem.Title>
                  
               
               </ListItem.Content>
             <Button style={{width:50}} key={i} onPress={()=>{navigation.navigate("AudioDetails", 
              {title: item.title, audioTitle: item.audioTitle, script: item.script, audioTitle: item.audioTitle, imageUrl: item.imageUrl, audioUrl: item.audioUrl},
             )}} title={"세부설명"}></Button>
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
export default Home;




