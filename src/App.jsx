import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './views/Home'
import Pokemons from './views/Pokemons'
import DetalleDelPokemons from './views/DetalleDelPokemons'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path='/pokemons/:name' element={<DetalleDelPokemons/>}/>
      </Routes>
    </div>
  )
}

export default App 