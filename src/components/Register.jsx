import {Link} from 'react-router-dom'
import { useState } from 'react'
import rest from '../rest'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const postUser = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) return alert('Password do not match')
        const newUser = {
            username: username,
            pass: password
        }
        if (newUser === undefined) return alert('Invalid Data')

        await rest.postUser(newUser)
        alert('Registed with success!')

        setUsername('')
        setPassword('')
        setConfirmPassword('')
    }
    return (
        <>
            <div className="card-body">
                <form onSubmit={postUser}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="pass" placeholder="Enter password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Confirmar Password</label>
                        <input type="password" className="form-control" name="confirmPass" placeholder="Confirm password" 
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required />
                    </div>
                    <button type="submit" className="btn btn-primary" id="loginBtn">Registar</button>
                    <Link to='/'><button type="button" className="btn btn-light" style={{float: 'right'}}>Login</button></Link>
                </form>
            </div>
        </>
    )
}

export default Register
