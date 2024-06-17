import React from 'react';

interface RadioButtonProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio"
      />
      <span>{label}</span>
    </label>
  );
};

export default RadioButton;
