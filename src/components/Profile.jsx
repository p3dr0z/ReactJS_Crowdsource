import { useState, useEffect } from "react"
import rest from "../rest"
import { useHistory } from "react-router"

const Profile = ({places, match}) => {
    const [user, setUser] = useState({})
    const history = useHistory()

    useEffect(() => {
        const getUser = async () => {
            const response = await rest.getUserById(match.params.id)
            if (response === undefined) return history.push('/')
            setUser(response.data)
        }
        getUser()
    }, [match.params.id, history])

    const navigateToAddPlace = () => {
        history.push(`/addPlace/${user._id}`)
    }

    return (
        <>
            <div className="card" style={{padding: '5px'}}>
                <div className="d-flex align-items-center">
                    <div className="image"> 
                    <img alt="" src="https://st2.depositphotos.com/1104517/11965/v/600/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" className="rounded" width="250" />
                    </div>
                    <div className="ml-3 w-100">
                        <h4 className="mb-0 mt-0">{user.username}</h4><span>Atrasado Mental</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"> <span className="articles">Locais Criados</span> <span className="number1">38</span> </div>
                            <div className="d-flex flex-column"> <span className="followers">Seguidores</span> <span className="number2">980</span> </div>
                            <div className="d-flex flex-column"> <span className="rating">Pontuação</span> <span className="number3">8.9</span> </div>
                        </div>
                        <div className="button mt-2 d-flex flex-row align-items-center">
                        <button className="btn btn-sm btn-outline-primary w-100"
                        onClick={() => navigateToAddPlace()}
                        >Adcionar Local</button>
                        <button className="btn btn-sm btn-primary w-100 ml-2">Editar</button> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
