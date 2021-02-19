import React from 'react';
import { View, Text} from 'react-native';


const SelectedItem = ({item}) => {

  return (
    <View>
      <Text>{item.id} {item.title}</Text>
    </View>
  )
}

export default SelectedItem;