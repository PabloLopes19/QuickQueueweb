"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Icon } from "react-feather";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: Icon;
}

export default function Input({ Icon, ...rest }: InputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        style={{
          paddingLeft: Icon ? 46 : 20,
          paddingRight: !show ? 46 : 20,
        }}
        className="p-5 w-full flex items-center text-sm outline-none rounded-[9px] border border-qq-border focus:border-green-600 transition-all duration-200 text-qq-description"
        {...rest}
        type={
          rest.type === "password" ? (!show ? "password" : "text") : rest.type
        }
      />

      {Icon && (
        <div className="absolute top-[calc(38%)] left-[20px]">
          <Icon size={16} className="text-qq-description" />
        </div>
      )}

      {rest.type === "password" && (
        <button
          onClick={() => setShow(!show)}
          className="absolute top-[calc(38%)] right-[20px]"
        >
          {show ? (
            <EyeOff size={16} className="text-qq-description" />
          ) : (
            <Eye size={16} className="text-qq-description" />
          )}
        </button>
      )}
    </div>
  );
}
