import { useState } from 'react'
import Pokemon from './Pokemon'
import Pagination from './Pagination'
import Evolution from './Evolution'
import usePokemon from "../hooks/usePokemon"

export default function PokemonPage() {
  const [ idPokemon, setIdPokemon ] = useState(280);
  const [ pokemon ] = usePokemon(idPokemon)

  const handleIdChange = (newId) => {
    setIdPokemon(parseInt(newId));
  }

  if (pokemon === null) return <div>Loading..</div>

  return (
    <section className='flex flex-col justify-center items-center container mx-auto'>
      <Pagination handleIdChange={handleIdChange} idPokemon={idPokemon}></Pagination>
      <Pokemon pokemon={pokemon} />
      <Evolution handleIdChange={handleIdChange} evolutionChainUrl={pokemon.evolutionChainUrl} ></Evolution>
    </section>
  )
}
