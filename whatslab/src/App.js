import React from 'react';
import Styled from 'styled-components'
import MensagemFinal from './MensagemFinal.js';


const ContainerMensagens = Styled.div`
background-color: #9F9F9F;
display: flex;
flex-direction: column-reverse;
justify-content: flex-start;
height: 100vh;
width: 80vw;
border: solid #333 1px;

`


class App extends React.Component {

  state = {

       mensagens: [ 

       { 
         nomeUsuario: '',
         mensagemUsuario: ''
       }

      ],
      valorInputNomeUsuario: '',
      valorInputMensagemUsuario: ''
    };
      
      adicionaMensagem = () => {
        const novaMensagem = {
          nomeUsuario: this.state.valorInputNomeUsuario,
          mensagemUsuario: this.state.valorInputMensagemUsuario

  };
if(this.state.valorInputNomeUsuario !== '' && this.state.valorInputMensagemUsuario !== ''){
  const mensagensAtualizadas = [...this.state.mensagens, novaMensagem];

  this.setState({ mensagens: mensagensAtualizadas });
  this.state.valorInputNomeUsuario = ''
  this.state.valorInputMensagemUsuario = ''
} else {
  alert('Preencha seu nome e mensagem desejada')
}
      }

    adicionaMensagemEnter = (e) => {
        if(e.key === "Enter") {
          this.adicionaMensagem()
      }
    }
/* REMOVER MENSAGEM */
    removerMensagem = (nome) => {
      console.log("Removendo mensagem")

      const mensagensAtuais = this.state.mensagens
      if(window.confirm("Tem certeza que quer apagar essa mensagem") === true){
      const novaLista = mensagensAtuais.filter((mensagem) => {
        return mensagem.nomeUsuario !== nome; 

    })
    this.setState({ mensagens: novaLista });
  }
  }
  

/* FIM REMOVER MENSAGEM */



  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };
  
  onChangeInputMensagemUsuario = (event) => {
    this.setState({ valorInputMensagemUsuario: event.target.value });
  };
  
  

  
  render() {
    const listaDeMensagens = this.state.mensagens.map((mensagem) => {
    
      return (
        <div onDoubleClick={() => this.removerMensagem(mensagem.nomeUsuario)}>
        <MensagemFinal
        nomeUsuario = {mensagem.nomeUsuario}
        mensagemUsuario = {mensagem.mensagemUsuario}
        />
        </div>

      );
    });

    return (
      <ContainerMensagens cor={this.props.nomeUsuario}>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
            onKeyDown={this.adicionaMensagemEnter}

          />
          <input
          value={this.state.valorInputMensagemUsuario}
          onChange={this.onChangeInputMensagemUsuario}
            placeholder={"Mensagem"}
            onKeyDown={this.adicionaMensagemEnter}
            />
            



            <button onClick={this.adicionaMensagem}>Enviar</button>
            </div>
            <div className={'container-mensagens'}>{listaDeMensagens}</div>
            </ContainerMensagens>
            );
          }
          
        }
        
        
      

export default App;


