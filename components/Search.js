import React, { useState, useCallback } from 'react';
import { Image, View, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'
import { ScrollView } from 'react-native-gesture-handler'
const Search = ({navigation}) => {

  const [keyword, setKeyword] = useState("");
  const [completedKeyword, setCompletedKeyword] = useState("");

  const handleSearch = useCallback((search)=>{
    // console.log(search);
    setKeyword(search);
  }, []);

  const handleEnd = useCallback((search)=>{
    console.log("--end--");
    console.log(search._dispatchInstances.memoizedProps.text);
    setCompletedKeyword(search._dispatchInstances.memoizedProps.text);
  }, []);


  return(
    <View>
       <ImageBackground 
                style={{ width: "100%", height: "100%", justifyContent:"center"}}  //View를 꽉채우도록
                  source={require('../details/travel.jpg')}  //이미지경로
                  resizeMode="contain" // 'cover', 'contain', 'stretch', 'repeat', 'center' 중 선택 
                  >
        
    
        <View style={{margin:10, width: '100%', height: '88%', alignItems: 'center'}}>
       
          <SearchBar platform={"android"} containerStyle={{width:'100%'}}
            placeholder="관광지를 검색하세요~ =)"
            onChangeText={handleSearch}
            onSubmitEditing={handleEnd}
            value={keyword}
          />
           <ScrollView contentContainerStyle={{ width: '100%', alignItems:"center", justifyContent:"center"}}>
          <SearchList navigation={navigation} keyword={completedKeyword}></SearchList>
          </ScrollView>
          
        </View>
      </ImageBackground>
    </View>
  )
}

export default Search;