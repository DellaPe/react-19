import reactLogo from './assets/react.svg'
import './App.css'
import { version } from 'react'
import { Seo } from './components/Seo'
import { FormMethods } from './components/FormMethods'
import { preload } from 'react-dom'
import { FormRef } from './components/FormRef'
import { UseExample } from './components/UseExample'
import { UseContextExample } from './components/UseContextExample'
import { ActionsExample } from './components/ActionsExample'
import { UseOptimisticExample } from './components/UseOptimisticExample'
import { SHOW_ACTIONS, useShowExample } from './hook/useShowExample'

function App () {
  const { isNull, show, handleShow } = useShowExample()

  const { SHOW_FROM_METHODS, SHOW_FROM_REF, SHOW_USE_ACTIONS_EXAMPLE, SHOW_USE_CONTEXT_EXAMPLE, SHOW_USE_EXAMPLE, SHOW_USE_OPTIMISTIC_EXAMPLE } = SHOW_ACTIONS

  preload('https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css', { as: 'style', priority: 'low' })

  return (
    <>
      <Seo title={`Hola, React ${version}!`} description='Repaso de las nuevas actualizaciones' />

      <header className='mb-16'>
        <div>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </div>
        <h1>
          Vite + React (@next)
        </h1>
        <small>
          Repaso de las nuevas cositas de React <code>{version}</code>
        </small>
      </header>

      {(isNull || show.SHOW_FROM_METHODS) &&
        <>
          <button onClick={() => handleShow(SHOW_FROM_METHODS)} className='mb-16 block'>
            {show.SHOW_FROM_METHODS ? 'Ocultar formulario de métodos' : 'Mostrar formulario de métodos'}
          </button>
          {show.SHOW_FROM_METHODS && <FormMethods />}
        </>}

      {(isNull || show.SHOW_FROM_REF) &&
        <>
          <button onClick={() => handleShow(SHOW_FROM_REF)} className='mb-16 block'>
            {show.SHOW_FROM_REF ? 'Ocultar formulario de referencias' : 'Mostrar formulario de referencias'}
          </button>
          {show.SHOW_FROM_REF && <FormRef />}
        </>}

      {(isNull || show.SHOW_USE_EXAMPLE) &&
        <>
          <button onClick={() => handleShow(SHOW_USE_EXAMPLE)} className='mb-16 block'>
            {show.SHOW_USE_EXAMPLE ? 'Ocultar ejemplo de use' : 'Mostrar ejemplo de use'}
          </button>
          {show.SHOW_USE_EXAMPLE && <UseExample />}
        </>}

      {(isNull || show.SHOW_USE_CONTEXT_EXAMPLE) &&
        <>
          <button onClick={() => handleShow(SHOW_USE_CONTEXT_EXAMPLE)} className='mb-16 block'>
            {show.SHOW_USE_CONTEXT_EXAMPLE ? 'Ocultar ejemplo de useContext' : 'Mostrar ejemplo de useContext'}
          </button>
          {show.SHOW_USE_CONTEXT_EXAMPLE && <UseContextExample />}
        </>}

      {(isNull || show.SHOW_USE_ACTIONS_EXAMPLE) &&
        <>
          <button onClick={() => handleShow(SHOW_USE_ACTIONS_EXAMPLE)} className='mb-16 block'>
            {show.SHOW_USE_ACTIONS_EXAMPLE ? 'Ocultar ejemplo de useActions' : 'Mostrar ejemplo de useActions'}
          </button>
          {show.SHOW_USE_ACTIONS_EXAMPLE && <ActionsExample />}
        </>}

      {(isNull || show.SHOW_USE_OPTIMISTIC_EXAMPLE) &&
        <>
          <button onClick={() => handleShow(SHOW_USE_OPTIMISTIC_EXAMPLE)} className='mb-16 block'>
            {show.SHOW_USE_OPTIMISTIC_EXAMPLE ? 'Ocultar ejemplo de useOptimistic' : 'Mostrar ejemplo de useOptimistic'}
          </button>
          {show.SHOW_USE_OPTIMISTIC_EXAMPLE && <UseOptimisticExample />}
        </>}
    </>
  )
}
export default App
