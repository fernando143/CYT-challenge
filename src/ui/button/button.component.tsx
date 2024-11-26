import { ReactElement } from "react";
import "./button.css";

type ButtonProps = {
  disabled?: boolean;
  children: ReactElement | string;
  onClick: () => void;
};

export const Button = ({
  disabled = false,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`button ${disabled && "button--disabled"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
