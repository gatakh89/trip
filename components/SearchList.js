import React, { useEffect, useState, useCallback } from 'react';

// https://reactnativeelements.com/docs
import { ListItem } from 'react-native-elements'

import api from '../api/list'

const SearchList = ({ navigation, keyword, route }) => {
  
  const [list, setList] = useState(null);
 
  const getSearch = useCallback(async (keyword) => {
    console.log("Search List Keyword")
    console.log(keyword)
    if (keyword) {
      const result = await api.search1(keyword);
     
      setList(result.data);
    
    }
  }, [])
  
  useEffect(()=> {
    getSearch(keyword);
  }, [keyword]);
  
  if(list && keyword && keyword.length > 1){
    return(
      
      list.map((item, i) => (
      
        <ListItem containerStyle={{width:"80%"}}  bottomDivider onPress={()=>{navigation.navigate("AudioDetails", 
        {title: item.title, audioTitle: item.audioTitle, script: item.script, audioTitle: item.audioTitle, imageUrl: item.imageUrl, audioUrl: item.audioUrl},
       )}}>
          <ListItem.Content>
         
            <ListItem.Title>{item.title}</ListItem.Title>
          
          </ListItem.Content>
        </ListItem>
        
      ))
    )  
  } else {
    return (
      <></>
    )
  }
}

export default SearchList;