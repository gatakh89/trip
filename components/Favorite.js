import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ImageBackground  } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

import { removeAction } from '../redux/actions'

const Favorite = ({navigation}) => {

  const actions = useSelector(state => state.actions);
  console.log("--actions state in Actions Component");
  console.log(actions);

  const dispatch = useDispatch();

  return(
    <View style={{flex:1}}>
       <ImageBackground 
            	style={{ width: "100%", height: "100%", justifyContent:"center"}}  //View를 꽉채우도록
                source={require('../details/background1.jpg')}  //이미지경로
                resizeMode="contain" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                >
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", justifyContent: 'center' }}>
      {
        actions.map((item, i) => (
          <ListItem containerStyle={{width:"80%"}} key={i} onPress={()=>{navigation.navigate("Details", {id: item.id})}}>
            <Avatar source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name='close' type='ionicon' color='gray' onPress={()=>{dispatch(removeAction(item.id))}} />
          </ListItem>
        ))
      }
      </ScrollView>

      </ImageBackground>
    </View>
  )
}

export default Favorite;