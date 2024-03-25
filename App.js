import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './pages/Main';
import { NavigationContainer } from '@react-navigation/native';
import Depetus from "./pages/Depetus";
import Vitrina from './pages/Vitrina';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' screenOptions={{headerStyle: {backgroundColor: "#696969"}, headerTintColor: "#E0FFFF" }}>
        <Stack.Screen name= 'Depetus' options={{title: 'Главная'}}  component={Depetus} />
       <Stack.Screen name="Com" options={{title: 'Главная'}} component={Depetus} />
        <Stack.Screen name="How" options={{title: 'Главная'}} component={Depetus} />
        <Stack.Screen name="Blog1" options={{title: 'Главная'}} component={Depetus} />
        <Stack.Screen  name="Main" options={{title: 'Главная'}} component={Main} />
        <Stack.Screen name="Searchfinance" component={Depetus} />     
        <Stack.Screen name="Vitrina" options={{title: 'Главная'}} component={Vitrina} />   
        <Stack.Screen name="Vitrina1"  options={{title: 'Главная'}} component={Vitrina} />
                
      </Stack.Navigator>
    </NavigationContainer>
  )
}
