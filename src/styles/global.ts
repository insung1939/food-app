import { color } from '../types/color'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
  font-family: 'Noto Sans KR';
  src: url('../fonts/NotoSansKR-Black.woff2') format('woff2');
  font-weight: 900
}
@font-face {
  font-family: 'Noto Sans KR';
  src: url('../fonts/NotoSansKR-Bold.woff2') format('woff2');
  font-weight: 700
}
@font-face {
  font-family: 'Noto Sans KR';
  src: url('../fonts/NotoSansKR-Light.woff2') format('woff2');
  font-weight: 300;
}
@font-face {
  font-family: 'Noto Sans KR';
  src: url('../fonts/NotoSansKR-Medium.woff2') format('woff2');
  font-weight: 500;
}
@font-face {
  font-family: 'Noto Sans KR';
  src: url('../fonts/NotoSansKR-Regular.woff2') format('woff2');
  font-weight: 400;
}
@font-face {
  font-family: 'Noto Sans KR';
  src: url('../fonts/NotoSansKR-Thin.woff2') format('woff2');
  font-weight: 100;
}

body{
  padding: 0 16px 50px;
  background-color: ${color.black};
  font-family: 'Noto Sans KR', sans-serif;
}  
`
