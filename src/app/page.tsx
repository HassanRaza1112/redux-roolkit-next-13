"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
} from "./GlobalRedux/Features/counter/counterSlice";
import { useAppSelector } from "./GlobalRedux/hooks";

export default function Home() {
  //useSelector gets the state from store
  const count = useAppSelector((state) => state.counter.value);

  //useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center justify-center block p-6 space-x-6">
      <button
        className="bg-blue-600 text-white text-sm leading-6 font-medium py-2 px-2 rounded-lg"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
        Counter: {count}
      </h1>
      <button
        className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
