/** @format */

import { memo } from "react";

type TTodo = {
  todos: string[];
  addTodo: () => void;
};

function Todo({ todos, addTodo }: TTodo) {
  console.log("child render");

  return (
    <div>
      <h2>My todo</h2>
      {todos.map((todo, key) => (
        <p key={key}>{todo}</p>
      ))}

      <button onClick={addTodo}> Add todo</button>
    </div>
  );
}

export default memo(Todo);
