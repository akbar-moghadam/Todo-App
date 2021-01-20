import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import '../App.scss'

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const addTodo=todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }

        const newTodos=[todo,...todos]
        setTodos(newTodos)

        
    }

    const updateTodo=(todoId,newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        } 

        setTodos(prev => prev.map(item => (item.id===todoId ? newValue:item)))
    }

    const removeTodo=id => {
        const removeArr=[...todos].filter(todo => todo.id !== id)
        setTodos(removeArr)
    }
    const completeTodo=id => {
        let updatedTodos=todos.map(todo => {
            if(todo.id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }
 
    return (
        <div className="container-todolist">
            <h1>What's the plan for Today?</h1>
           <TodoForm onSubmit={addTodo}/> 
           <div className="todo"><Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} /></div>
        </div>
    )
}

export default TodoList
