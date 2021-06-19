import styled from 'styled-components';

export const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .row {
    margin: 0 0 1rem 0;
  }

  .card-header {
    color: var(--title);
    font-weight: bold;
  }

  .card-body {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: var(--red);
      font-size: 26px;
      font-weight: bold;
    }
  }
`;

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
