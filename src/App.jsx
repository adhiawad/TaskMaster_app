import { useEffect, useState } from 'react'
import {ToDoForm,ToDoItem} from './components/index'

import './App.css'
import {ToDoProvider} from './context'

function App() {
    const [todos,setTodos]=useState([])
    const addTodo =(todo)=>{
      setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    }

    const updateTodo =(id,todo)=>{
      setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id ===id ? todo: prevTodo)))
    }

    const deleteTodo= (id)=>{
      setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id !== id))
    }

    const toggleCompleted =(id)=>
      {
        //console.log(id);
         setTodos((prev)=>(prev.map((prevTodo)=> (prevTodo.id ===id ? {...prevTodo,completed:!prevTodo.completed}: prevTodo))))}
    
    useEffect(()=>  {
      const todos =JSON.parse(localStorage.getItem("todos"))

      if (todos && todos.length>0) {
        setTodos(todos)
      }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])


  return (
   <ToDoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
   <div className="bg-[#F8F4E3] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white bg-[#b8b9b0]">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2 text-black">Manage Your Tasks Efficiently</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <ToDoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div className='w-full' key={todo.id}>
                            <ToDoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
   </ToDoProvider>
  )
}

export default App
