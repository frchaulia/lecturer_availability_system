import React, { ReactNode } from 'react';

interface CardProps {
  children?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`bg-blue-900 bg-opacity-90 shadow-lg rounded-lg p-6 ${className}`}>{children}</div>;
};

export default Card;