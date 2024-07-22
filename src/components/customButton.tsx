import React, { ReactNode, MouseEventHandler } from "react";

type CustomButtonProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  type?: "button" | "submit" | "reset"; 
};

const CustomButton: React.FC<CustomButtonProps> = ({ className = "", onClick, children, type = "button" }) => {
  return (
    <button
      type={type}
      className={`bg-customPurple rounded-3xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
