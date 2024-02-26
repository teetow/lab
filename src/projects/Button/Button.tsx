import { HTMLAttributes, PropsWithChildren } from "react";
import "./Button.scss";

const Button = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className="lab-button" {...props}>
      {children}
    </button>
  );
};
export default Button;
