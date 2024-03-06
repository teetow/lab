import { clamp } from "../../lib/math";
import "./Knob.scss";

function svgelem<T extends keyof SVGElementTagNameMap>(tag: T) {
  return document.createElementNS("http://www.w3.org/2000/svg", tag) as SVGElementTagNameMap[T];
}

type Props = {
  value: number;
  min?: number;
  max?: number;
  size?: number;
  onChange?: (value: number) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "knob-element": Props;
    }
  }
}

export class Knob extends HTMLElement {
  private size: number = 64;
  private value: number = 0;
  private min: number = 0;
  private max: number = 1;
  private onChange?: (value: number) => void;

  private shadow: ShadowRoot;

  // elements
  private root: HTMLDivElement;
  private surface: SVGSVGElement;
  private perimeter: SVGCircleElement;
  private indicator: SVGCircleElement;
  private indicatorgroup: SVGGElement;
  private readout: HTMLSpanElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    this.root = document.createElement("div");
    this.root.setAttribute("part", "root");
    this.root.setAttribute("style", `--value: ${this.value}; --sz: ${this.size};`);
    this.shadow.appendChild(this.root);

    this.surface = svgelem("svg");
    this.surface.setAttribute("viewBox", `0 0 ${this.size} ${this.size}`);
    this.surface.setAttribute("part", "surface");
    this.root.appendChild(this.surface);

    this.perimeter = svgelem("circle");
    this.perimeter.setAttribute("part", "perimeter");
    this.surface.appendChild(this.perimeter);

    this.indicatorgroup = svgelem("g");
    this.indicatorgroup.setAttribute("part", "indicatorgroup");
    this.surface.appendChild(this.indicatorgroup);

    this.indicator = svgelem("circle");
    this.indicator.setAttribute("part", "indicator");
    this.indicatorgroup.appendChild(this.indicator);

    this.readout = document.createElement("span");
    this.readout.setAttribute("part", "readout");
    this.readout.textContent = this.value.toFixed(2);
    this.root.appendChild(this.readout);
  }

  static get observedAttributes() {
    return ["value", "size", "min", "max"];
  }

  attributeChangedCallback(name: string, _: number, newValue: number) {
    switch (name) {
      case "value":
        this.value = newValue;
        break;
      case "size":
        this.size = newValue;
        break;
      case "min":
        this.min = newValue;
        break;
      case "max":
        this.max = newValue;
        break;
      default:
        return;
    }
    this.render();
  }

  connectedCallback() {
    this.render();
    this.addEventListener("mousedown", this.handleMouseDown);
  }

  disconnectedCallback() {
    this.removeEventListener("mousedown", this.handleMouseDown);
  }

  private handleMouseDown = () => {
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseup", this.handleMouseUp);
  };

  private handleMouseUp = () => {
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  };

  private handleMouseMove = (event: MouseEvent) => {
    const scale = this.max - this.min;
    const mouseDelta = -event.movementY; // larger y means smaller value
    const modifier =
      event.shiftKey && event.ctrlKey ? 0.1 : event.shiftKey ? 2 : event.ctrlKey ? 0.25 : 1;
    const valueDelta = (mouseDelta / this.size) * scale * modifier;

    const newVal = clamp(Number(this.value) + valueDelta, this.min, this.max).toPrecision(5);

    this.value = Number(newVal);

    this.onChange?.(this.value);
    this.render();
  };

  private render() {
    this.root.setAttribute(
      "style",
      `--value: ${this.value / (this.max - this.min)}; --sz: ${this.size};`
    );
    this.surface.setAttribute("viewBox", `0 0 ${this.size} ${this.size}`);
    this.readout.textContent = Number(this.value).toFixed(2);
  }
}

if (customElements.get("knob-element") === undefined) {
  customElements.define("knob-element", Knob);
}
