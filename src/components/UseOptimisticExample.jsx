import { useRef, useState, useOptimistic } from 'react'

async function deliverMessage (message) {
  // eslint-disable-next-line promise/param-names
  await new Promise((res, rej) => setTimeout(res, 1000)) // Usar rej para simular un error
  return message
}

export function UseOptimisticExample () {
  const formRef = useRef()

  const [messages, setMessages] = useState([
    {
      text: 'Hola mundo!',
      sending: false,
      key: 1
    }
  ])

  const [optimisticMessages, addOptimisticMessages] = useOptimistic(messages, (state, newState) => [
    ...state,
    {
      text: newState,
      sending: true,
      key: state.length + 1
    }
  ])

  const formAction = async (formData) => {
    formRef.current.reset()
    const message = formData.get('message')
    addOptimisticMessages(message)
    try {
      const sentMessage = await deliverMessage(message)
      setMessages([
        ...messages,
        {
          text: sentMessage,
          sending: false,
          key: messages.length + 1
        }
      ])
    } catch (error) {
      setMessages(messages)
    }
  }

  return (
    <>
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css' />
      {optimisticMessages.map((msg) => (
        <div key={msg.key}>
          {msg.text}
          {!!msg.sending && <code>(Enviando mensaje {msg.key}...)</code>}
        </div>
      ))}

      <form action={formAction} ref={formRef}>
        <input name='message' placeholder='Escribe un mensaje' />
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

/*
  1
  useOptimisti: cramos un especie de estado
  No vamos a esperar el stado, lo actualizamos y si salio mal hace un rollback
*/
