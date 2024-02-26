import { MouseEventHandler } from "react";
import Button from "./Button";

const Preview = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    unleashChaos();
  };

  function unleashChaos() {
    const body = document.querySelector("html");
    if (body) {
      console.log(body);
      body.style.overflow = "hidden";
    }
    const allElements = document.querySelectorAll("*:not(html, body)") as NodeListOf<HTMLElement>;

    allElements.forEach((element) => {
      const rndRot = Math.ceil(Math.random() * 1) * 360;
      const rndTime = Math.random() * 2;
      const x = Math.random() * 10 + 45;
      const y = Math.random() * 10 + 45;

      element.style.transform = `rotate(${rndRot}deg)`;
      element.style.transformOrigin = `${x}% ${y}%`;
      element.style.transition = `all ${rndTime}s ease-in-out`;

      setTimeout(() => {
        if (body) {
          body.style.overflow = "";
        }

        element.style.transform = "";
        element.style.transition = "";
        element.style.transformOrigin = "";
      }, 2000);
    });
  }

  return <Button onClick={handleClick}>Don't</Button>;
};

export default Preview;
