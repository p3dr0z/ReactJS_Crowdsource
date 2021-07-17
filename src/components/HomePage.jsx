import { useState, useEffect } from 'react'
import rest from '../rest'
import PlacesTable from './PlacesTable'
import { useHistory } from 'react-router'

const HomePage = ({places, match}) => {
    const [category, setCategory] = useState('')
    const [name, setName] = useState('')
    const [showTable, setShowTable] = useState(false)
    const [placesByName, setPlacesByName] = useState([])
    const [placesByCategory, setPlacesByCategory] = useState([])
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

    const renderTableName = () => {
        setPlacesByCategory([])
        setPlacesByName(places.filter(place => place.name.toUpperCase() === name.toUpperCase()))
        setShowTable(true)
    }

    const renderTableCategory = () => {
        setPlacesByName([])
        setPlacesByCategory(places.filter(place => place.category === category))
        setShowTable(true)
    }

    return (
        <>
        <div className="card-body" style={{textAlign: 'center'}}>
        <h4>Pesquise pelo nome de um local...</h4>
        <br/>
        <div className="input-group mb-3">
            <input type="text" className="form-control" id="searchInput" placeholder="Pesquise por um local..."
            onChange={e => setName(e.target.value)}/>
            <div className="input-group-append">
             <button type="button" className="btn btn-light" style={{borderColor: '#ced4da'}}
             onClick={renderTableName}>Pesquisar</button>
            </div>
          </div>
        <h4>...ou por uma categoria</h4>
        <br/>
        <div className="row" style={{justifyContent: 'center', textAlign: 'left'}}>
            <div className="form-check" style={{marginLeft: '20px'}}>
                <div>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="Restaurante"
                    onChange={e => setCategory(e.target.value)}/>Restaurante
                </div>
                <div>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="Shopping"
                    onChange={e => setCategory(e.target.value)}/>Shopping
                </div>
            </div>
            <div className="form-check" style={{marginLeft: '20px'}}>
                <div>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="Espaço de Lazer"
                    onChange={e => setCategory(e.target.value)}/>Espaço de Lazer
                </div>
                <div>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="Estádio"
                    onChange={e => setCategory(e.target.value)}/>Estádio
                </div>
            </div>
            <div className="form-check" style={{marginLeft: '20px'}}>
                <div>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="Educação"
                    onChange={e => setCategory(e.target.value)}/>Educação
                </div>
                <div>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" value="Outro"
                    onChange={e => setCategory(e.target.value)}/>Outro
                </div>
         </div>
        </div>
        <br/>
        <button type="button" className="btn btn-light" style={{borderColor: '#ced4da'}} onClick={renderTableCategory}>Procura por categoria</button>
        <br/>
        <br/>
        {showTable ? <PlacesTable places={[...placesByName, ...placesByCategory]} user={user}/> : null}
        </div>
        </>
    )
}

export default HomePage
