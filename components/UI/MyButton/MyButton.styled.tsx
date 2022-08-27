import styled from "@emotion/styled";

export const MyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MyButton = styled.button`
  background-color: #120449;
  box-shadow: 0 2px 5px rgb(0 40 255 / 90%);
  padding: 5px;
  border-radius: 2px;
  font-size: 17px;
  font-weight: 400;
  font-family: "roboto";
  cursor: pointer;

  &:hover {
    background-color: #20009f;
  }
`;
