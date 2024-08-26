import { regex } from "@/constants";
import { ERROR_MESSAGES } from "@/constants/messages";


  const validateEmail = (str: string) => {
    if (!regex.EMAIL.test(str)) {
      throw new Error(ERROR_MESSAGES.INVALID_EMAIL);
    }
  };
  
  const validatePassword = (str: string) => {
    if (!regex.PASSWORD.test(str)) {
      throw new Error(ERROR_MESSAGES.INVALID_PASSWORD);
    }
  };
  
  const validatePasswordConfirm = (str: string, compareStr?: string) => {
    if (!compareStr) {
      throw new Error(ERROR_MESSAGES.INVALID_LENGTH);
    }
    if (str !== compareStr) {
      throw new Error(ERROR_MESSAGES.INVALID_PASSWORD_CONFIRM);
    }
  };
  
export const InputValidation: Record<string, (str: string, compareStr?: string) => void> = {
  email: (str: string) => {
    validateEmail(str);
  },
  password: (str: string) => {
    validatePassword(str);
  },
  passwordConfirm: (str: string, compareStr?: string) => {
      validatePasswordConfirm(str, compareStr)
  },
}
