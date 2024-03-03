import React, { HTMLAttributes, PropsWithChildren, createRef, useEffect, useState } from "react";
import { clamp } from "../../lib/math";
import Char from "./Char";
import Template from "./Template";
import "./Terminal.scss";

type Props = PropsWithChildren<HTMLAttributes<SVGElement>> & {
  buffer: string;
  colwidth?: number;
  numrows?: number;
  onUpdate?: (buffer: string) => void;
};

type Pt = [x: number, y: number]; // [x, y]

type MoveFn = (x: number, y: number, event?: React.KeyboardEvent<Element>) => Pt;

const Terminal = ({ buffer, colwidth = 40, numrows = 25, onUpdate, ...props }: Props) => {
  const inputRef = createRef<HTMLInputElement>();
  const terminalRef = createRef<HTMLDivElement>();
  const [cursor, setCursor] = useState<Pt>([0, 0]);

  const c2l = (x: number, y: number) => y * colwidth + x;
  const l2c = (i: number) => [i % colwidth, Math.floor(i / colwidth)] as Pt;

  useEffect(() => {
    if (buffer.length < colwidth * numrows) {
      onUpdate?.(buffer.padEnd(colwidth * numrows, " "));
    }
  }, [buffer]);

  useEffect(() => {
    terminalRef.current?.focus();
  }, [terminalRef]);

  const Moves: Record<string, MoveFn> = {
    ArrowUp: (x, y) => [x, y - 1],
    ArrowDown: (x, y) => [x, y + 1],
    ArrowLeft: (x, y) => [x - 1, y],
    ArrowRight: (x, y) => [x + 1, y],
    Home: (_, y, e) => [0, e?.ctrlKey ? 0 : y],
    End: (_, y, e) => [colwidth - 1, e?.ctrlKey ? numrows : y],
    Enter: (_, y) => [0, y + 1],
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (inputRef.current === null) {
      return;
    }

    if (["Shift", "Control", "Alt", "Meta"].includes(e.key)) {
      return;
    }

    if (e.key in Moves) {
      e.preventDefault();
      const newCursor = [
        clamp(Moves[e.key](cursor[0], cursor[1], e)[0], 0, colwidth - 1),
        clamp(Moves[e.key](cursor[0], cursor[1], e)[1], 0, numrows - 1),
      ] as Pt;

      setCursor(newCursor);
    } else if (e.key === "Backspace") {
      setCursor(([x, y]) => {
        const i = c2l(x, y);
        const newBuffer = buffer.slice(0, i - 1) + buffer.slice(i);
        onUpdate?.(newBuffer);
        return [l2c(i - 1)[0], l2c(i - 1)[1]];
      });
    } else if (e.key === "Delete") {
      setCursor(([x, y]) => {
        const i = c2l(x, y);
        const newBuffer = buffer.slice(0, i) + buffer.slice(i + 1);
        onUpdate?.(newBuffer);
        return [x, y];
      });
    } else {
      inputRef.current.focus();
      inputRef.current.dispatchEvent(new KeyboardEvent("keydown", e.nativeEvent));

      window.setTimeout(() => {
        if (inputRef.current === null) {
          return;
        }

        const newChar = inputRef.current.value;
        if (newChar !== "") {
          const i = c2l(cursor[0], cursor[1]);
          const newBuffer = buffer.slice(0, i) + newChar + buffer.slice(i + 1);
          onUpdate?.(newBuffer);
          inputRef.current.value = "";
          setCursor(([x, y]) => [(x + 1) % colwidth, y + Math.floor((x + 1) / colwidth)]);
        }

        terminalRef.current?.focus();
      }, 1);
    }
  };

  return (
    <>
      <div ref={terminalRef} className="c64screen" onKeyDown={handleKeyDown} tabIndex={0}>
        <Template />
        <svg
          viewBox="0 0 320 200"
          className="terminal"
          onClick={() => {
            console.log("click");
            terminalRef.current?.focus();
          }}
          {...props}
        >
          {buffer.split("").map((char, i) => {
            const x = i % colwidth;
            const y = Math.floor(i / colwidth);
            return <Char key={`${y}-${x}`} char={char} x={x} y={y} />;
          })}

          <use href="#unnamed97" x={cursor[0] * 8} y={cursor[1] * 8} />
        </svg>
      </div>

      <input style={{ appearance: "none", opacity: 0 }} type="text" ref={inputRef} />
    </>
  );
};

export default Terminal;
