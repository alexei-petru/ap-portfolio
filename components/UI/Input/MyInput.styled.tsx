import styled from "@emotion/styled";

export const MyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const MyInputLabel = styled.label`
  padding-bottom: 2px;
`;

export const MyInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  color: black;
  font: var(--text-regular-small);
`;
