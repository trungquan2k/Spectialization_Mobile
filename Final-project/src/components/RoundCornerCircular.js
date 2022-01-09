import React from 'react'
import { View } from 'react-native'

const RoundCornerCircular = () => {
    return (
        <View
        style={{
          backgroundColor: 'transparent',
          justifyContent: 'center',
          alignItems: 'center',
          height: 159,
          width: '100%',
          borderBottomWidth: 70,
          borderBottomColor: 'red',
          borderBottomRightRadius: 800,
          borderBottomLeftRadius: 800,
        }}
      />

    )
}
const styles = StyleSheet.create({
 
})

export default RoundCornerCircular;