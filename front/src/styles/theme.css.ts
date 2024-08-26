import { createTheme, createThemeContract } from "@vanilla-extract/css";


// 추후에 다크모드 구현을 위해
export const themeVars = createThemeContract({
  colors: {
    white: '',
    black: '',
    gray1: '',
    gray2: '',
    danger: '',
    primary: '',
  },
  fontSize: {
    small: '',
    medium: '',
    large: '',
    heading: '',
  },
});

export const theme = createTheme(themeVars, {
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray1: '#f0f0f0',
    gray2: '#d9d9d9',
    danger: '#ff4d4f',
    primary: '#6200ea',
  },
  fontSize: {
    small: '12px',
    medium: '16px',
    large: '20px',
    heading: '24px',
  },
});
