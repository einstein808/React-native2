import React, {useState} from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const DB = [
  {
    id: 1,
    valor: '22',
    categoria: 'Comida',
    data: '22/10/2023',
    descricao: 'Almoço',
  },
  {
    id: 2,
    valor: '22',
    categoria: 'Comida',
    data: '22/10/2023',
    descricao: 'Jantar',
  },
  // Adicione descrições para outros itens
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
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>(
    {},
  );

  const toggleItem = (itemId: number) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <Card>
      <FlatList
        data={DB}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <>
            <TouchableOpacity onPress={() => toggleItem(item.id)}>
              <Data>{item.data}</Data>
              <CardItem>
                <Icon source={require('../componentes/icones/fast-food.png')} />
                <Text>
                  {item.categoria} {item.valor}
                </Text>
              </CardItem>
            </TouchableOpacity>
            {expandedItems[item.id] && (
              <View
                style={{
                  backgroundColor: 'lightgray',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text>Descrição: {item.descricao}</Text>
              </View>
            )}
          </>
        )}
      />
    </Card>
  );
};

export default Home;
