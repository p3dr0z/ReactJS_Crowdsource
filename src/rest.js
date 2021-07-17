import axios from 'axios'

const url = 'http://localhost:5000/'

const httpOptions = {
    "Content-Type" : "application/json"
}

const rest = {
    getUsers: async () => {
        try {
            const users = await axios.get(`${url}user`)
            return users
        } catch (err) {
            console.log(err)
        }
    },
    getPlaces: async () => {
        try {
            const places = await axios.get(`${url}place`)
            return places
        } catch (err) {
            console.log(err)
        }
    },
    getUserById: async (id) => {
        try {
            const user = await axios.get(`${url}user/${id}`)
            return user
        } catch (err) {
            console.log(err)
        }
    },
    postPlace: async (newPlace) => {
        try {
            const response = await axios.post(`${url}place`, newPlace, httpOptions)
            return response
        } catch (err) {
            console.log(err)
        }
    },
    patchPlace: async (id, place) => {
        try {
            const response = await axios.patch(`${url}place/${id}`, place, httpOptions)
            return response
        } catch (err) {
            console.log(err)
        }
    },
    postUser: async (newUser) => {
        try {
            const response = await axios.post(`${url}user`, newUser, httpOptions)
            return response
        } catch (err) {
            console.log(err)
        }
    }
}

export default rest