import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  placeholder?: string;
  register: UseFormRegisterReturn;
  className?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
}

export function Input({
  className = 'text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 py-2 pl-3 pr-10 sm:text-sm rounded-lg',
  placeholder,
  register,
  type = 'text',
  value,
}: InputProps) {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      {...register}
    />
  );
}
