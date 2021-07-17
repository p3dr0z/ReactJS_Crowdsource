import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/Login';
import rest from './rest'
import Register from './components/Register';
import Profile from './components/Profile';
import PlacePage from './components/PlacePage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import AddPlace from './components/AddPlace';

function App() {
  const [users, setUsers] = useState([])
  const [places, setPlaces] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await rest.getUsers()
      if (response === undefined) return
      setUsers(response.data)
    }
    const getPlaces = async () => {
      const response = await rest.getPlaces()
      if (response === undefined) return
      setPlaces(response.data)
    }
    getUsers()
    getPlaces()
  }, [])
  return (
    <Router>
      <>
        <div className="card" style={{ width: '50%', margin: '20px auto 0 auto' }}>
          <Route path='/' exact render={() => (
            <>
              <Login users={users} />
            </>
          )} />
          <Route path='/register' component={Register} />
          <Route path='/homePage/:id' render={({ match }) => (
            <>
              <NavBar match={match} />
              <HomePage places={places} match={match} />
            </>
          )} />
          <Route path='/profile/:id' render={({ match }) => (
            <>
              <NavBar match={match} />
              <Profile places={places} match={match}/>
            </>
          )} />
          <Route path='/placePage/:id' component={PlacePage} />
          <Route path='/addPlace/:id' component={AddPlace} />
        </div>
      </>
    </Router>
  );
}

export default App;
