import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 60%;
    font-family: 'Inter', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.colors.gray600};
  }

  body,
  input,
  button,
  textarea {
    color: ${({ theme }) => theme.colors.gray100};
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.blue} ${({ theme }) =>
  theme.colors.blueDark};
  }

  /* Chrome, Edge and Safari */
  *::-webkit-scrollbar {
    width: 4px;
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.gray400};
  }

  *::-webkit-scrollbar-track:hover {
    background-color: ${({ theme }) => theme.colors.gray400};
  }

  *::-webkit-scrollbar-track:active {
    background-color: ${({ theme }) => theme.colors.gray400};
  }

  *::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.purple};;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color:  ${({ theme }) => theme.colors.purpleDark};
  }

  *::-webkit-scrollbar-thumb:active {
    background-color:  ${({ theme }) => theme.colors.purpleDark};
  }

`;
