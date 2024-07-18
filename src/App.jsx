import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className=" p-10 bg-red-100 mx-auto ">
      <h1 className="mb-5 text-center font-bold text-3xl text-red-900">
        Counter : {value}
      </h1>

      <div className="text-center">
        <button onClick={()=> dispatch(increment())} className="px-4 mr-4 py-2 border font-bold border-red-900 text-red-900">
          Increment
        </button>
        <button onClick={()=> dispatch(decrement())} className="px-4 mr-4 py-2 border-2 font-bold border-red-900 text-red-900">
          Decrement
        </button>
        <button onClick={()=> dispatch(incrementByAmount(5))} className="px-4 py-2 border-2 border-red-900 font-bold text-red-900">
          Increment By 5
        </button>
      </div>
    </div>
  );
};

export default App;
