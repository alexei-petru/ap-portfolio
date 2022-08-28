import styled from "@emotion/styled";

export const MyTexareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MyTextareaLabel = styled.label`
  padding-bottom: 2px;
`;

export const MyTextarea = styled.textarea`
  resize: none;
  color: black;
  font: var(--text-regular-small);
  padding: 3px;
`;
