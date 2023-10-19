import { Image } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components/native'
const Novos = styled.Image`
    width:100px;
    height:100px;
    margin-bottom:40px;
`
export default function Novo (){
    return <Novos source={require("../componentes/icones/add.png")}/>
}