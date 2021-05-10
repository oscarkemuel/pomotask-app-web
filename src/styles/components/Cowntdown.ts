import styled from 'styled-components';

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};

  div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${(props) => props.theme.colors.cowntDownBack};
    box-sizing: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  }

  .points {
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
  }

  .number {
    width: 71.5px;
  }

  div > div span {
    flex: 1;
  }

  div > div span:first-child {
    border-right: 1px solid ${(props) => props.theme.colors.background};
  }

  div > div span:last-child {
    border-left: 1px solid ${(props) => props.theme.colors.background};
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.25rem;
  }
`;

export const CountdownButton = styled.button`
  width: 100%;
  height: 5rem;

  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;

  background: var(--blue);
  color: var(--white);

  font-size: 1.25rem;
  font-weight: 600;

  transition: background-color 0.2s;
  border-bottom: 4px solid transparent;

  svg {
    height: 1rem;
    margin-left: 0.5rem;
  }

  &:not(:disabled):hover {
    background: var(--blue-dark);
  }

  .countdownButtonActive {
    background: var(--white);
    color: var(--title);
  }

  .countdownButtonActive:not(:disabled):hover {
    background: var(--red);
    color: var(--white);
  }

  .countdownButton:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
    border-bottom-color: var(--green);
  }
`;
