import { useState } from "react";
import "./Demo.scss";
import SegDisplay from "./SegDisplay.tsx";

const Demo = () => {
  const [value, setValue] = useState("123");
  return (
    <div className="segdigit-demo">
      <SegDisplay>{value}</SegDisplay>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Demo;
