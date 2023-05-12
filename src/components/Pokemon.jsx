export default function pokeInfo({ pokemon }) {

  if (pokemon === null) return <div>Loading..</div>

  return (
    <section className="text-black body-font overflow-hidden">
      <div className="container shadow-2xl px-5 py-24 mx-auto border-solid border-2 border-dark rounded">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
            src={pokemon.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">N.º {pokemon.id}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{pokemon.name}</h1>
            <div className="flex mb-4"></div>
            <p className="leading-relaxed">{pokemon.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="grid grid-cols-1">
                <span className="text-xl title-font font-medium text-black">Altura</span>
                <span>{pokemon.height} metro/s</span>
              </div>
              <div className="grid grid-cols-1">
                <span className="text-xl title-font font-medium text-black">Peso</span>
                <span>{pokemon.weight} kilos</span>
              </div>
              <div className="grid grid-cols-1">
                <span className="text-xl title-font font-medium text-black">Tipo</span>
                <span>{pokemon.tipo}</span>
              </div>
              <div className="grid grid-cols-1">
                <span className="text-xl title-font font-medium text-black">Categoría</span>
                <span>{pokemon.category}</span>
              </div>
            </div>
            <div className="flex bg-black p-8 rounded-lg mt-8 text-center justify-center">
              <ul className="grid grid-flow-col-dense gap-8">
                <li className="grid gap-2">
                  <span className="text-xl title-font font-medium text-white">Habilidad</span>
                  {pokemon.abilities.map((habilidad, i) => {
                    return (
                      <span key={i} className="bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded">
                        {habilidad}
                      </span>
                    )
                  })}
                </li>
                {/* <li className="grid gap-2">
                  <span className="text-xl title-font font-medium text-white">Debilidad</span>
                  <span className="bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded">Plantas</span>
                  <span className="bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded">Electricidad</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
