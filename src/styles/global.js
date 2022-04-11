import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --bg-light-theme: #F5F8FF;
    --card-light-theme: #FEFEFE;
    --color-light-theme: #202122;
    //filter: invert(6%) sepia(7%) saturate(533%) hue-rotate(169deg) brightness(92%) contrast(83%);
  }
`
