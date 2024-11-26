import { ReactNode } from "react";
import "./text.component.css";

type TextProps = {
  children: ReactNode;
  element?: "p" | "h1" | "h2" | "span";
  variant?:
    | "title"
    | "subtitle1"
    | "subtitle2"
    | "subtitle3"
    | "subtitle4"
    | "subtitle5"
    | "paragraph"
    | "label"
    | "error"
    | "bold";
};

export const Text = ({
  children,
  element = "p",
  variant = "paragraph",
}: TextProps) => {
  const Element = {
    p: "p",
    h1: "h1",
    h2: "h2",
    span: "span",
  }[element] as keyof JSX.IntrinsicElements;

  return <Element className={variant}>{children}</Element>;
};
