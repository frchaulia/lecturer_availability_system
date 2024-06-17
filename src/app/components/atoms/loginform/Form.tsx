import React, { ReactNode } from 'react';

interface FormProps {
  children?: ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return <form className="w-full" onSubmit={onSubmit}>{children}</form>;
};

export default Form;