import styled from 'styled-components';

export const ModalContent= styled.div`
  padding-left: 2rem;
  padding-right: 2rem;

  button {
    height: calc(1.5em + 0.75rem + 2px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.5rem !important;
  }

  button svg {
    font-size: 1rem;
    margin-left: 5px;
  }

  .modal-header {
    border: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    background-color: var(--white);

    .close {
      span {
        font-size: 37px;
      }
    }
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
    padding-left: 0;
    padding-right: 0;

    .row {
      margin: 0;

      form {
      }

      label {
        color: var(--text-grey);
      }

      .order-md-1 {
        width: 100%;
        padding-right: 0.5rem;
        padding-left: 0;

        @media (max-width: 766px) {
          padding: 0;
        }
      }

      .order-md-2 {
        width: 100%;
        padding: 0;

        button {
          width: 100%;
        }

        label {
          @media (max-width: 766px) {
            display: none;
          }
        }
      }
    }

    .listComponent {
      h1 {
        margin: 2rem 0;
        font-size: 21px;
        color: var(--text-grey);
      }
    }
  }

  .modal-footer {
    justify-content: center;
    border: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;

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
`;
