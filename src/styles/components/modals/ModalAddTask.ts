import styled from 'styled-components'

export const ModalContent = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  border: solid 1px var(--white);
  padding-left: 2rem;
  padding-right: 2rem;

  button {
    height: calc(1.5em + 0.75rem + 2px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem !important;
  }

  .modal-header {
    background: ${props => props.theme.colors.background};

    .close {
      span {
        font-size: 37px;
        color: ${props => props.theme.colors.text};
      }
    }
  }

  .modal-body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.theme.colors.background};

    form {
      width: 100%;
    }

    .form-group {
      width: 100%;
    }
  }

  .modal-footer {
    justify-content: center;
    background: ${props => props.theme.colors.background};
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .form-group {
    display: flex;
    flex-direction: column;
    & + .form-group {
      margin-top: 2vh;
    }
  }

  input {
    background: var(--dashboard-panel);
    border: 1px solid #c2cbe2;
    height: 48px;
  }
  input::placeholder {
    font-size: 12px;
    color: var(--text-label);
  }
  .form-label {
    font-size: 12px;
    margin-bottom: 0.5vh;
    color: var(--text-grey);
  }

  span {
    color: var(--red);
    margin-top: 5px;
    text-align: left;
    font-size: 12px;
    text-shadow: 2px 2px 3px rgba(235, 109, 96, 0.2);
  }
`
