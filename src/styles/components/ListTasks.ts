import  styled  from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;

  padding: 1.5rem;
  margin: 2rem 0;
  border-bottom: 1px solid #d7d8da;
  border-radius: 0.5rem;

  background-color: var(--white);
`

export const List = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 100%;

  margin: 2rem 0;
  color: var(--black);

  .listItem{
    display: flex;
    width: 100%;
    font-weight: 600;

    .itemNumber{
      display: flex;
      align-items: center;
      background-color: var(--background);
      /* padding: 1.5rem; */
      border-radius: 0.5rem 0 0 0.5rem;
      height: 100%;
      padding: 0 1.5rem;
      margin-right: 0.2rem;
    }

    .itemInfo{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      padding: 1rem;
      background-color: var(--background);
      border-radius: 0 0.5rem 0.5rem 0;
      flex: 1;

      .name{
        margin-right: 1rem;
      }

      .infoChildren{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        p{
          margin-right: 1rem;
        }

        p:nth-child(1){
          color: var(--blue);
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
      }
    }
  }
`
