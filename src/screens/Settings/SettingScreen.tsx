import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { GlobalStyles } from '../../theme'
import { useCounterStore } from '../../store/counter-store'
import { useNavigation } from '@react-navigation/native'

export const SettingScreen = () => {
  const { setOptions } = useNavigation();

  const counter = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.inc);
  const decrement = useCounterStore((state) => state.dec);

  useEffect(() => {
    setOptions({
      title: 'Counter is ' + counter.toString()
    })
  }, [counter]);

  return (
    <View style={ GlobalStyles.container }>
        <Text style={ GlobalStyles.title }>Count is: {counter}</Text>

        <Pressable
          style={ GlobalStyles.primaryButton}
          onPress={() => increment()}
        > 
          <Text style={ GlobalStyles.title }>+1</Text>
        </Pressable>

        <Pressable
          style={ GlobalStyles.primaryButton}
          onPress={() => decrement()}
        > 
          <Text style={ GlobalStyles.title }>-1</Text>
        </Pressable>
    </View>
  )
}
