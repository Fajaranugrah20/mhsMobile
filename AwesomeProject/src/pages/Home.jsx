import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'


  const Home= ({navigation}) => {
    return (
      <View>
        {/*HEADER*/}

      <View style={{ borderWidth: 0,
       flexDirection: 'row',
       justifyContent: 'Space-between',
       height: 60,
       alignItems: 'center',
       backgroundColor: 'red',
       marginHorizontal: 16, marginTop: 16,
       padding: 16,borderRadius: 40}}>
        <Image resizeMode= 'contain' style={{ height : 40, width: 150}} source={require ('../assets/images/MHS.png')}/>
      <View style={{height: 40, width: 40,
        padding: 16, borderRadius: 20, margin: 230 , backgroundColor: 'yellow'}}>    
      
      </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <View style={{padding: 12, borderWidth: 1, marginTop: 20, flex: 1, borderColor: 'white'}}>
      <View style={{
        
        backgroundColor: 'grey',
        height: 200,
        borderRadius: 4,
      }}>
    
        <Image style={{height: 200, width: 215, borderRadius: 4, }}source={require('../assets/images/bebek.png')}/>

      </View>
      

      <Text>Bebek Bumbu Ireng</Text>
      <Text>Rp.24.000</Text>
      </View>
      </TouchableOpacity>
      <View style={{padding: 12, borderWidth: 1, marginTop: 20, flex: 1, borderColor: 'white'}}>
      <View style={{
        backgroundColor: 'grey',
        height: 200,
        borderRadius: 4,
         
      }}>
        <Image style={{height: 200, width: 215, borderRadius: 4, }}source={require('../assets/images/naslem.jpeg')}/>
      </View>
      <Text>Nasi Lemak</Text>
      <Text>Rp.14.000</Text>
      </View>
      </View>
      <View style={{flexDirection: 'row'}}>
      
      <View style={{padding: 12, borderWidth: 1, marginTop: 20, flex: 1, borderColor: 'white'}}>
      <View style={{
        borderWidth: 0,
        backgroundColor: 'grey',
        height: 200,
     
        borderRadius: 4,
      }}>
        <Image style={{height: 200, width: 215, borderRadius: 4, }}source={require('../assets/images/tehtalua.png')}/>
      </View>
      <Text>Teh Talua</Text>
      <Text>Rp.24.000</Text>
      </View>
      
      <View style={{padding: 12, borderWidth: 1, marginTop: 20, flex: 1, borderColor: 'white'}}>
      <View style={{
        borderWidth: 0,
        backgroundColor: 'grey',
        height: 200,
        borderRadius: 4,
         
      }}>
        <Image style={{height: 200, width: 215, borderRadius: 4, }}source={require('../assets/images/tehobeng.png')}/>
      </View>
      <Text>Teh Obeng</Text>
      <Text>Rp.14.000</Text>
      </View>
      </View>
      </View>
      

      
      
      
      
      
      
    )
  }


export default Home;