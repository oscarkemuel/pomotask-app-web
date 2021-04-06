import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  :root{
    --white: #fff;
    --background: #F2F3F5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark: #4953B8;
    --blue-twitter: #2AA9E0;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87.05%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, textarea, button{
    font: 400 1rem "Inter", sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    color: inherit;
    text-decoration: nome;
  }

  p{
    margin: 0;
  }

  label{
    font-size: 0.8rem;
    color: ${props => props.theme.colors.labelForm};
  }

  .errorLabel{
    margin: 0.2rem 0 0 0;
    font-size: 0.8rem;
    color: var(--red);
  }

  .buttonAddTask {
    display: flex;
    align-items: center;
    justify-content: center;

    svg{
      font-size: 1rem;
      margin-left: 5px;
    }
  }
`
