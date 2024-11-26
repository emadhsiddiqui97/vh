import React, { FC } from "react";

interface InputProps {
  value?: string;
  onChange?: any;
  placeholder: string;
  label?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  className,
}) => {
  return (
    <div>
      <div
        className={`flex items-center ${
          className ? className : "rounded-md border border-gray-300"
        } px-4 py-2`}
      >
        {/* {icon && <div className="mr-2 text-gray-500">{icon}</div>} */}
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 appearance-none bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default Input;
