import { encode } from "he";
import { HTMLAttributes, PropsWithChildren } from "react";

const getCharCode = (char: string) => {
  if (char.match(/[a-zA-Z0-9]/)) {
    return char;
  }

  const charcode = encode(char, {
    useNamedReferences: true,
    encodeEverything: true,
  }).replace(/&(.+);/, "$1");

  return charcode;
};

type Props = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    char: string;
    x: number;
    y: number;
  }
>;

const Char = ({ char, x, y }: Props) => {
  const id = getCharCode(char);

  return <use href={`#${id}`} fill="#999" x={x * 8} y={y * 8}></use>;
};

export default Char;
