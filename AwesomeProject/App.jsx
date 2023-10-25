import { ScrollView, Text, View, Image } from 'react-native'
import React, { Component } from 'react'

  const App= () => {
    return (
      <View>
        {/*HEADER*/}

      <View style={{ borderWidth: 1,
       flexDirection: 'row',
       justifyContent: 'Space-between',
       height: 60,
       alignItems: 'center',
       backgroundColor: 'red',
       marginHorizontal: 16, marginTop: 16,
       padding: 16,borderRadius: 40}}>
        <Image resizeMode= 'contain' style={{ height : 40, width: 150}} source={require ('./src/assets/images/MHS.png')}/>
      <View style={{height: 40, width: 40,
        padding: 16, borderRadius: 20, margin: 230 , backgroundColor: 'yellow'}}>    
      
      </View>
      </View>
      <View style={{flexDirection: 'row'}}>
      <View style={{padding: 12, borderWidth: 1, marginTop: 20, flex: 1,}}>
      <View style={{
        borderWidth: 1,
        backgroundColor: 'green',
        height: 200,
        padding: 16 ,
      }}>
      </View>
      <Text>Nasi Tumpeng</Text>
      <Text>Rp.24.000</Text>
      </View>
      <View style={{padding: 12, borderWidth: 1, marginTop: 20, flex: 1,}}>
      <View style={{
        borderWidth: 1,
        backgroundColor: 'green',
        height: 200,
        padding: 16 ,
         
      }}>
      </View>
      <Text>Nasi Pecel</Text>
      <Text>Rp.14.000</Text>
      </View>
      </View>
      <View style={{flexDirection: 'row'}}>
      <View style={{padding: 12, borderWidth: 1, marginTop: 20, flex: 1,}}>
      <View style={{
        borderWidth: 1,
        backgroundColor: 'green',
        height: 200,
        padding: 16 ,
      }}>
      </View>
      <Text>Nasi Tumpeng</Text>
      <Text>Rp.24.000</Text>
      </View>
      <View style={{padding: 12, borderWidth: 1, marginTop: 20, flex: 1,}}>
      <View style={{
        borderWidth: 1,
        backgroundColor: 'green',
        height: 200,
        padding: 16 ,
         
      }}>
      </View>
      <Text>Nasi Pecel</Text>
      <Text>Rp.14.000</Text>
      </View>
      </View>

      
    
      </View>

      
      
      
      
      
      
    )
  }


export default App