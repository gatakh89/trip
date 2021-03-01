import React, { useCallback, useEffect, useState } from 'react';
import Details from './Details'


import api from '../api/list'


const DetailContainer = ( { route, navigation }) => {
  
  const [dosi, setDosi] = useState(null);  

 
  const getDosi = useCallback(async () => {
    const result = await api.usl();
    const { title } = route.params;
    const list2 =result.filter(item => item.title == title)[0] 
    setDosi(list2);
    }, [])

// console.log(title)

useEffect(()=>{
 
  const unsubscribe = navigation.addListener(
    'focus',
    () => {
     
      getDosi();
    }
  )

  return unsubscribe;
}, [navigation])

  return (
    <Details navigation={navigation} route={route} list={dosi}></Details>
  )

}
export default DetailContainer;