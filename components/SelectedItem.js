import React from 'react';
import { View, Text} from 'react-native';


const SelectedItem = ({item}) => {

  return (
    <View>
      <Text>{item.tid} {item.title}</Text>
    </View>
  )
}

export default SelectedItem;