import { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { Input } from '@/components';

export function Field({
  placeholder,
  register,
  error,
  type,
  className,
  labelClasses = 'grid gap-1 text-gray-800 dark:text-gray-200',
  text,
}: {
  labelClasses?: string;
  text?: string;
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  error?: FieldError;
}) {
  return (
    <label className={labelClasses}>
      {text}
      <Input
        className={className}
        placeholder={placeholder}
        register={register}
        type={type}
      />
      {error && <span className="text-red-700">{error.message}</span>}
    </label>
  );
}
