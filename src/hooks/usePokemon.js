import { useEffect, useState } from "react"

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/"

const usePokemon = (idPokemon) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetch(API_BASE_URL.concat(idPokemon))
      .then((response) => response.json())
      .then((pokemonInfo) => {
        // Obtener el tipo del Pokémon
        const img = pokemonInfo.sprites.other.dream_world.front_default
        const tipo = pokemonInfo.types.map((typeInfo) => typeInfo.type.name).join(", ")
        const abilities = pokemonInfo.abilities.map((ability) => ability.ability.name)
        const { weight, height, name } = pokemonInfo
        setPokemon({ tipo, weight, height, name, abilities, img })

        // Obtener la categoría del Pokémon
        const speciesUrl = pokemonInfo.species.url
        return fetch(speciesUrl)
      })
      .then((response) => response.json())
      .then((speciesInfo) => {
        for (const flavorTextEntry of speciesInfo.flavor_text_entries) {
          if (flavorTextEntry.language.name === "es") {
            const category = speciesInfo.genera.find((genera) => genera.language.name === "es").genus
            const description = flavorTextEntry.flavor_text
            setPokemon((pokemonExistente) => ({ ...pokemonExistente, category, description }))
            break
          }
        }
      })
      .catch((error) => console.log("Error al obtener la información del Pokémon:", error))
  }, [idPokemon])

  return [pokemon]
}

export default usePokemon
