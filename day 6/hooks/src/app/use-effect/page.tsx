/** @format */
"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("ini akan ketrigger setiap ada perubahan");
  }); //function akan ke-trigger apabila 'apapun' berubah *jangan tulis seperti ini

  //componentDidMount
  useEffect(() => {
    //callback ini akan ke-trigger pada saat component berhasil dipasang
    setCount(5); //setState adalah sebuah function yg merubah isi dari state. perubahan yg terjadi ke dalam state tidak memiliki waktu tertentu. this state will be changed in the future

    console.log("ini component did mount");
    //disini biasa kita fetch data
  }, []);

  //componentDidUpdate
  useEffect(() => {
    //callback ini akan ke-trigger pada saat value dari count berubah
    console.log(count, "ini nilai count");
  }, [count]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //function ini akan ditrigger pada saat meninggalkan component
    };
  }, []);

  return (
    <div className="text-3xl font-bold h-screen flex items-center justify-center">
      {count}
    </div>
  );
}
