export default function EvolutionItem({ evolutions, handleIdChange }) {
  const IMG_BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

  const getSpeciesId = (url) => {
    // Extraer id de la especie del string de la url, evitando hacer otro fetch
    const regex = /(?:\b\d+\b)/;
    const id = url.match(regex)[0]

    return id;
  }

  const changeId = (e, id) => {
    // Llamar a la función handleIdChange() de PokemonPage para cambiar su estado
    handleIdChange(id)
  }

  if(evolutions.length === 0) return
  
  return (
    <>
      <div className='overflow-hidden md:w-1/3 h-fit m-auto'>
        { evolutions.map((element, i) => {
            const elementId = element.species
              ? getSpeciesId(element.species.url)
              : null

            const elementImg = `${IMG_BASE_URL}${elementId}`

            return (
              <div key={i}>
                <img className='lg:h-36 md:h-24 lg:w-36 md:w-24 mx-auto object-cover object-center rounded-full border-4 border-neutral-900 cursor-pointer' src={`${elementImg}.svg`} alt='blog' onClick={e => changeId(e, elementId)}/>
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>N° {elementId}</h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>{element.species?.name.toUpperCase()}</h1>
                  <span className='bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded'>Plantas</span>
                </div>
              </div>
            ) 
          })
        }
      </div>
      {/* Si hay más evoluciones, renderizar el componente recursivamente pasandole el array de evoluciones (evolves_to) */}
      { evolutions.map((element, i) => {
          return (
            element.evolves_to
              ? <EvolutionItem key={i} evolutions={element.evolves_to} handleIdChange={handleIdChange}/>
              : null
          )
        })
      }
    </>
  )
}