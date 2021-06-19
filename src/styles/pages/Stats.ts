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
