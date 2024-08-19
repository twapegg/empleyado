"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext<any>(null);

export function AppWrapper({ children }: any) {
  const [user, setUser] = useState({
    id: null,
    timeRecord: {
      timeIn: null,
      timeOut: null,
    },
  });

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export function useAppContext() {
  return useContext(Context);
}
