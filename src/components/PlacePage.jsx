import { useState, useEffect } from "react"
import rest from "../rest"
import { Link } from "react-router-dom"

const PlacePage = (props) => {
    const state = props.location.state
    const [placeUser, setPlaceUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            const response = await rest.getUserById(state.place.user)
            if (response === undefined) return
            setPlaceUser(response.data)
        }
        getUser()
    }, [state.place.user, state.place.usersLiked])

    const patchPlace = async (array) => {
        switch (array) {
            case state.place.usersLiked:
                if (array.includes(state.user._id)) return
                array.push(state.user._id)
                const placeLiked = { usersLiked: array }
                await rest.patchPlace(state.place._id, placeLiked)
                break
            case state.place.usersDisliked:
                if (array.includes(state.user._id)) return
                array.push(state.user._id)
                console.log(array)
                const placeDisliked = { usersDisliked: array }
                await rest.patchPlace(state.place._id, placeDisliked)
                break
            default:
                return
        }
    }

    return (
        <>
            <div className="card">
                <img alt="" src="https://cdn2.iconfinder.com/data/icons/babysitting-services-innovicons-color/128/area-map-pointer-location-512.png" width="500" height="350" style={{ margin: '0 auto 0 auto' }} />
            </div>
            <br />
            <div className="card" style={{ textAlign: 'center' }}>
                <h1>{state.place.name}</h1>
                <br />
                <h3><b>Categoria: {state.place.category}</b></h3>
                <br />
                <h3><b>Morada: {state.place.address}</b></h3>
            </div>
            <br />
            <br />
            <div>
                <p style={{ position: 'absolute', bottom: '5px' }}><button className="btn btn-danger" style={{ width: '50px' }}
                    onClick={() => patchPlace(state.place.usersDisliked)}
                >
                </button>{state.place.usersDisliked.length}
                </p>
                <p style={{ position: 'absolute', bottom: '5px', left: '100px' }}>{state.place.usersLiked.length}
                    <button className="btn btn-success" style={{ width: '50px' }}
                        onClick={() => patchPlace(state.place.usersLiked)}
                    ></button>
                </p>
            </div>
            <p style={{ margin: '0 auto 0 auto' }}>Criado por: {placeUser.username}</p>
            <Link to={`/homepage/${state.user._id}`}><button className="btn btn-light" style={{ width: '100px', position: 'absolute', right: '15px', bottom: '5px' }}
            >Voltar</button></Link>
        </>
    )
}

export default PlacePage
