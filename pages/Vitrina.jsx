import { BackHandler, View, Text,ImageBackground, } from 'react-native';
import { WebView  } from 'react-native-webview';
import React, { useRef, useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import disconnectIcon from '../assets/disconnect.svg'
import { Image } from 'expo-image';
import background from '../assets/background.jpg';
const image = background;
const Vitrina = ({navigation, route}) => {
  const uri = route?.params?.url;
  const titl = route.params.title;
  navigation.setOptions({title: {titl}})
  useEffect(() =>{
    navigation.setOptions({title: titl})

  },[]
  )
  const webViewRef = useRef(null);
  const [isConnected, setIsConnected] = useState()

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe()
  }, [])
  
  useEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if(webViewRef.current)
          webViewRef.current.goBack();
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  const Disconnect = () => {
    return (
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1, backgroundColor:'#1DA458', justifyContent:'center', alignItems:'center', gap: 16, padding: 16}}>
      
        <Image source={disconnectIcon} style={{width:128, height: 128}} />
        <Text style={{fontSize: 24, fontWeight:'bold', color: 'black'}}>Нет интернета</Text>
        <Text style={{textAlign:'center', color:"black"}}>Для продолжения требуется соединение с интернетом</Text>
      
      </ImageBackground>
    )
  }

  return (
    isConnected ? <WebView
      ref={webViewRef}
      source={{ uri: uri}}
      domStorageEnabled
      javaScriptEnabled
      setSupportMultipleWindows={false}
    /> : <Disconnect/>
  );
}
export default Vitrina;