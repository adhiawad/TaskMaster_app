import React from 'react'
import { useToDo } from '../context';
import { useState } from 'react';

function ToDoItem({todo}) {

  const [isToDoEditable,setisToDoEditable]=useState(false)
  const [todoMsg,settodoMsg]=useState(todo.todo)

  const {toggleCompleted,updateTodo,deleteTodo}= useToDo()

  const editTodo=()=>{
    updateTodo(todo.id,{...todo,todo:todoMsg})
    setisToDoEditable(false)
  }
  const check=()=>{
    toggleCompleted(todo.id)
  }

  return (
    <div
    className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#E1D7C6]"
    }`}
>
    <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={check}
    />
    <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
            isToDoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => settodoMsg(e.target.value)}
        readOnly={!isToDoEditable}
    />
    {/* Edit, Save Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
            if (todo.completed) return;

            if (isToDoEditable) {
                editTodo();
            } else setisToDoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
    >
        {isToDoEditable ? "📁" : "✏️"}
    </button>
    {/* Delete Todo Button */}
    <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
    >
        ❌
    </button>
</div>
  )
}

export default ToDoItem
