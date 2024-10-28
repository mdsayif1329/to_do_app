import React from "react";
import Todoitem from "./Todoitem";

function Todolist({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className="bg-white rounded shadow-[0_4px_6px_rgba(0,0,0,0.1)] w-[32rem] mx-auto my-0 p-3 mt-4">
      {sortedTodos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}

export default Todolist;
