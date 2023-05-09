import Pokemon from './Pokemon'
import Pagination from './Pagination'
import Evolution from './Evolution'

export default function PokemonPage() {
  return (
    <section className='flex flex-col justify-center items-center container mx-auto'>
      <Pagination></Pagination>
      <Pokemon idPokemon={280}/>
      <Evolution></Evolution>
    </section>
  )
}
