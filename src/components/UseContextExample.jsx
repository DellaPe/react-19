import { use } from 'react'
import { UserContext } from '../context/use'

export function UseContextExample ({ enabled = true }) {
  if (!enabled) return null

  const { name, isLogged, updateUser } = use(UserContext)

  return (
    <>
      {
      isLogged
        ? (
          <>
            <h1>Hola {name}</h1>
            <button onClick={() => updateUser(null, false)}>Cerrar sesión</button>
          </>
          )
        : (
          <>
            <h1>Bienvenido</h1>
            <button onClick={() => updateUser('Jhon', true)}>Iniciar sesión</button>
          </>
          )
    }
    </>
  )
}

/*
  1
  Tambien el user nos pertmite usar un context

  2
  Tambien podemos usarlo de forma condicional que useContext nop (siempre tiene que estar definido antes de un condicional)

*/
