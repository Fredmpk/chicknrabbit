import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-bold py-3 px-4 rounded-full w-full transition duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
