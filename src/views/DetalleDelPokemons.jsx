import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

const DetalleDelPokemons = () => {

  const { name } = useParams()
  const [datosPokemon, setDatosPokemon] = useState([])

  const getDetalleDelPokemon= async () => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const caracteristicasPokemon = await response.json();
        
        setDatosPokemon(caracteristicasPokemon)
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getDetalleDelPokemon()
}, [])  

if (Object.entries(datosPokemon).length != 0) {

  return (
    <>
    <Container className='contenedor'>
        <Card className='card' style={{ width: '30rem', height: '20rem' }}>
        <Card.Img className='cardimg' variant="top"  src={datosPokemon.sprites.other.dream_world.front_default}/>
        <div className='caracteristicas'>
        <ul>
            <Card.Title><h2>Pokemon: {name}</h2></Card.Title>
              <li className="list-group-item">{datosPokemon.stats[0].stat.name}: {datosPokemon.stats[0].base_stat}</li>
              <li className="list-group-item"> {datosPokemon.stats[1].stat.name}: {datosPokemon.stats[1].base_stat}</li>
              <li className="list-group-item">{datosPokemon.stats[2].stat.name}: {datosPokemon.stats[2].base_stat}</li>
              <li className="list-group-item"> {datosPokemon.stats[3].stat.name}: {datosPokemon.stats[3].base_stat}</li>
              <li className="list-group-item">{datosPokemon.stats[4].stat.name}: {datosPokemon.stats[4].base_stat}</li>
              <li className="list-group-item">{datosPokemon.stats[5].stat.name}: {datosPokemon.stats[5].base_stat}</li>
            <Card.Body>
              <Card.Text>
                {datosPokemon.types[0].type.name}
              </Card.Text>
            </Card.Body>
        </ul>    
        </div>
        </Card>
      </Container>
    </>
  )
}

}

export default DetalleDelPokemons