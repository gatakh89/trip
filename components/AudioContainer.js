import React, { useCallback, useEffect, useState } from 'react';
import Audio from './Audio'


import api from '../api/list'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
// Navigator로 화면을 이동할 때 컴포넌트 속성으로 전달됨
const HomeContainer = ({ navigation, route }) => {

  // 백엔드에 API요청후 응답 받은 데이터
  // 데이터를 받으면 화면을 다시 렌더링한다.
  // state 처리
  const [dosi, setDosi] = useState(null);  

  //, [] <- 함수가 재생성될 조건
  //, [] <- 컴포넌트가 처음 마운트 됐을 때만 생성
  //, [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 생성
  // memoizing function 정의
  const getDosi = useCallback(async () => {
    const { tid } = route.params;
    const result = await api.usl1();
    const list2 = result.data.response.body.items.item.filter(dosilist => dosilist.tid == tid)
    // console.log(result.data);
    // state를 갱신해서 다시 그리기
    console.log(list2);
    setDosi(list2);
  }, [])



  useEffect(()=>{
    // navigation 이벤트 리스너를 생성
    // 반환 값이 이벤트 리스너 해제 함수
    const unsubscribe = navigation.addListener(
      'focus',
      () => {
        console.log('focus')
        getDosi();
      }
    )

    return unsubscribe;
  }, [navigation])

  return (
    <Audio navigation={navigation} route={route} list={dosi}></Audio>
  )

}
export default HomeContainer;