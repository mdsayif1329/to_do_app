import React from "react";

function Todoitem({ item, todos, setTodos }) {
  const handleOnDelete = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const handleClick = (name) => {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  };
  const className = item.done ? "line-through" : "";
  return (
    <>
      <div className="w-auto text-[#353935] text-lg my-0 mx-auto px-1 py-1 flex justify-between items-center align-middle">
        <div className="font-bold px-0 py-4 text-lg">
          <span className={className} onClick={() => handleClick(item.name)}>
            {item.name}
          </span>
        </div>
        <button
          onClick={() => handleOnDelete(item)}
          className="bg-yellow-400 px-4 py-1 text-white rounded pointer items-center align-middle"
        >
          x
        </button>
      </div>
      <hr className="border-[1px_solid_#f4f4f4]" />
    </>
  );
}

export default Todoitem;
