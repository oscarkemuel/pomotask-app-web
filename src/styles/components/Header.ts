import styled from 'styled-components';

interface Props {
  ItemOn: boolean;
}

export const Container = styled.header`
  background: ${(props) => props.theme.colors.primary};

  img {
    height: 3rem;
    margin-top: 0.5rem;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  .switch {
    margin-top: 1.5rem;
  }

  nav {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    max-width: 992px;
    padding: 0 2rem 1rem 2rem;
    margin: 0 auto;
  }
`;

export const Linked = styled.div`
  cursor: pointer;
  border-top: 3px solid
    ${(props: Props) => (props.ItemOn ? 'var(--blue)' : 'var(--gray-line)')};
  color: ${(props: Props) =>
    props.ItemOn ? 'var(--blue)' : 'var(--gray-line)'};
  padding-top: 1rem;
  min-width: 3rem;
  display: flex;
  justify-content: center;

  svg {
    font-size: 1.8rem;
  }

  :hover {
    border-color: var(--blue);
    color: var(--blue);
  }
`;
