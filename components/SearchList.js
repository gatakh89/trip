import React, { useEffect, useState, useCallback } from 'react';

// https://reactnativeelements.com/docs
import { ListItem } from 'react-native-elements'

import api from '../api/list'

const SearchList = ({ navigation, keyword }) => {
  
  const [list, setList] = useState([]);
 
  const getSearch = useCallback(async (keyword) => {
    if(keyword && keyword.length > 1) {
      const result = await api.search1(keyword);
     
      setList(result.data);
     
    }
  }, [])
  
  useEffect(()=> {
    getSearch(keyword);
  }, [keyword]);
  
  if(keyword && keyword.length > 1){
    return(
      list.map((item, i) => (
        <ListItem containerStyle={{width:"80%"}} key={i} bottomDivider onPress={()=>{navigation.navigate('MapDetails',{addr1: item.addr1})}}>
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