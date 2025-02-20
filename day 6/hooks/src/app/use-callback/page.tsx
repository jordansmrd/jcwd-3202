/** @format */
"use client";
import TodoComponent from "@/components/todo.component";
import React, { useCallback, useState } from "react";

type Props = {};

export default function Page({}: Props) {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new Todo"]);
  }, [todos]);

  return (
    <div>
      <TodoComponent addTodo={addTodo} todos={todos} />
      <hr />
      <div>Count : {count}</div>
      <button onClick={increment}> + </button>
    </div>
  );
}

//component props => function. function tsb lebih baik dibungkus dalam bentuk useCallback
// kenapa? karena sifat dari sebuah component yg memiliki props dalam bentuk function
// component akan dirender walaupun function tidak berubah
