import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;

  padding: 1.5rem;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme.colors.cowntDownBack};

  .alert {
    width: 100%;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  margin: 2rem 0;
  color: var(--black);

  h3 {
    color: ${(props) => props.theme.colors.textError};
    padding-bottom: 0.2rem;
    border-bottom: solid 1px var(--red);
  }

  .listItem {
    display: flex;
    width: 100%;
    font-weight: 600;
    margin: 0.2rem 0;

    .itemNumber {
      min-width: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.colors.background};
      border-radius: 0.5rem 0 0 0.5rem;
      margin-right: 0.2rem;
      border: solid 1px #c2cbe2;
    }

    .itemInfo {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      padding: 1rem;
      background-color: ${(props) => props.theme.colors.background};
      border: solid 1px #c2cbe2;
      border-radius: 0 0.5rem 0.5rem 0;
      flex: 1;

      .name {
        text-align: center;
        width: 130px;
        button {
          width: 100%;
          color: ${(props) => props.theme.colors.text};
          background-color: transparent;
          :hover {
            color: var(--red);
            text-decoration: underline;
          }
        }

        @media (max-width: 768px) {
          margin-bottom: 1rem;
        }
      }

      .infoChildren {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 1rem;
          margin: 0.4rem 1rem 0 0;
          @media (max-width: 349px) {
            margin: 0.4rem 1rem 0 1rem;
          }
        }

        div:nth-child(1) {
          color: ${(props) => props.theme.colors.textDate};
        }

        div:nth-child(2) {
          min-width: 82px;
          color: var(--white);
          padding: 0.8rem 2rem;
          border-radius: 0.5rem;
          text-align: center;
        }

        button {
          margin-left: 1rem;
        }

        @media (max-width: 768px) {
          margin-top: 1rem;

          button {
            margin: 1rem 0 0 0;
            width: 100%;
          }
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }
`;

export const Title = styled.div`
  margin: 1.5rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: var(--red);
  }
`;
