import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      className={`bg-zinc-600 active:bg-amber-700 bg-opacity-50 text-white font-serif font-bold py-3 px-4 rounded-full w-full transition duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
