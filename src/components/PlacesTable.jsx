import { Link } from "react-router-dom"

const PlacesTable = ({places, user}) => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Votes</th>
                        <th scope="col">Página</th>
                    </tr>
                </thead>
                <tbody>
                    {places.map(place => 
                    <tr key={place._id}>
                        <td>{place.name}</td>
                        <td>{place.category}</td>
                        <th scope="row">{place.usersLiked.length - place.usersDisliked.length}</th>
                        <td><Link to={{pathname: `/placePage/${user._id}`, state: {place: place, user: user}}}
                        ><button className="btn btn-light">Ver</button></Link></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default PlacesTable
