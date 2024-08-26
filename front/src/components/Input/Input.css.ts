import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const inputRecipe = recipe({
  base: style({
    width: '100%',
    padding: '0.5rem',
    borderRadius: '3',
    border: `1px solid ${themeVars.colors.gray2}`,
    outlineColor: themeVars.colors.gray2,
  }),
  variants: {
    error: {
      true: {
        borderColor: themeVars.colors.danger,
        outlineColor: themeVars.colors.danger,
      },
      false: {},
    }
  },
  defaultVariants: {
    error: false,
  }
  
})