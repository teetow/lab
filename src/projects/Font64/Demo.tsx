import { useState } from "react";
import Terminal from "./Terminal";

const allChars = ["@ABCDEFGHIJKLMNO", "PQRSTUVWXYZ[£]⬆⬅", ' !"#$%&`()*+,-./', "0123456789:;<=>?"];

const buffer = [
  "                                        ",
  "    **** COMMODORE 64 BASIC V2 ****     ",
  "                                        ",
  " 64K RAM SYSTEM  38911 BASIC BYTES FREE ",
  "                                        ",
  "READY.                                  ",
  "                                        ",
  ...allChars,
  // brokenChars
].join("");

const Demo = () => {
  const [buf, setBuf] = useState<string>(buffer);
  return <Terminal buffer={buf} onUpdate={setBuf} />;
};

export default Demo;
