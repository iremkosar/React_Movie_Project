import React, { ForwardedRef } from "react";

type CustomInputProps = {
  id: string;
  className?: string;
  error?: {
    message: string;
  };
} & React.InputHTMLAttributes<HTMLInputElement>;

const CustomInput = React.forwardRef(
  (
    { id, className = "", error, ...rest }: CustomInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <input
          id={id}
          type="text"
          className={`py-3 border rounded-3xl bg-inputgray ${className}`}
          ref={ref}
          {...rest}
        />
        {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
      </>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
