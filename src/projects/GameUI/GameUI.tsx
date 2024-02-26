import { useEffect, useRef, useState } from "react";
import Gamepad, { ButtonMappings, ButtonName } from "./Gamepad";

import useAnimationFrame from "../../lib/useAnimationFrame";
import "./GameUI.css";

type Props = {};

const GameUI = ({}: Props) => {
  const [buttons, setButtons] = useState<ButtonName[]>([]);
  const [axes, setAxes] = useState({ leftStick: { x: 0, y: 0 }, rightStick: { x: 0, y: 0 } });
  const [triggers, setTriggers] = useState({ ZL: 0, ZR: 0 });
  const padRef = useRef<Gamepad>();

  window.addEventListener("gamepadconnected", (e) => {
    padRef.current = e.gamepad;
  });

  const handleButton = (button: ButtonName) => {
    console.log("button", button);
  };

  useEffect(() => {
    const pad = padRef.current;
    console.log("pad", pad);
    return () => {};
  }, [padRef]);

  useAnimationFrame(30, "gamepad", () => {
    const pad = navigator.getGamepads()[0];
    // const pad = padRef.current;

    if (pad) {
      setAxes({
        leftStick: { x: pad.axes[0], y: pad.axes[1] },
        rightStick: { x: pad.axes[2], y: pad.axes[3] },
      });

      setTriggers({
        ZL: pad.buttons[6].value,
        ZR: pad.buttons[7].value,
      });

      const pressedButtons: ButtonName[] = [];

      ButtonMappings.forEach((name, i) => {
        if (pad.buttons[i].pressed) {
          pressedButtons.push(name);
        }
      });

      setButtons((prev) => {
        const newButtons = pressedButtons.filter((button) => !prev.includes(button));
        newButtons.forEach(handleButton);

        return pressedButtons;
      });
    } else {
      if (buttons.length > 0) {
        setButtons([]);
      }
    }
  });

  return (
    <>
      <div className="temp">
        <Gamepad buttons={buttons} axes={axes} triggers={triggers} />
      </div>
    </>
  );
};

export default GameUI;
