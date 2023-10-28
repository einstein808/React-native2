/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components/native';
const Novos = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;
export default function Novo() {
  return <Novos source={require('../componentes/icones/add.png')} />;
}
