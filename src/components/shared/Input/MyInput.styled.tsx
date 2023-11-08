import styled from "@emotion/styled";
import { Input, InputProps, createPolymorphicComponent } from "@mantine/core";

export const MyInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MyInputLabel = styled.label`
  padding-bottom: 2px;
`;

export const _MyInput = styled(Input)`
  padding: 5px;
  border-radius: 5px;
  color: black;
  font: var(--text-regular-small);
`;

export const MyInput = createPolymorphicComponent<"input", InputProps>(
  _MyInput
);
