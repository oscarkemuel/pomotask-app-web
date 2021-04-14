import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};

  img {
    height: 3rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 992px;
    padding: 1.5rem 2rem;
    margin: 0 auto;
  }
`;
