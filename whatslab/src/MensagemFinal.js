import React from 'react'
import Styled from 'styled-components'
import App from './App.js';


const NomeU = Styled.div`
    display: flex;
    align-items: center; 
    height: 1vh; 
    font-family: Arial;
    margin: 10px 10px 0;
    border-radius: 0 7px 0 0;
    padding: 10px;
    width: 20vw;
    background-color: ${(props) => {
    if (props.cor === "eu") {
      return "#DBF6C5"
    } else {
      return "#F0F0F0"
    }
  }}
 `

const Mensagem = Styled.div`
    margin: 0px 10px 10px;
    width: 20vw;
    height: auto; 
    border-radius: 0 0 5px 5px;
    padding: 10px;
    background-color: ${(props) => {
    if (props.cor === "eu") {
      return "#DBF6C5"
    } else {
      return "#F0F0F0"
    }
  }}
   
`
const ContainerMensagem = Styled.div`
    width: 98%;
    display: flex;
    flex-wrap: wrap;
    word-wrap: break-word;
    flex-direction: column;
    align-items: ${(props) => {
    if (props.cor === "eu") {
      return "flex-end"
    } else {
      return "#flex-start"
    }
  }}

`

class MensagemFinal extends React.Component {
  render() {
    return (<ContainerMensagem cor={this.props.nomeUsuario}>
      <NomeU cor={this.props.nomeUsuario}>{this.props.nomeUsuario}</NomeU>
      <Mensagem cor={this.props.nomeUsuario}>{this.props.mensagemUsuario}</Mensagem>

    </ContainerMensagem>)
  }
}

export default MensagemFinal
