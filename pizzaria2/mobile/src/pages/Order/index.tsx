import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useRoute, RouteProp } from '@react-navigation/native'

type RouteDetailParams = {
  Order: {
    number: string | number
    order_id: string
  }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>

export default function Order() {
  const route = useRoute<OrderRouteProps>()
  return (
    <View style={styles.container}>
      <Text>Tela order</Text>
      <Text>{route.params.number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {}
})
