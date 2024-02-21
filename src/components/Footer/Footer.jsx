import React from 'react'
import "./FooterStyles.css"

const Footer = ({todos}) => {
  let completed = 0;
  for(let i=0;i<todos.length;i++){
    if(todos[i].isCompleted === true) {
      console.log("Here");
      completed++;}
  }
  console.log(completed);
  return (
    <div className='footer'>
      <p className="counter">Completed Todos: {completed} </p>
      <p className="counter">Total Todos: {todos.length}</p>
    </div>
  )
}

export default Footer