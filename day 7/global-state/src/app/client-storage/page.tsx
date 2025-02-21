/** @format */
"use client";
import React, { useEffect, useState } from "react";

interface IUser {
  id?: number;
  username?: string;
}

export default function Page() {
  const [longitude, setLongitude] = useState<number>(0);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    setLongitude(Number(localStorage.getItem("longitude")));
    setUser(JSON.parse(String(localStorage.getItem("auth2"))));
  }, []);

  const resetLocalStorage = () => {
    localStorage.clear();
  };

  const logout = () => {
    localStorage.removeItem("auth2");
    setUser({});
  };

  const setLogin = () => {
    const user = {
      id: 1,
      username: "bagas",
    };
    localStorage.setItem("auth", String(user));
    localStorage.setItem("auth2", JSON.stringify(user));
  };
  const setLocalStorage = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      localStorage.setItem("latitude", JSON.stringify(crd.latitude));
      localStorage.setItem("longitude", JSON.stringify(crd.longitude));
    });
  };
  return (
    <div>
      {longitude}
      <button
        className="bg-black text-white py-1 px-2 rounded-md"
        onClick={setLocalStorage}
      >
        set local storage
      </button>
      <div>{user?.username}</div>
      <button
        className="bg-black text-white py-1 px-2 rounded-md"
        onClick={setLogin}
      >
        set login
      </button>
      <button
        className="bg-black text-white py-1 px-2 rounded-md"
        onClick={resetLocalStorage}
      >
        clear local storage
      </button>{" "}
      <button
        className="bg-black text-white py-1 px-2 rounded-md"
        onClick={logout}
      >
        logout
      </button>{" "}
    </div>
  );
}
