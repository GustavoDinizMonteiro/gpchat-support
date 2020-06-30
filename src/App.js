import React, { useState } from 'react'
import Axios from 'axios'
import Swal from 'sweetalert2'
import styled from 'styled-components'
import { Container, Form, Input, Button } from 'reactstrap'

const P = styled.p`
  font-size: 18px;
  text-align: justify;
  margin-top: 50px;
`

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const onChange = setter => event => setter(event.target.value)

  const submit = async() => {
    try {
      await Axios.post('', { name, email, subject, message })
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      Swal.fire('Sucesso', 
        `Sua solicitação foi enviada e em breve entraremos em 
        contato no email informado para resolver o problema`,
        'success'
      )
    } catch (err) {
      console.log(err)
    }
  }

  const disabled = !name || !email || !subject || !message
  return (
    <Container>
      <P>
        Para entrar em contato com a nossa equipe de suporte, 
        envie um email para <b>contato@gpchat.com.br</b>, 
        ou preencha as informações no formulário abaixo 
        e aguarde nossa equipe entrar em contato com você.
      </P>
      <Form>
        <Input placeholder='Nome' value={name} onChange={onChange(setName)}/>
        <Input placeholder='Email' value={email} onChange={onChange(setEmail)}/>
        <Input placeholder='Assunto' value={subject} onChange={onChange(setSubject)}/>
        <Input type='textarea' placeholder='Mensagem' value={message} onChange={onChange(setMessage)}/>
      </Form>
      <Button block disabled={disabled} color={disabled ? 'secondary': 'info'} onClick={submit}>
        Enviar
      </Button>
    </Container>
  )
}

export default App