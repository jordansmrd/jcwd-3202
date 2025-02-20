/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [file, setFile] = useState<FileList | null>(null);

  const renderCount = useRef<number>(0);

  const ref = useRef<HTMLInputElement>(null); //sebagai reference yg mengarah kesebuah element lain

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [name]);

  useEffect(() => {
    console.log(file);
  }, [file]);
  return (
    <div className="m-5">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setName(e.target.value)}
        className="border "
      />
      <div>Your Name : {name}</div>
      <div>Render Count : {renderCount.current} times</div>
      <input
        type="file"
        name=""
        id=""
        hidden
        ref={ref}
        onChange={(e) => setFile(e.target.files)}
      />

      <button
        onClick={() => ref.current?.click()}
        className="border rounded-md px-2 py-1"
      >
        upload your file
      </button>
    </div>
  );
}
