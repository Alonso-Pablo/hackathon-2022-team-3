import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  placeholder?: string;
  register: UseFormRegisterReturn;
  className?: string;
  type?: HTMLInputTypeAttribute;
}

export function Input({
  className,
  placeholder,
  register,
  type = 'text',
}: InputProps) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      {...register}
    />
  );
}
