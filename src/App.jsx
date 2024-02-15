import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-8 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-full">
          <button
            className="text-lg  p-3 rounded-3xl font-bold bg-red-500"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="text-lg text-white  p-3 rounded-3xl font-bold bg-black"
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="text-lg text-white  p-3 rounded-3xl font-bold bg-blue-700"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="text-lg  p-3 rounded-3xl font-bold bg-green-500"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="text-lg  p-3 rounded-3xl font-bold bg-yellow-300"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="text-lg  p-3 rounded-3xl font-bold bg-gray-600"
            onClick={() => setColor("gray")}
          >
            Gray
          </button>
          <button
            className="text-lg  p-3 rounded-3xl font-bold bg-pink-300"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="text-lg  p-3 rounded-3xl font-bold bg-amber-600"
            onClick={() => setColor("mediumorchid")}
          >
            Megenta
          </button>
          <button
            className="text-lg  p-3 rounded-3xl font-bold bg-purple-500"
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="text-lg  p-3 rounded-3xl font-bold bg-neutral-600"
            onClick={() => setColor("turquoise")}
          >
            Turquoise
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
