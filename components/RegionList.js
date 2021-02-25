
import React  from 'react';

// import  Marker  from 'react-native-maps';
import { View, ImageBackground, Button} from 'react-native';

import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'



const Seoul = ({  navigation, list }) =>{
    

//const { addr1 } = route.params;
  // const [dosi, setDosi] = useState([]);   
 
//  const list2 = list.filter(dosilist => dosilist.addr1 == addr1); 
 const list2 =list;
 //const map2 = list2[0];
  
  // console.log(route.params);
  // const getDosi = useCallback(async () => {
  // const result = await api.dosiLists();
    
  //   setDosi(result.data);
  // }, [])

  // useEffect(()=>{

  //   const unsubscribe = navigation.addListener(
  //     'focus',
  //     () => {
  //       // console.log('focus')
  //       getDosi();
  //     }
  //   )


  //   return unsubscribe;
  // }, [navigation])


    return(
      
      <View>
         <ImageBackground 
            	style={{ width: "100%", height: "100%", alignItems:"center"}}  
                source={{uri: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F161CBE4B4F6F525C389AD7"}}  //이미지경로
                resizeMode="cover">
        {   
          list2 &&         
          <View style={{width: '100%', height: '100%'}}>
              <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
              {list2.map((item, i) => (
                <ListItem  containerStyle={{width:"100%"}} key={i} onPress={()=>{navigation.navigate("Details", {title: item.title})}}>
              
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


export default Seoul;