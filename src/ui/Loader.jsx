import { useState } from "react";
import { PacmanLoader } from "react-spinners";

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#5dade2");

  return (
    <div className="absolute inset-0 flex justify-center items-center bg-slate-200/20 backdrop-blur-sm">
      <PacmanLoader loading={loading} color={color} />
    </div>
  );
}

export default Loader;
