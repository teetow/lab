import { useEffect, useRef, useState } from "react";
import "./Knob";

// const nope = new Knob();

const Demo = () => {
  const [v, set] = useState(0.1);
  const timer = useRef(-1);

  useEffect(() => {
    timer.current = window.setInterval(() => {
      set((v) => (v + 0.01) % 1);
    }, 16.666666);
    return () => {
      window.clearInterval(timer.current);
    };
  }, [timer]);

  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <knob-element value={v} onChange={(v) => set(v)} />
      <knob-element value={0.5} size={128} />
      <knob-element value={42} max={69} size={160} />
      <knob-element value={69} max={127} size={256} />
    </div>
  );
};

export default Demo;
