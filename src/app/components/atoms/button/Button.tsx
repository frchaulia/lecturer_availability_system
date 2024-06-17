import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-yellow-500 text-white rounded">
      {children}
    </button>
  );
};

export default Button;
