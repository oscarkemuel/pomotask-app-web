import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-width: 500px;
  margin: 0 auto;

  margin-top: 1rem;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors.cowntDownBack};

  .form-row {
    width: 100%;
  }

  .form-group {
    width: 100%;
  }

  h2 {
    text-align: center;
    font-size: 22px;
    margin-bottom: 2rem;
  }

  button {
    width: 100%;
  }
`;
