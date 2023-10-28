/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
const HedView = styled.View`
  background-color: gray;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Grafico = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 50px;
`;
const TextHeader = styled.Text`
  margin-right: 40px;
`;
export default function Header() {
  return (
    <HedView>
      <Grafico source={require('../componentes/icones/pie-chart.png')} />

      <TextHeader>Orçamento</TextHeader>
      <Grafico source={require('../componentes/icones/book.png')} />
      <TextHeader>Objetivos</TextHeader>
    </HedView>
  );
}
