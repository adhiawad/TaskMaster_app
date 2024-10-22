import React, { useState } from 'react'
import {useToDo} from "../context/index"

function ToDoForm() {

    const[todo,setTodo]=useState("")
    const {addTodo}=useToDo()

    const add= (e)=>{
        e.preventDefault()
        if(!todo)return
        addTodo({todo,compled:false})
        setTodo("")
    }


  return (
    <form onSubmit={add}  className="flex">
    <input
        type="text"
        placeholder="Enter task to complete..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 py-1.5 text-gray-700"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#E8846B] text-white shrink-0">
        Add
    </button>
</form>
  )
}

export default ToDoForm
