import './App.css'
import { useState } from 'react'

function App() {

  const [userList, setUserList] = useState([
    { id: 1, name: "Pedro", age: 20, username: "pedro123" },
  ])

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
