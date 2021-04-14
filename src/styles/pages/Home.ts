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
`;

export const PendingTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1rem 0 2rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  span:last-child {
    color: var(--red);
    font-size: 1.25rem;
  }
`;
