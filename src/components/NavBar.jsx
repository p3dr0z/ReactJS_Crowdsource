import { Link } from "react-router-dom"

const NavBar = ({match}) => {
    const id = match.params.id

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Link to={`/homePage/${id}`}><button type="button" className="btn btn-light">Inicio</button></Link>
                <Link to={`/profile/${id}`}><button type="button" className="btn btn-light">Perfil</button></Link>
                <Link to='/'><button type="button" className="btn btn-light">Logout</button></Link>
            </nav>
        </>
    )
}

export default NavBar
