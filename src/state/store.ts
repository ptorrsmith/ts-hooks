import { createContext } from "react";

const initialState = {
  first: "bob",
  last: "Johns"
}

export type UserState = typeof initialState; // type of our state to be used in our components

const context = createContext<typeof initialState>(initialState);

export default context;
