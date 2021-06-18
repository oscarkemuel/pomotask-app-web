import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;

  width: 100%;

  margin-top: 1rem;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors.cowntDownBack};

  h2 {
    text-align: center;
    font-size: 22px;
    margin-bottom: 2rem;
  }

  h3 {
    b {
      color: var(--red);
    }
    font-size: 20px;
  }

  .info {
    margin: 1.5rem 0;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--gray-line);
  }

  ol {
    li {
      margin-left: 3rem;
    }
    margin: 0;
  }

  p {
    text-align: justify;
  }
`;
