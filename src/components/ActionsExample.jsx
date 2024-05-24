import { useState, useActionState } from 'react'
import { updateName } from '../utils/lib'
import { useFormStatus } from 'react-dom'

export function ActionsExample () {
  const [result, setResult] = useState(null)

  // const [pending, startTransition] = useTransition()
  // const [error, setError] = useState(null)
  // const [name, setName] = useState('')
  // const handleSubmit = async (e) => {
  //   e.preventDefault()

  //   startTransition(async () => {
  //     const error = await updateName(name)
  //     if (error) {
  //       setError(error)
  //       setResult(name)
  //     } else {
  //       setResult(name)
  //       setError(null)
  //     }
  //   })
  // }

  // Error pero ser otra cosa (state)
  const updateNameAction = createAction(setResult)
  const [error, submitAction, pending] = useActionState(updateNameAction)

  return (
    <form action={submitAction}>
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css' />

      <input
        name='username'
        disabled={pending}
        placeholder='Ingresar un nombre'
      />

      <Button />

      {error && <p>Error al actualizar el nombre: {error}</p>}

      {result && !error && <p>Nombre actualizado: {result}</p>}
    </form>
  )
}
// Crear una func dentro de una
const createAction = setter => async (prevState, formData) => {
  const username = formData.get('username')
  const error = await updateName(username)
  if (error) return error // Es lo que se guarda en el state
  setter(username)
  return null
}

function Button () {
  const { pending } = useFormStatus()
  return (
    <button disabled={pending} type='submit'>
      {pending ? 'Enviando...' : 'Enviar'}
    </button>
  )
}

/*
  1
  useTransition: controlar la transición de un estado a otro.
  No bloquea el renderizado de la ui y no tengo que andar seteando estados de loading.

  2
  useActionState: Simplificar trabajar con formularios y acciones.

  3
  useFormStatus: Simplificar el manejo de estados de un formulario y podes pasar el estado a un componente hijo.
*/
