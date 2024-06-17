import React, { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  type: "submit" | "button";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">
      {children}
    </button>
  );
};

export default Button;