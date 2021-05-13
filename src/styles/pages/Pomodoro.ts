import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;

  padding: 1.5rem;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors.cowntDownBack};
`;
