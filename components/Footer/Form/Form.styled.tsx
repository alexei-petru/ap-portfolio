import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  background-color: gray;
  padding: 10px 20px;
  border-radius: 5px;
  min-width: 300px;
  max-width: 350px;
  height: var(--contact-item-size);
  background: #120449;
  background: linear-gradient(15deg, #3e7134 15%, #120449 92%);

  @media (max-width: 735px) {
    margin-bottom: 70px;
    /* margin-left: -18px; */
  } ;
`;

export const buttonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
