import React, { useState } from "react";

function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  const handOnSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };
  return (
    <div>
      <form
        onSubmit={handOnSubmit}
        className="bg-white rounded shadow-[0_4px_6px_rgb(0,0,0,0.1)] p-5 w-[32rem] my-0 mx-auto mt-12"
      >
        <div className="flex justify-between">
          <input
            type="text"
            className="w-full block outline-none text-black text-lg"
            placeholder="Enter To Do Item"
            value={todo.name}
            onChange={(e) => {
              setTodo({ name: e.target.value, done: false });
            }}
          />
          <button
            type="submit"
            className="inline-block rounded bg-yellow-400 px-8 py-2 text-white pointer"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
