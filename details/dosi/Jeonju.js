import React from 'react';
import { Text, View } from 'react-native';

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';
const Jeonju = ({  }) => {
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Jeonju</Text>
    </View>
  )
}
export default Jeonju;