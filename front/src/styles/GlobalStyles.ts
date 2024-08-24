import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { Noto_Sans_KR } from 'next/font/google';

export const notoSansKr = Noto_Sans_KR({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const GlobalStyle = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  };
  body {
    font-family: ${notoSansKr.style.fontFamily}
  }
`;