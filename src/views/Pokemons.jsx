import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
const Pokemons = () => {

    const [identificarPokemon, setIdentificarPokemon] = useState('')  
    const [pokemonList, setPokemonList] = useState([])
    const navigate = useNavigate()

    const listnamePokemons = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0");
            const ListaPokemones = await response.json();
            setPokemonList(ListaPokemones.results)

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setIdentificarPokemon(e.target.value)
    }

    const handleClick = () => {
        navigate(`/pokemons/${identificarPokemon}`)
    }

    useEffect(() => {
        listnamePokemons()
    }, [])

    return (
        <div className='ElegirPokemones'>
        <h3>Selecciona un pokemon</h3>
        {
        <>
        <select className='select' onChange={(e) => handleChange(e)}>
            {
            pokemonList.map((nPokemon, index) => {
                return (
                <option key={index} value={nPokemon.name}>{nPokemon.name}</option>
                )
            })
            }
            </select>
            <div>
                <button className='btn' onClick={() => handleClick()}>Ver Detalle</button>
            </div>
        </>
        }
    </div>
    )
}

export default Pokemons