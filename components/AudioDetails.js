
import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import Video from 'react-native-video';
import { ScrollView } from 'react-native-gesture-handler'


const Home = ({ route}) => {
  const { audioUrl } = route.params;
  const { title } = route.params;
  const { imageUrl } = route.params;
  const { script } = route.params;
  const { audioTitle } = route.params;
  

console.log(route.params);
  return (
    
    <View style={{ width: "100%", height: "100%", justifyContent:"center"}}>
     
         
          <View>       
            <Video source={{uri: audioUrl}}   // Can be a URL or a local file.
            //  ref={(ref) => {
            //    this.player = ref
            //  }}                                      // Store reference
            //  onBuffer={this.onBuffer}                // Callback when remote video is buffering
            //  onError={this.videoError}               // Callback when video cannot be loaded
            style={{width:'100%', height:'10%'}} audioOnly={true} />
            </View>

         
          <View style={{width: '100%', height: '90%'}}>
            
            <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
                    <Card>
                    <Card.Title>{title}</Card.Title>
                    <Card.Divider/>  
                    <Card.Image source={{uri: imageUrl}}>
                    </Card.Image>
                    <Card.Divider/>        
                    <Text style={{marginBottom: 10}}>
                      {script}
                    </Text>          
                  </Card>
            </ScrollView>
          </View>
        
    </View>
  )
}
export default Home;




