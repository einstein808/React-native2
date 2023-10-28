import React from 'react';
import {Text, FlatList} from 'react-native';
import styled from 'styled-components/native';

const DB = [
  {id: 1, valor: '22', categoria: 'Comida', data: '22/10/2023'},
  {id: 2, valor: '22', categoria: 'Comida', data: '22/10/2023'},
  {id: 3, valor: '22', categoria: 'Comida', data: '22/10/2023'},
  {id: 4, valor: '22', categoria: 'Comida', data: '22/10/2023'},
  {id: 5, valor: '22', categoria: 'Comida', data: '22/10/2023'},
  {id: 6, valor: '22', categoria: 'Comida', data: '22/10/2023'},
  {id: 7, valor: '22', categoria: 'Comida', data: '22/10/2023'},
];
const Card = styled.View`
  width: 60%;
  align-self: flex-end;
  margin-top: 10px;
  padding: 10px;
`;
const CardItem = styled.View`
  margin-top: 10px;
  background-color: gray;
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
`;
const Data = styled.Text`
  color: black;
  margin-top: 10px;
`;
const Icon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 20px;
  margin-right: 10px;
`;
const Home = () => {
  return (
    <Card>
      <FlatList
        data={DB}
        keyExtractor={item => item.id.toString()} // Define uma chave única para cada item
        renderItem={({item}) => (
          <>
            <Data>{item.data}</Data>
            <CardItem>
              <Icon source={require('../componentes/icones/fast-food.png')} />
              <Text>
                {' '}
                {item.categoria} {item.valor}
              </Text>
            </CardItem>
          </>
        )}
      />
    </Card>
  );
};

export default Home;
