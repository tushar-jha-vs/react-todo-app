import React, { useState } from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Form from "./components/Form/Form"
import TodoList from './components/TodoList/TodoList'

const App = () => {
  const [todos,setTodos] = useState([])
  return (
    <div>
    <Header/>
    <Form todos={todos} setTodos={setTodos}/>
    <TodoList todos={todos} setTodos={setTodos}/>
    <Footer todos={todos}/>
    </div>
  )
}

export default App