import React, { useEffect } from 'react';
import { Button, Image, Text, View, FlatList,  ImageBackground, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from './data1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import { NavigationContainer } from '@react-navigation/native';
import dot from '../assets/dot.png';
import background from '../assets/background.jpg';
const h1 = {textAlign: 'center',fontSize:25, fontWeight:'bold', color: '#002A3A'}
const h2 = {fontSize:22, fontWeight:'bold', color: '#002A3A'}
const h3 = {fontSize:19, fontWeight:'bold', color: '#002A3A'}
const p = {fontSize:17, color: '#002A3A'}
const getStyle = (type) => {
    switch(type){
      case 'h1':
        return h1;
      case 'h2':
        return h2;
      case 'h3':
        return h3;
      case 'p':
        return p;
    }
  }
  const Li = ({text}) => {
    return (
      <View style={{flexDirection:'row', paddingHorizontal:16}}>
        <Image source={dot} style = {{width: 8, height:8, marginTop: 8}}/>
        <Text style={{...p, paddingHorizontal:3 }}>{text}</Text>
      </View>
    )
  }

    const image = background;
  const Depetus = ({navigation, route}) => {
    const Depetus = data[route.params.index];
    const titl = route.params.title;
    navigation.setOptions({title: {titl}})
    console.log((route.params.title))
    useEffect(() =>{
      navigation.setOptions({title: titl})

    },[]
    )
    
    return (
      
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
      <SafeAreaView>
        
        <FlatList
          data={Depetus}
          renderItem={({item, index}) =><FlatList
            data={item}
            renderItem={({item}) => item.type === 'li' ? <Li text={item.text}/> :  <Text style={{...getStyle(item.type), marginVertical:8, paddingHorizontal:16}}>{item.text}</Text>}
            keyExtractor={(item, index) => index}
          />
          
         }
          keyExtractor={(item, index) => index}
        />
        
      </SafeAreaView>
      </ImageBackground>
      
    )
    
  }
  
  export default Depetus;