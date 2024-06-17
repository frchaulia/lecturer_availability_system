import React from 'react';

interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <p className="text-gray-700">{children}</p>
  );
};

export default Text;
