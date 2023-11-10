import styled from "@emotion/styled";
import { Textarea } from "@mantine/core";

export const MyTexareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MyTextareaLabel = styled.label`
  padding-bottom: 2px;
`;

export const MyTextarea = styled(Textarea)`
  resize: none;
  color: black;
  font: var(--text-regular-small);
  padding: 3px;
`;
