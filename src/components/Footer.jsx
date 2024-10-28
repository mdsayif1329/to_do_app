import React from "react";

function Footer({ completedTodos, totalTodos }) {
  return (
    <div className="fixed bottom-0 text-xl font-bold text-center w-full bg-yellow-400 p-4">
      <div className="w-2/3 items-center mx-auto">
        <span className="float-left">Completed : {completedTodos}</span>
        <span className="float-right">Total : {totalTodos}</span>
      </div>
    </div>
  );
}

export default Footer;
