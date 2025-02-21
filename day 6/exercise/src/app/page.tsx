/** @format */
"use client";
import Image from "next/image";
import Bg from "@/../public/bg.png";
import Shape from "@/../public/Combined Shape.svg";
import CardComponent from "@/components/card.component";
import { CheckComponent } from "@/components/Icon.component";
import { FormEvent, useState } from "react";
import { ITodo } from "./interfaces/todo.interface";
import { todos as data } from "@/json/data.json";
export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>(data);
  const [input, setInput] = useState<string>("");

  const reset = () => {
    setTodos([]);
  };

  const addNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      todo: input,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  //length adalah property dari array. memberi tahu panjang array
  // todos.length = 1
  // todos[todos.length-1].id

  const deleteTodo = (id: number) => {
    const index = todos.findIndex((_) => _.id == id); //cari index element yang mau dihapus
    const temp = [...todos]; //buat temporary variable untuk splice si array todo
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <>
      <center>
        <div className="w-full max-w-[1440px] min-h-screen bg-[#FAFAFA]">
          <div className=" relative">
            {/* background image section */}
            <Image
              src={Bg}
              alt=""
              className="max-w-[1440px] w-full xl:max-h-[300px] max-h-[30vw]  object-cover z-0 "
            ></Image>

            {/* todo section */}
            <div
              className="z-10  max-w-[1440px] w-full xl:max-h-[300px] max-h-[30vw] absolute top-0 h-screen"
              style={{
                background:
                  "linear-gradient(225deg, rgba(85, 150, 255, 0.6) 0%, rgba(172, 45, 235, 0.6) 100%)",
              }}
            >
              <div className="max-w-[541px] w-full relative top-4 lg:top-[70px] px-3">
                <div className=" text-white w-full h-12 text-[20px] lg:text-[40px] tracking-[15px] font-bold flex justify-between ">
                  <span>TODO</span>
                  <Image src={Shape} alt="" />
                </div>

                <div className="w-full rounded-[5px] bg-white flex h-16 items-center p-4 gap-3 mt-2 lg:mt-6 border">
                  <CheckComponent />
                  <form action="" onSubmit={addNewTodo} className=" w-full">
                    <input
                      type="text"
                      className="w-full rounded-[5px] outline-none  "
                      placeholder="Create a new todo..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* section todo list  */}
          <div className="max-w-[541px] w-full rounded-[5px] top-12  lg:-top-14 z-20 relative bg-white shadow-xl text-sm">
            {todos.map((todo) => (
              <CardComponent {...todo} key={todo.id} delete={deleteTodo} />
            ))}
            <div className="w-full rounded-[5px] bg-white flex justify-between h-16 items-center gap-3 lg:mt-6 py-5 px-6 border-b border-[#E3E4F1]">
              <span className="  text-left  text-[#9495A5] w-[80px]">
                {todos.length} items left
              </span>

              <div className="flex gap-2 font-bold">
                <span className="hover:text-[#3A7CFD] text-[#9495A5] cursor-pointer">
                  All
                </span>
                <span className="text-[#494C6B] cursor-pointer">Active</span>
                <span className="text-[#9495A5] hover:text-[#3A7CFD] cursor-pointer">
                  Completed
                </span>
              </div>
              <span className="text-[#494C6B] cursor-pointer">
                Clear Completed
              </span>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
