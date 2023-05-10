import { useState } from 'react'
import Pokemon from './Pokemon'
import Pagination from './Pagination'
import Evolution from './Evolution'

export default function PokemonPage() {
  const [ idPokemon, setIdPokemon ] = useState(280)

  const handleIdChange = (newId) => {
    setIdPokemon(newId);
  }

  return (
    <section className='flex flex-col justify-center items-center container mx-auto'>
      <Pagination handleIdChange={handleIdChange} idPokemon={idPokemon}></Pagination>
      <Pokemon idPokemon={idPokemon}/>
      <Evolution handleIdChange={handleIdChange}></Evolution>
    </section>
  )
}
