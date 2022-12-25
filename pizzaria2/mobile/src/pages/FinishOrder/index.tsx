import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

type RouteDetailParams = {
  FinishOrder: {
    number: string | number
    order_id: string
  }
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

export default function FinishOrder() {
  const route = useRoute<FinishOrderRouteProp>()

  async function handleFinish() {
    alert('cli')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.alert}>Você deseja finalizar esse pedido</Text>
      <Text style={styles.title}>Mesa {route.params?.number}</Text>

      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.textButton}>Finalizar pedido</Text>
        <Feather size={20} color="#1d1d2e" name="shopping-cart" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d2e',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  alert: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 12
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#fff'
  },
  button: {
    backgroundColor: '#3fffa3',
    flexDirection: 'row',
    width: '65%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  textButton: {
    fontSize: 18,
    marginRight: 8,
    fontWeight: 'bold',
    color: '#1d1d2e'
  }
})
