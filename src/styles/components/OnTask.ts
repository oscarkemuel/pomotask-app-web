import  styled  from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  span:first-child{
    font-size: 1rem;
  }

  span:last-child{
    color: var(--red);
    font-size: 1.25rem;
  }
`
