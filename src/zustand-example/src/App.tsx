import { useCounter, useUsers } from './store'
import './App.css'
import { useEffect } from 'react'

function App() {
  const counter = useCounter(state => state)
  const { count, increment, decrement } = counter

  const users = useUsers(state => state.users)
  const getUsers = useUsers(state => state.getUsers)

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <button onClick={decrement}>dec</button>
      <p>{count}</p>
      <button onClick={increment}>inc</button>
      <ol>
        {users.map(u => <li key={u.id}>{`${u.username}: <${u.email}>`}</li>)}
      </ol>
    </>
  )
}

export default App

