// src/styles/global.css.ts
import { globalStyle } from '@vanilla-extract/css';
import { notoSansKr } from '@/fonts/fonts';

// Global styles 적용
globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
  padding: 0,
  fontFamily: notoSansKr.style.fontFamily,
});
