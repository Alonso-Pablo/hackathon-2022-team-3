import { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { Input } from '@/components';

export function Field({
  placeholder,
  register,
  error,
  type,
  className,
  text,
}: {
  text?: string;
  className?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  error?: FieldError;
}) {
  return (
    <label className="grid gap-1">
      {text}
      <Input
        className={className}
        placeholder={placeholder}
        register={register}
        type={type}
      />
      {error && <span className="text-red-700 ">{error.message}</span>}
    </label>
  );
}
