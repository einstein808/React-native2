/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components/native';

export default function Config() {
  return (
    <>
      <Perfil>
        <ImaPerfil source={require('../componentes/icones/profile.png')} />
        <Texto>Seu Perfil </Texto>
      </Perfil>
      <Perfil>
        <ImaPerfil source={require('../componentes/icones/google-drive.png')} />
        <Texto>Sincronize </Texto>
      </Perfil>
      <Perfil>
        <ImaPerfil source={require('../componentes/icones/gear.png')} />
        <Texto>Configuração</Texto>
      </Perfil>
      <Perfil>
        <ImaPerfil source={require('../componentes/icones/palette.png')} />
        <Texto>Tema</Texto>
      </Perfil>
    </>
  );
}
const Perfil = styled.View`
  background-color: gray;
  border-radius: 20px;
  height: 13%;
  margin-top: 20px;
  width: 80%;
  align-self: flex-end;
  padding-top: 15px;
  flex-direction: row;
  margin-right: 10px;
`;
const Texto = styled.Text`
  font-size: 30px;
  margin-left: 20px;
  margin-top: 5px;
`;
const ImaPerfil = styled.Image`
  width: 60px;
  height: 60px;
  margin-left: 20px;
`;
