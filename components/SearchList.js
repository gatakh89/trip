import React, { useEffect, useState, useCallback } from 'react';

// https://reactnativeelements.com/docs
import { ListItem } from 'react-native-elements'

import api from '../api/list'

const SearchList = ({ navigation, keyword }) => {
  
  const [list, setList] = useState(null);
 
  const getSearch = useCallback(async (keyword) => {
    console.log("Search List Keyword")
    console.log(keyword)
    if (keyword) {
      const result = await api.search1(keyword);
     
      setList(result.data.response.body.items.item);
    
    }
  }, [])
  
  useEffect(()=> {
    getSearch(keyword);
  }, [keyword]);
  
  if(list && keyword && keyword.length > 1){
    return(
      
      list.map((item, i) => (
        <ListItem containerStyle={{width:"80%"}} key={i} bottomDivider onPress={()=>{navigation.navigate('Details',{title: item.title, addr1: item.addr1})}}>
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