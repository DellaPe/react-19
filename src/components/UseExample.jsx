import { Suspense, use, useState } from 'react'

export function UseExample () {
  const [name, setName] = useState('')

  const fechPokemon = () => {
    if (!name) return Promise.resolve()

    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        if (res.ok) return res.json()
        return { error: true, message: 'No se encontró el Pokémon' }
      })
      .then((data) => {
        return data
      })
  }

  return (
    <>
      <form>
        <input
          placeholder='Ingresar un Pokémon'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <Suspense fallback={<p>Buscando Pokémon...</p>}>
        <ShowPokemon pokemonPromise={fechPokemon()} />
      </Suspense>
    </>
  )
}

const ShowPokemon = ({ pokemonPromise }) => {
  const pokemon = use(pokemonPromise)

  if (pokemon?.error) {
    return <p>{pokemon.message}</p>
  }

  if (!pokemon) {
    return null
  }

  return (
    <div>
      Resultado:
      <article>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon?.name} />
        <p>Peso: {pokemon.weight}kg</p>
      </article>
    </div>
  )
}

/*
  1
  use: NO ES UN HOOK, ES UNA API!!!

  2
  Vamos a poder trabajar de forma mas declarativa con las promesas, ya que use nos permite

  3
  Necesitamos envolver al componente que usa use con Suspense
*/
