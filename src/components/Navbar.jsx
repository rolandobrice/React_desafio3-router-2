import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
        <img src="src/assets/imagen/iconopokebola.png" alt="" />
            <div>
                <NavLink className={({isActive}) => isActive ? 'activa' : ''} to="/">Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'activa' : ''} to="/pokemons">Pokemones</NavLink>
            </div>
        </nav>
    )
}

export default Navbar  