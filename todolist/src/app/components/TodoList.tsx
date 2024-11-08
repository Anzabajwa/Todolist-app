"useclient"
import { todo } from "node:test";
import React from "react";
import { useState } from "react"

interface Todo {
    id:number;
    text:string;
    completed:boolean;


}
const TodoList = () =>
{
  const [todos,setTodos]= useState <Todo[]>([]);
  const [inputValue, setInputValue] = useState ("");

  //add of itdems
  const addTodo =()=>{
    if(inputValue.trim()=== "")return;
    setTodos([
       ...todos,
        {id: Date.now(),text: inputValue,completed:false},

    ]);

setInputValue("")
};

//add values id:
const toggleTodo =(id:number) =>{
    setTodos(
        todos.map((todo)=>
        todo.id ===id ?{...todo, completed: !todo.completed} : todo
        )
    )
};

//delete todo selection
const deleteTodo = (id:number) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
};

return(
    <div className="flex flex-col min-h-screen">

        <header className="bg-gradient-to-tl from-black to-pink-900 -400 text-black h-20 border-2 border-pink-400 shadow-lg shadow-black">
    <div >
        <h1 className="text-3xl text-pink-300 font-serif text-center mt-6  uppercase ">Todolist By Anza Sarwar</h1>

    </div>
        </header>
<main className="flex-grow flex items-center justify-center bg-gradient-to-tr from-pink-700 to-red-500 shadow-md shadow-black">
    <div className="max-w-md mx-auto p-4 bg-gradient-to-bl from-black to-pink-950 rounded-lg shadow-md shadow-pink-600 ">
        <div className="mb-4">
            <div className="flex">
                <input type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow p-2 border border-black rounded-lg "
                placeholder="Add a new Task ...."

                
                />
                <button
                onClick={addTodo}
                className="ml-2 px-4 py-2 bg-pink-800 rounded-lg hover:bg-yellow-400 hover:text-black text-white border-2 border-pink-400 hover:border-2 hover:border-yellow-800"  >
                    Add

                </button>
            </div>
        </div>

  <ul className="space-y-2">
{todos.map ((todo) => (

    <li key={todo.id}
    className={   `flex items-center justify-between p-2 border-2 border-amber-500 rounded-lg ${      
        todo.completed ? "bg-lime-600 line-through "  :"bg-pink-300 font-bold"
    }` } >
        <span>{todo.text}</span>


<div>
    <button
    onClick={() => toggleTodo (todo.id)}
    className=" px-2 py-1 text-sm bg-pink-950  rounded-lg hover:bg-pink-400 text-white font-bold hover:text-black border-2 border-black">
        {todo.completed ? "Undo " : "complete"}

    </button>



    <button
    onClick={() => deleteTodo (todo.id)}
    className=" px-2 py-1 text-sm bg-red-500  rounded-lg hover:bg-red-900 font-bold hover:text-pink-100 border-2 border-orange-600 text-black ">
       Delete
    </button>

</div>



    

    </li>
)
    




)}







  </ul>







    </div>

</main>







    </div>
)



}
export default TodoList