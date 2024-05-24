import { useRef } from 'react'

export function FormRef () {
  const inputRefName = useRef()
  const inputRefEmail = useRef()

  const handleFocus = (value) => () => {
    if (value === 'name') {
      inputRefName.current.focus()
    } else {
      inputRefEmail.current.focus()
    }
  }

  return (
    <>
      <form className='mb-16'>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css' />
        <Input ref={inputRefName} type='text' placeholder='Nombre' />
        <Input ref={inputRefEmail} type='email' placeholder='Email' />
      </form>

      <button onClick={handleFocus('name')}>Foco en nombre</button>
      <button onClick={handleFocus('email')}>Foco en email</button>
    </>
  )
}

const Input = ({ type, placeholder, ref }) => {
  return <input type={type} placeholder={placeholder} ref={ref} />
}

/*
  1
  useRef: Hook que nos permite acceder a un elemento del DOM y mantener una referencia a él.
  Ahora tenemos ref como props al igual que children
*/
