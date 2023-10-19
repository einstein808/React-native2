import styled from "styled-components/native";

const Card = styled.View`
    background-color:gray;
    width:70%;
    display:flex;
    align-self:center;
    align-items:center;
    height:50%;
    justify-content:center;
    margin-top:100px
    
`;
export default function Plus (){
    return(
        <>
        <Card>
        <Valor placeholder="digite Valor"></Valor>
        <Valor placeholder="digite data"></Valor>
        </Card>
        </>
    )
};

const Valor = styled.TextInput`
background-color: #2c73ad;
width: 80%;
border-radius:40px;
align-self:center;
text-align:center;
align-items:center;
margin-top:30px;
font-weight:bold;

`;
