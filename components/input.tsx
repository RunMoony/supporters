import { ChangeEventHandler } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  name: string;
  kind?: "text" | "phone" | "team";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
  value?: string;
  onChange?: any;
}

export default function Input({
  name,
  kind = "text",
  type,
  register,
  required,
  onChange,
  value,
}: InputProps) {
  return (
    <div>
      {kind === "text" ? (
        <div className='rounded-md relative flex  items-center shadow-sm'>
          <input
            id={name}
            required={required}
            type={type}
            {...register}
            placeholder='asdasd@gmail.com'
            className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-600 focus:border-pink-600'
          />
        </div>
      ) : null}
      {kind === "team" ? (
        <div className='rounded-md relative flex  items-center shadow-sm'>
          <input
            id={name}
            required={required}
            type={type}
            {...register}
            onChange={onChange}
            value={value}
            placeholder='팀 선택'
            className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-600 focus:border-pink-600'
          />
        </div>
      ) : null}

      {kind === "phone" ? (
        <div className='flex rounded-md shadow-sm'>
          <span className='flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm'>
            +82
          </span>
          <input
            id={name}
            required={required}
            {...register}
            type={type}
            className='appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-600 focus:border-pink-600'
            placeholder='ex) 8201012345678'
          />
        </div>
      ) : null}
    </div>
  );
}
