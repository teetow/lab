import cx from "classix";
import React, { Children, ForwardedRef, PropsWithChildren, ReactNode, forwardRef } from "react";
import { Digit, Template } from "./SegDigit.tsx";
import "./SegDisplay.scss";

const ValidDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

type ValidDigit = typeof ValidDigits;

const isValidDigit = (digit: ReactNode): digit is ValidDigit => {
  if (typeof digit === "string") {
    return (ValidDigits as readonly string[]).includes(digit);
  }
  return false;
};

const cls = "eg-segdisplay";
type Props = PropsWithChildren<{}>;

const SegDisplay = forwardRef(({ children }: Props, forwardedRef: ForwardedRef<HTMLDivElement>) => {
  const digits: { char: string; withdot: boolean }[] = [];

  Children.forEach(children, (childnode) => {
    if (typeof childnode === "string") {
      return childnode.split("").forEach((char, i, arr) => {
        if (isValidDigit(char)) {
          const withdot = arr[i + 1] == ".";
          digits.push({ char, withdot });
        }
      });
    } else return childnode;
  });

  return (
    <>
      <Template />
      <div ref={forwardedRef} className={`${cls}`}>
        {digits.map(({ char, withdot }, i) => (
          <Digit key={i} className={cx(`d-${char}`, withdot && `dot`)} />
        ))}
      </div>
    </>
  );
});

export default SegDisplay;
