import './App.css'
import { useState, useEffect } from 'react'
import Axios from "axios"

function App() {

  const [userList, setUserList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:1337/getUsers")
      .then((res) => {
        setUserList(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <>
      <span className="usersDisplay">
        { userList.map((user) => {
          return (
            <>
              <h1>Name: { user.name }</h1>
              <h1>Age: { user.age }</h1>
              <h1>Username: { user.username }</h1>
            </>
          )
        }) }
      </span>
    </>
  )
}

export default App
