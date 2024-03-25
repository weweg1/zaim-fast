import React, {useState} from 'react';
import { View, Text, Button,  ImageBackground,  StyleSheet, Pressable,} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import background from '../assets/background.jpg';
const image = background;
const Main = ({navigation}) => {
  const [timesPressed, setTimesPressed] = useState(0);
    return (
             <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <View style={{flex: 1 , justifyContent: 'center'}}>
            <Text style={{ borderRadius: 20,padding: 10,marginVertical: 25 ,fontSize: 25,textAlign: 'center',color: '#696969'}}>Открыть ИП или ООО</Text>                     
        <Pressable
        onPress={() => {
          navigation.navigate('Depetus', {index: 0, title: 'Как открыть ИП?'})
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#C0C0C0' : '#A9A9A9',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Как открыть ИП?' : 'Как открыть ИП?'}</Text>
        )}
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('Com', {index: 1, title: 'Кто может зарегистрироваться в качестве ИП?'})
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#C0C0C0' : '#A9A9A9',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Кто может зарегистрироваться в качестве ИП?' : 'Кто может зарегистрироваться в качестве ИП?'}</Text>
        )}
      </Pressable>

      <Pressable 
        onPress={() => {
          navigation.navigate('Depetus', {index: 2, title: 'Пошаговая инструкция для регистрации ИП'})
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#C0C0C0' : '#A9A9A9',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Пошаговая инструкция для регистрации ИП' : 'Пошаговая инструкция для регистрации ИП'}</Text>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Depetus', {index: 3, title: 'Когда будут готовы документы?'})
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#C0C0C0' : '#A9A9A9',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Когда будут готовы документы?' : 'Когда будут готовы документы?'}</Text>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Depetus', {index: 4, title: 'Возможные причины отказа в регистрации ИП'})
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#C0C0C0' : '#A9A9A9',
          },
          styles.wrapperCustom,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Возможные причины отказа в регистрации ИП' : 'Возможные причины отказа в регистрации ИП'}</Text>
        )}
      </Pressable>
      
</View>
<View style={{flexDirection: 'row',}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Vitrina', {url: 'https://pxl.leads.su/click/3ed43b193294fd633a87033d052e478f?aff_sub1=biz1&erid=LjN8KauNE',title: 'Открыть ООО'})
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#A9A9A9' : '#696969',
          },
          styles.wrapperCustom1,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Открыть OOO' : 'Открыть OOO'}</Text>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate('Vitrina', {url: 'https://pxl.leads.su/click/c78da573465bce0464051a625da7fdb8?aff_sub1=biz1&erid=LjN8KANJJ',title: 'Открыть ИП'})
          setTimesPressed(current => current + 1);
        }}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#A9A9A9' : '#696969',
          },
          styles.wrapperCustom1,
        ]}>
        {({pressed}) => (
          <Text style={styles.text}>{pressed ? 'Открыть ИП' : 'Открыть ИП'}</Text>
        )}
        
      </Pressable>
      </View>
            </ImageBackground>
                                 

    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16, },

    text: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#DCDCDC',},

      wrapperCustom: {
        borderRadius: 35,
        padding: 20,
        marginVertical: 6,},

      wrapperCustom1: {
        alignSelf: 'center',
        borderRadius: 15,
        padding: 15,
        marginVertical: 15,
        marginRight: 55,
        marginLeft: 5,
        paddingHorizontal: 15,
      },

      image: {
        padding: 15,
        flex: 1,
        justifyContent: 'center',}, 
    
  });

export default Main;
