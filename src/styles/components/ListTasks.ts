import  styled  from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;

  padding: 1.5rem;
  border-radius: 0.5rem;

  background-color: ${props => props.theme.colors.cowntDownBack};
`

export const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  margin: 2rem 0;
  color: var(--black);

  h3{
    color: ${props => props.theme.colors.textError};
    padding-bottom: 0.2rem;
    border-bottom: solid 1px var(--red);
  }

  .listItem{
    display: flex;
    width: 100%;
    font-weight: 600;
    margin: 0.2rem 0;

    .itemNumber{
      min-width: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${props => props.theme.colors.background};
      border-radius: 0.5rem 0 0 0.5rem;
      margin-right: 0.2rem;
      border: solid 1px var(--text-highlight);
    }

    .itemInfo{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      padding: 1rem;
      background-color: ${props => props.theme.colors.background};
      border: solid 1px var(--text-highlight);
      border-radius: 0 0.5rem 0.5rem 0;
      flex: 1;

      .name{
        text-align: center;
        margin-right: 1rem;
      }

      .infoChildren{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        p{
          margin: 0.4rem 1rem 0 0;
          @media (max-width: 349px) {
            margin: 0.4rem 1rem 0 1rem;
          }
        }

        p:nth-child(1){
          color: ${props => props.theme.colors.textDate};
        }

        p:nth-child(2){
          color: var(--white);
          background-color: var(--green);
          padding: 0.1rem 2rem;
          border-radius: 0.5rem;
        }

        button{
          margin-left: 1rem;
        }

        @media (max-width: 661px) {
          margin-top: 1rem;

          button{
            margin: 1rem 0 0 0 ;
            width: 100%;
          }
        }
      }

      @media (max-width: 661px) {
        flex-direction: column;
      }
    }
  }
`

export const Title = styled.h1`
  margin: 2rem 0 1rem 0;
`
