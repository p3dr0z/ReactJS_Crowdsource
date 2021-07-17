import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

const Login = ({users}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const authenticateUser = (e) => {
        e.preventDefault()
        for (const user of users) {
            if (username === user.username && password === user.pass) {
                return history.push(`homePage/${user._id}`)
            }//go to page
        }
        alert('Invalida Data')
    }
    return (
        <>
            <div className="card-body">
                <form onSubmit={authenticateUser}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" name="username" placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to='/register'><button type="button" className="btn btn-light" style={{float: 'right'}}>Registo</button></Link>
                </form>
            </div>

        </>
    )
}

export default Login
