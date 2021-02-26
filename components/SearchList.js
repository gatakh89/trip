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
      
    //  list.map((item, i) => (
        <ListItem containerStyle={{width:"80%"}}  bottomDivider onPress={()=>{navigation.navigate('MapDetails',{title: list.title, addr1: list.addr1})}}>
          <ListItem.Content>
            <ListItem.Title>{list.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
  //    ))
    )  
  } else {
    return (
      <></>
    )
  }
}

export default SearchList;