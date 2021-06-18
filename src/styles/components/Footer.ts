import styled from 'styled-components';

export const Container = styled.footer`
  margin-top: 4rem;
  background: ${(props) => props.theme.colors.primary};

  img {
    height: 3rem;
    margin-top: 0.5rem;
  }

  .links {
    display: flex;
    gap: 0.5rem;
    svg {
      font-size: 2.5rem;
    }
  }

  .switch {
    margin-top: 1.5rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 992px;
    padding: 0.8rem 2rem 0.8rem 2rem;
    margin: 0 auto;

    @media (max-width: 500px) {
      flex-direction: column;
      img {
        display: none;
      }
      .links {
        margin-top: 1rem;
      }
    }
  }

  p {
    text-align: center;

    b:first-child {
      color: var(--blue);
    }

    b:last-child {
      color: var(--red);
    }
  }
`;
