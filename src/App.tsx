/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Animated, Easing, Image} from 'react-native';
import styled from 'styled-components/native';
import Header from './componentes/Header';
import Home from './Home/Home';
import Plus from './Home/Plus';
import Novo from './componentes/Novo';
import Config from './Home/Config';
import * as Animatable from 'react-native-animatable';
const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const fadeAnim = new Animated.Value(0);
  const AnimatedText = Animatable.Text;
  useEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500, // Ajuste a duração conforme necessário
      easing: Easing.linear,
      useNativeDriver: true,
    });

    fadeIn.start(() => {
      setIsLoading(false);
    });
  }, []);

  const ImageHome = styled.Image`
    width: 40px;
    height: 40px;
  `;
  const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
  `;
  const Tab = createBottomTabNavigator();
  return (
    <>
      {isLoading ? (
        <Container>
          <Animated.View style={{opacity: fadeAnim}}>
            <Image
              source={require('./componentes/icones/book.png')}
              style={{width: 200, height: 200}}
            />
          </Animated.View>
          <AnimatedText
            animation="fadeInRight"
            duration={700}
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: 'blue',
              marginTop: 20,
            }}>
            O dinheiro é um bom criado, mas um mau senhor.{'\n'} - Francis Bacon
          </AnimatedText>
        </Container>
      ) : (
        <>
          <Header />

          <View style={{flex: 1, backgroundColor: 'whitesmoke'}}>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={{
                  tabBarActiveTintColor: 'yellow',
                  tabBarInactiveTintColor: 'gray',
                  tabBarStyle: {
                    backgroundColor: '#b6bbf3',
                    width: '80%', // Define a largura como 80% da tela
                    marginLeft: '10%',
                    borderTopLeftRadius: 20, // Define a borda arredondada no canto superior esquerdo
                    borderTopRightRadius: 20, // Define a borda arredondada no canto superior direito
                    paddingBottom: 10,
                    borderTopColor: 'transparent',
                    marginBottom: 20,
                    height: 70,
                    borderBottomLeftRadius: 20, // Define a borda arredondada na parte inferior esquerda
                    borderBottomRightRadius: 20,
                  },
                }}>
                <Tab.Screen
                  name="Home"
                  component={Home}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({}) => (
                      <ImageHome
                        source={require('./componentes/icones/home2.png')}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Novo"
                  component={Plus}
                  options={{headerShown: false, tabBarIcon: ({}) => <Novo />}}
                />
                <Tab.Screen
                  name="Settings"
                  component={Config}
                  options={{
                    headerShown: false,
                    tabBarIcon: ({}) => (
                      <ImageHome
                        source={require('./componentes/icones/menu.png')}
                      />
                    ),
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </View>
        </>
      )}
    </>
  );
};

export default SplashScreen;
