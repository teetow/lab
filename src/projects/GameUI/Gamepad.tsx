import cx from "classix";
import { CSSProperties } from "react";
import "./Gamepad.css";
import assets from "./assets";

export const ButtonMappings = [
  "A",
  "B",
  "X",
  "Y",
  "L",
  "R",
  "ZL",
  "ZR",
  "SELECT",
  "START",
  "L3",
  "R3",
  "UP",
  "DOWN",
  "LEFT",
  "RIGHT",
] as const;

export type ButtonName = (typeof ButtonMappings)[number];

type Props = {
  axes: {
    leftStick: { x: number; y: number };
    rightStick: { x: number; y: number };
  };
  buttons: ButtonName[];
  triggers: {
    ZL: number;
    ZR: number;
  };
};

const Gamepad = ({ axes, buttons, triggers }: Props) => {
  const has = (button: ButtonName) => (buttons.includes(button) ? "is-active" : "");
  const c = (...args: string[]) =>
    cx("gp__symbol", typeof args === "string" ? args : args.join(" "));

  const rd = (n: number) => Math.round(n * 1000) / 1000;
  return (
    <svg
      className={cx("gamepad")}
      width="159"
      height="109"
      viewBox="0 0 166 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {assets.shell}
        {assets.dpad}
        {assets.arrow}
        {assets.stick}
        {assets.button}
        {assets.rearbutton}
        {assets.trigger}
      </defs>
      <use
        className={c("gp__trigger gp__trigger-l", has("ZL"))}
        style={{ "--value": rd(triggers.ZL) } as CSSProperties}
        href="#trigger"
      />
      <use
        className={c("gp__trigger gp__trigger-r", has("ZR"))}
        style={{ "--value": rd(triggers.ZR) } as CSSProperties}
        href="#trigger"
      />

      <use className={c("gp__rearbutton gp__rearbutton-l", has("L"))} href="#rearbutton" />
      <use className={c("gp__rearbutton gp__rearbutton-r", has("R"))} href="#rearbutton" />

      <use className={c("gp__shell")} href="#shell" />

      <use className={c("gp__dpad")} href="#dpad" />
      <use className={c("gp__arrow", "gp__arrow--up", has("UP"))} href="#arrow" />
      <use className={c("gp__arrow", "gp__arrow--right", has("RIGHT"))} href="#arrow" />
      <use className={c("gp__arrow", "gp__arrow--down", has("DOWN"))} href="#arrow" />
      <use className={c("gp__arrow", "gp__arrow--left", has("LEFT"))} href="#arrow" />

      <use
        className={c("gp__stick gp__stick--left", has("L3"))}
        style={
          {
            "--x": rd(axes.leftStick.x),
            "--y": rd(axes.leftStick.y),
          } as CSSProperties
        }
        href="#stick"
      />
      <use
        className={c("gp__stick gp__stick--right", has("R3"))}
        style={
          {
            "--x": rd(axes.rightStick.x),
            "--y": rd(axes.rightStick.y),
          } as CSSProperties
        }
        href="#stick"
      />

      <use className={c("gp__button gp__button-a", has("A"))} href="#button" />
      <use className={c("gp__button gp__button-b", has("B"))} href="#button" />
      <use className={c("gp__button gp__button-x", has("X"))} href="#button" />
      <use className={c("gp__button gp__button-y", has("Y"))} href="#button" />
    </svg>
  );
};

export default Gamepad;
