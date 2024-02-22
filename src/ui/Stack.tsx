import { HTMLAttributes, PropsWithChildren } from "react";
import "./Stack.css";
import cx from "classix";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

const Stack = ({ children, ...props }: Props) => {
  return (
    <div {...props} className={cx("stack", props.className)}>
      {children}
    </div>
  );
};

export default Stack;
