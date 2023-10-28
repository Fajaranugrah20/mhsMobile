import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Detail = () => {
  return (
    <View>
      
      <Image style={{height: 300, borderRadius: 10, marginLeft: 40, marginRight: 40, marginTop: 16, width: 400, alignItems: 'center', justifyContent: 'center' }}source={require('../assets/images/bebek.png')}/>
      <Text style={{ fontWeight: 'bold', marginTop: 10, marginLeft: 40,   }}>Bebek Bumbu Ireng                                           Rp.24.000   </Text> 
      <Text style={{textAlign: 'center', marginLeft: 20, marginRight: 20, justifyContent:'space-between' }}>Bebek goreng dengan bumbu hitam khas madura terasa nikmat,
       Codebluu pernah makan disini</Text> 
       

       <View style={{ borderWidth: 0,
       flexDirection: 'row',
       justifyContent: 'Space-between',
       height: 45,
       alignItems: 'center',
       backgroundColor: 'red',
       marginHorizontal: 16, marginTop: 290,
       padding: 16,borderRadius: 40}}><TouchableOpacity onPress={() => navigation.navigate('Confirm')}></TouchableOpacity><Text style={{textAlign: 'center', marginLeft: 115 }}>Konfirmasi Pembayaran</Text></View>
        
       

    </View>
    
  )
}

export default Detail