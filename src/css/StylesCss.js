import { css } from '@emotion/core'

export const Styles = css`
  html {
    width: 100%;
    height: 100%;
  }

  #root {
    width: inherit;
    height: inherit;
  }
  body {
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  input {
    padding: 10px;
    height: auto;
    font-size: inherit;
    display: block;
    width: 100%;
    border-color: transparent;
    box-sizing: border-box;
    border-radius: 6px;

    &:focus {
      outline: 5px solid yellow;
    }
  }
`
