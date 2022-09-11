import './App.css'
import { useState, useEffect } from 'react'
import Axios from "axios"

function App() {

  const [userList, setUserList] = useState([])
  /*   const [input, setInput] = useState({
      name: "",
      age: 0,
      username: "",
    }) */
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")


  useEffect(() => {
    Axios.get("http://localhost:1337/getUsers")
      .then(res => {
        setUserList(res.data)
        console.log(res.data)
      })
  }, [])

  const createUser = () => {
    Axios.post("http://localhost:1337/createUser",
      { name, age, username })
      .then(res => {
        setUserList([
          ...userList,
          {
            name, age, username
          }
        ])
      })
  }

  /*   const handleChange = (e) => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      })
    } */

  return (
    <>
      <span className="usersDisplay">
        { userList.map((user) => {
          return (
            <>
              <p>Name: { user.name }</p>
              <p>Age: { user.age }</p>
              <p>Username: { user.username }</p>
            </>
          )
        }) }
      </span>
      <span>
        <input type="text" placeholder='Name...'
          onChange={ (e) => { setName(e.target.value) } } />
        <input type="number" placeholder='Age...'
          onChange={ (e) => { setAge(e.target.value) } } />
        <input type="text" placeholder='Username...'
          onChange={ (e) => { setUsername(e.target.value) } } />
        <button onClick={ createUser }>Create User</button>
      </span>
    </>
  )
}

export default App
