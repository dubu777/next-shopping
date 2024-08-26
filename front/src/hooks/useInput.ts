import { useState } from "react"

export default function useInput() {

  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {

  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

  }

  const handleTryCatch = (func: () => void) => {
    try {
      func()
    } catch (error) {
      
    }
  }

return { handleChange, handleBlur, handleKeyDown}

}