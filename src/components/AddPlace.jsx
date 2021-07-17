import { Link } from "react-router-dom"
import { useState } from "react"
import rest from "../rest"

const AddPlace = ({match}) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [address, setAddress] = useState('')

    const submitNewPlace = async (e) => {
        e.preventDefault()
        
        const newPlace = {
            name: name,
            category: category,
            address: address,
            user: match.params.id
        }

        const response = await rest.postPlace(newPlace)
        if (response === undefined) return alert('Invalid Data')
        setName('')
        setCategory('')
        setAddress('')
        alert(`Place ${newPlace.name} added`)
    }

    return (
        <>
            <div className="card-body">
                <h2>Adicionar Local</h2>
                <br />
                <form onSubmit={submitNewPlace}>
                    <input type="text" className="form-control" name="name" placeholder="Nome do local"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required/>
                    <br />
                    <select name="category" defaultValue={category}
                        style={{padding: '.375rem 2.25rem .375rem .75rem', width: '100%', border: '1px solid #ced4da', borderRadius:' .25rem', color: '#212529'}}
                        onChange={e => setCategory(e.target.value)}
                        required>
                        <option value="Restaurante">Restaurante</option>
                        <option value="Estádio">Estádio</option>
                        <option value="Espaço de Lazer">Espaço de Lazer</option>
                        <option value="Educação">Educação</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Outro">Outro</option>
                    </select>
                    <br />
                    <br />
                    <input type="text" className="form-control" name="address" placeholder="Morada"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    required/>
                    <br />
                    <button type="submit" className="btn btn-primary">Adicionar</button>
                    <Link to={`/profile/${match.params.id}`}>
                        <button type="button" className="btn btn-light">Voltar</button>
                        </Link>
                </form>
            </div>
        </>
    )
}

export default AddPlace
