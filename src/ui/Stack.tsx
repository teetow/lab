import "./Stack.css";
import React, { HTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const Stack = ({ children }: Props) => {
  return <div className="stack">{children}</div>;
};

export default Stack;
