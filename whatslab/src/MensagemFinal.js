import React from 'react'

import Styled from 'styled-components'

const NomeU = Styled.span`
    border: 1px solid #333;
    width: 10vw;
`
const Mensagem = Styled.span`
    border: 1px solid #333;
    width: 70vw;
`

class MensagemFinal extends React.Component {
    render() {
  return ( <div className={'MensagemFinal-container'}>
        <NomeU>{this.props.nomeUsuario}</NomeU>
        <Mensagem>{this.props.mensagemUsuario}</Mensagem>
        
      </div> )
    }
  }
  
  export default MensagemFinal