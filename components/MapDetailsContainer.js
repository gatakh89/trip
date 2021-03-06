import React, { useCallback, useEffect, useState } from 'react';
import MapDetails from './MapDetails'

import {LISTDATA} from '../List/list'
import api from '../api/list'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달됨
const MapContainer = ({ route, navigation }) => {

  const [dosi2, setDosi2] = useState(null);
  const { addr1 } = route.params;    


  const getDosi2 = useCallback(async () => {
  const dosi = LISTDATA.filter(dosilist => dosilist.addr1 == addr1)[0]; 
  //const dosi = result.data.filter(dosilist => dosilist.addr1 == addr1)[0]; 
  // console.log(dosi)
  // const val = dosi.latitude
  // console.log(val)
  const region = {
    latitude: dosi.latitude,
    longitude: dosi.longitude,
    latitudeDelta: dosi.latitudeDelta,
    longitudeDelta: dosi.longitudeDelta}
   // console.log(region)
    setDosi2(region);
  }, [])
  
  // 백엔드에 API요청후 응답 받은 데이터
  // 데이터를 받으면 화면을 다시 렌더링한다.
  // state 처리
  const [dosi, setDosi] = useState(null);  

  //, [] <- 함수가 재생성될 조건
  //, [] <- 컴포넌트가 처음 마운트 됐을 때만 생성
  //, [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 생성
  // memoizing function 정의
  const getDosi = useCallback(async () => {
    const result = await api.usl();
    const { addr1 } = route.params;
    const list3 = result.data.filter(dosilist => dosilist.addr1 == addr1); 
    const list4 =list3.filter(dosilist => dosilist.mapX != null)
   
   //console.log(list4)
    // state를 갱신해서 다시 그리기
    setDosi(list4);
   
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
    // navigation 이벤트 리스너를 생성
    // 반환 값이 이벤트 리스너 해제 함수
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        // console.log('focus')
        getDosi();
        getDosi2();
      }
    )
    
    // clean-up function
    // 객체 소멸 함수

    
    // component가 unmount 되는 시점에 clean-up 함수가 실행됨
    // useEffect(()=>{ 
    //   ...
    //  
    //  return 함수
    // }, [])
    
    

    // navigation이 변경되는 시점에 clean-up 함수가 실행됨
    // return () => {
    //   navigation.removeListener(unsubscribe);
    // }
    return unsubscribe;
  }, [navigation])

  return (
    <MapDetails navigation={navigation}  route={route} dosi={dosi2} list={dosi}></MapDetails>
  )

}
export default MapContainer;