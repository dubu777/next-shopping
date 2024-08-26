import { forwardRef } from "react";
import { inputRecipe } from "./Input.css";
import useInput from "@/hooks/useInput";

interface InputProps {
  isError: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {isError} = props;
  const {handleChange, handleBlur, handleKeyDown} = useInput();
  return (
    <input
      ref={ref}
      className={inputRecipe({ error: isError})}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      // maxLength={maxLength}
    />
  )
})