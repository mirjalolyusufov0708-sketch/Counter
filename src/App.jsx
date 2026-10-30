import { useState } from "react";

function App() {

  let [count, setCount] = useState(1)

  const increment = () => {
    setCount((val) => (val + 1))
  }
  const decrement = () => {
    setCount((val) => (val - 1))
  }
  const reset = () => {
    setCount((val) => (val - val))
  }

  return (
    <div className="flex justify-center items-center flex-col mt-40 gap-1">
      <h1 className="font-bold text-[40px] text-blue-900">Count:{count}</h1>
      <button className="bg-green-600 border-2 p-1.25 rounded-[5px] hover:font-bold active:bg-lime-600" onClick={increment}>Oshirish</button>
      <button className="bg-red-600 border-2 p-1.25 rounded-[5px] hover:font-bold active:bg-pink-950" onClick={decrement}>Kamaytirish</button>
      <button className="bg-black border-2 p-1.25 rounded-[5px] hover:font-bold hover:text-amber-50 active:bg-gray-400" onClick={reset}>Qayta Boshlash</button>
    </div>
  )

}

export default App