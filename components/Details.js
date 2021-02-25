import { apisAreAvailable } from 'expo';
import React, { useEffect, useCallback, useState } from 'react';
import { Text, View, ProgressBarAndroid } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

import { useDispatch, useSelector } from 'react-redux'
import { addTask, removeTask } from '../redux/actions/tasks'

const Details = ({ route , list}) => {
  const { title } = route.params;

  const dispatch = useDispatch();

  const tasks = useSelector(state => state.tasks);
 

  const isExistedTask = tasks.filter(item => item.title == title).length > 0 ? true : false;

  

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      { !list && <ProgressBarAndroid /> }
      { list && 
      <Card>
        <Card.Title>{list.title}</Card.Title>
        <Card.Divider/>
        
        <Card.Image source={{uri: list.imageUrl}}>
        </Card.Image>
        <Card.Divider/>        
        <Text style={{marginBottom: 10}}>
          {list.tid}
        </Text>
        {
          isExistedTask 
            ?
            <Button
              onPress={()=>{dispatch(removeTask(title))}}
              icon={<Icon name='close' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
              title='싫어요' 
            /> 
            :
            <Button
              onPress={()=>{dispatch(addTask(list))}}
              icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
              title='좋아요' 
            />    
        }
            
      </Card>
      }
    </View>
  )
}
export default Details;





















// const Details = ( { route, navigation }) => {

//   const [item, setDosi] = useState(null);  

//   //, [] <- 함수가 재생성될 조건
//   //, [] <- 컴포넌트가 처음 마운트 됐을 때만 생성
//   //, [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 생성
//   // memoizing function 정의
//   const getDosi = useCallback(async () => {
//     const result = await api.usl();
//     const { title } = route.params;

//     const list2 =result.data.response.body.items.item.filter(item => item.title == title)[0] 
//     //.filter(item => item.title == title)[0] 
//    // const list2 = result.data.response.body.items.item.filter(dosilist => dosilist.addr1 == addr1); 
//     // console.log(result.data);
//     // state를 갱신해서 다시 그리기
//     setDosi(list2);
   
//   }, [])

//   // useEffect
//   // 특정 조건에 맞게 실행하는 함수를 정의
//   // , [] 컴포넌트가 처음 마운트 됐을 때 실행되는 함수를 정의
//   // , [data] <- data라는 객체/변수가 생성되거나 바뀔 때 함수가 실행
//   // componentDidMount : event hook
//   // useEffect(()=> {
//   //   getList();
//   // }, [])

//   useEffect(()=>{
//     // navigation 이벤트 리스너를 생성
//     // 반환 값이 이벤트 리스너 해제 함수
//     const unsubscribe = navigation.addListener(
//       'focus',
//       () => {
//         // console.log('focus')
//         getDosi();
//       }
//     )
    
    

    
    
    
//     return unsubscribe;
//   }, [navigation])

  
//   const dispatch = useDispatch();     
  
//   const tasks = useSelector(state => state.tasks);

  
//     const isExistedTask = tasks.filter(item => item.title == title).length > 0 ? true : false;
  
 

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//       }}>
//       { !item && <ProgressBarAndroid /> }
//       { item && 
//       <Card>
//         <Card.Title>{item.title}</Card.Title>
//         <Card.Divider/>
//         <Card.Image source={{uri: item.image}}>
//         </Card.Image>
//         <Card.Divider/>        
//         <Text style={{marginBottom: 10}}>
//           {item.description}
//         </Text>
//         {
//           isExistedTask 
//             ?
//             <Button
//               onPress={()=>{dispatch(removeTask(id))}}
//               icon={<Icon name='close' type='ionicon' color='#ffffff' />}
//               buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"gray"}}
//               title='REMOVE TASK' 
//             /> 
//             :
//             <Button
//               onPress={()=>{dispatch(addTask(item))}}
//               icon={<Icon name='checkmark' type='ionicon' color='#ffffff' />}
//               buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:"tomato"}}
//               title='ADD TASK' 
//             />    
//         }
            
//       </Card>
//       }
//     </View>
//   )
// }
// export default Details;