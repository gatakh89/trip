import 'react-native-gesture-handler';

import React from 'react';



import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import creatSagaMiddleware, { runSaga } from 'redux-saga'

import rootReducer from './redux/reducers'
import rootSaga from './redux/sagas'
import Main from './components/MainContainer'

const SagaMiddleware = creatSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);


export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>
  
  );
}













// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// // from 자바스크립트 파일명
// // from 디렉토리명 -> 디렉토리/index.js
// // import HelloWorld from './components/HelloWorld'
// // import Counter from './components/Counter'
// // import LotsOfGreetings from './components/LotsOfGreetings'
// import SimpleList from './components/SimpleList'


// /* App 컴포넌트 시작 */
// export default function App() {
//   // JSX
//   // UI 템플릿을 작성
//   return (
//         // 속성={값}
//         // 속성={"문자열"}
//         // 속성={{name:"sss", phone:"aaaa"}}
//         // 속성={객체변수}
//     <View style={styles.container}>
//       {/* <HelloWorld></HelloWorld> */}
//       {/* <Counter></Counter> */}
//       {/* <LotsOfGreetings></LotsOfGreetings> */}
//       <SimpleList></SimpleList>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// /* App 컴포넌트 끝 */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
