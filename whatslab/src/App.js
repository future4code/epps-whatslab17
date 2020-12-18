import React from 'react';
import MensagemFinal from './MensagemFinal.js';


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

  const mensagensAtualizadas = [...this.state.mensagens, novaMensagem];

  this.setState({ mensagens: mensagensAtualizadas });
  this.state.valorInputNomeUsuario = ''
  this.state.valorInputMensagemUsuario = ''
      }


  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };
  
  onChangeInputMensagemUsuario = (event) => {
    this.setState({ valorInputMensagemUsuario: event.target.value });
  };
  
  
  render() {
    const listaDeMensagens = this.state.mensagens.map((mensagem) => {
      return (
        <MensagemFinal
        nomeUsuario = {mensagem.nomeUsuario}
        mensagemUsuario = {mensagem.mensagemUsuario}
       />
      );
    });

    return (
      <div>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
          />
          <input
          value={this.state.valorInputMensagemUsuario}
          onChange={this.onChangeInputMensagemUsuario}
            placeholder={"Mensagem"}
            />
            
            
            <button onClick={this.adicionaMensagem}>Enviar</button>
            </div>
            <div className={'container-mensagens'}>{listaDeMensagens}</div>
            </div>
            );
          }
          
        }
        
        
      

export default App;