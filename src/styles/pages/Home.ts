import styled from 'styled-components';

export const Container = styled.div`
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NumbersContainer = styled.div`
  min-width: 60%;

  .progress {
    .progress-bar {
      transition: width 1s;
    }
  }
`;

export const PendingTask = styled.div`
  margin: 1rem 0 1rem 0;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .number {
    color: var(--red);
    font-size: 1.25rem;
  }
`;
