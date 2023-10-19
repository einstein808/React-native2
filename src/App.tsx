import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import Novo from './componentes/Novo';
import Adicionar from './Home/Adicionar';
import Header from './componentes/Header';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  tabBarActiveTintColor: 'white', // Define a cor do ícone ativo como branca
  tabBarInactiveTintColor: 'gray', // Define a cor do ícone inativo como cinza
  tabBarLabelStyle: {
    marginTop: 5,// Adjust the font size here
    fontSize: 18,
  },
  tabBarStyle: {
    backgroundColor: 'black', 
    width: '80%', // Define a largura como 80% da tela
    marginLeft: '10%',
    borderTopLeftRadius: 20, // Define a borda arredondada no canto superior esquerdo
    borderTopRightRadius: 20, // Define a borda arredondada no canto superior direito
    paddingBottom: 10,
    borderTopColor:'transparent',
    marginBottom:20,
    height:70,
    borderBottomLeftRadius: 20, // Define a borda arredondada na parte inferior esquerda
    borderBottomRightRadius: 20,
  }
};
export default function App() {
  return (<>
    <Header/>
    
    <View style={{ flex: 1, backgroundColor: 'whitesmoke'}}>
      

    <NavigationContainer>
      <Tab.Navigator  screenOptions={{
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black', 
             width: '80%', // Define a largura como 80% da tela
              marginLeft: '10%',
              borderTopLeftRadius: 20, // Define a borda arredondada no canto superior esquerdo
              borderTopRightRadius: 20, // Define a borda arredondada no canto superior direito
              paddingBottom: 10,
              borderTopColor:'transparent',
              marginBottom:20,
              height:70,
              borderBottomLeftRadius: 20, // Define a borda arredondada na parte inferior esquerda
              borderBottomRightRadius: 20,
              
          },
        }}>
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Tab.Screen name="Novo" component={Adicionar} options={{headerShown:false,tabBarIcon: ({ }) => (
                <Novo/>
              )}} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    </View>
    </>
  );
  
}
