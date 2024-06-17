import React, { ReactNode } from 'react';

interface TextInputProps {
  children?: ReactNode;
  label: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ children, label, type = "text", value, onChange, required = false }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-white">{label}</label>
      <input type={type} value={value} onChange={onChange} required={required} className="border rounded-lg px-3 py-2 w-full mt-1 bg-blue-800 text-white" />
      {children}
    </div>
  );
};

export default TextInput;