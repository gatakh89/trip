
import React, {useCallback, useEffect, useState}  from 'react';

// import  Marker  from 'react-native-maps';
import { View, ImageBackground} from 'react-native';

import { ListItem, Avatar , Icon, Button } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

import api from '../api/list'

const Seoul = ({  navigation,route}) =>{
  const { addr1 , id} = route.params;
  const [list, setDosi] = useState(null);  

  //, [] <- 함수가 재생성될 조건
  //, [] <- 컴포넌트가 처음 마운트 됐을 때만 생성
  //, [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 생성
  // memoizing function 정의
  const getDosi = useCallback(async () => {
    const result = await api.usl();
    
    const list2 = result.data.filter(dosilist => dosilist.addr1 == addr1); 
    //  console.log(list2);
    // state를 갱신해서 다시 그리기
    setDosi(list2);
   
  }, [])

  // useEffect
  // 특정 조건에 맞게 실행하는 함수를 정의
  // , [] 컴포넌트가 처음 마운트 됐을 때 실행되는 함수를 정의
  // , [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 실행
  // componentDidMount : event hook
  // useEffect(()=> {
  //   getList();
  // }, [])

  useEffect(()=>{
   
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        // console.log('focus')
        getDosi();
      }
    )
    
    
    return unsubscribe;
  }, [navigation])

  
 


    return(
      
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
                <ListItem  containerStyle={{width:"100%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
              
                    <Avatar source={{uri: item.imageUrl}} />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                      <ListItem.Subtitle>{item.themeCategory}</ListItem.Subtitle>
                      
                    </ListItem.Content>

                 
                            <Button
                             onPress={()=>{navigation.navigate("Details", {id: item.id})}}
                              icon={<Icon name='heart' type='ionicon' color='#ffffff' />}
                              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
                              title='저장' 
                            />    
                        
                  <Button style={{width:50}} key={i} onPress={()=>{navigation.navigate("Audio", {id: item.id})}} title={"설명"}></Button>
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