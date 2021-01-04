import React from 'react'
import Styled from 'styled-components'
import App from './App.js';


const NomeU = Styled.div`
    height: 0.5vh; 
    margin: 10px 10px 0;
    border-radius: 0 7px 0 0;
    padding: 10px;
    width: 20vw;
    background-color: ${(props) => {
    if (props.cor === "eu") {
      return "#DBF6C5"
    } else {
      return "#9f9f9f"
    }
  }}

    `

const Mensagem = Styled.div`
    margin: 0 10px 10px;
    width: 20vw;
    height: auto; 
    border-radius: 0 0 5px 5px;
    padding: 10px;
    background-color: ${(props) => {
      if (props.cor === "eu") {
        return "#DBF6C5"
      } else {
        return "#9F9F9F"
      }
    }}
   
`
const ContainerMensagem = Styled.div`
width: 100vw;
background-color: #000;
display: flex;
flex-direction: column;
justify-content: ${(props) => {
  if (props.cor === "eu") {
    return "center"
  } else {
    return "flex-end"
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

/*
  onClick={() => this.removerMensagem(mensagem.nomeUsuario)}> */

/* const ContainerTitulo = styled.div`
display: flex;
height: ${(props) => {
  if (props.tamanho === "grande") {
    return "300px";
  } else {
    return "200px";
  }
}};
background-color: ${(props) => props.cor};
align-items: center;
justify-content: center;
width: 300px;
margin-bottom: 30px;
`; */


/* 
import React from 'react'
import Styled from 'styled-components'
import App from './App.js';


const NomeU = Styled.div`
    height: 0.5vh; 
    margin: 10px 10px 0;
    border-radius: 0 7px 0 0;
    padding: 10px;
    width: 20vw;
    background-color: ${(props) => {
    if (props.cor === "eu") {
      return "#DBF6C5"
    } else {
      return "#9f9f9f"
    }
  }}

    `

const Mensagem = Styled.div`
    margin: 0 10px 10px;
    width: 20vw;
    height: auto; 
    border-radius: 0 0 5px 5px;
    padding: 10px;
    background-color: ${(props) => {
      if (props.cor === "eu") {
        return "#DBF6C5"
      } else {
        return "#9F9F9F"
      }
    }}
   
`
const ContainerMensagem = Styled.div`
width: 100vw;
background-color: #000;
display: flex;
flex-direction: column;
justify-content: ${(props) => {
  if(props.cor === "eu") {
    return "center"
  } else {
    return "flex-end"
  }
}}

`

 */

/* 
class MensagemFinal extends React.Component {
  render() {
    return (<ContainerMensagem cor={this.props.nomeUsuario}>
      <NomeU cor={this.props.nomeUsuario}>{this.props.nomeUsuario}</NomeU>
      <Mensagem cor={this.props.nomeUsuario}>{this.props.mensagemUsuario}</Mensagem>

    </ContainerMensagem>)
  }
}

export default MensagemFinal
 */
