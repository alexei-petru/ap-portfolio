import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import MyErrorMessage from "components/UI/MyErrorMessage/MyErrorMessage";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { VscError } from "react-icons/vsc";

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

interface FormSubmitTypes {
  isMessageSended?: boolean | null;
  color?: string;
}

export const FormStatus = styled.div<FormSubmitTypes>`
  display: flex;
  justify-content: ${(props) =>
    props.isMessageSended === null ? "flex-start" : "space-between"};
  justify-content: space-between;
  width: 100%;
`;

const isMessageSendedStyle = css`
  height: 25px;
  width: 25px;
`;

export const BsCheck = styled(
  ({ isMessageSended, color, ...rest }: FormSubmitTypes) => (
    <BsCheckCircle {...rest} />
  )
)`
  ${isMessageSendedStyle}
  fill: #07ca21;
  display: ${(props) =>
    props.isMessageSended === true ? "inline-block" : "none"};
`;

export const VscErr = styled(
  ({ isMessageSended, ...rest }: FormSubmitTypes) => <VscError {...rest} />
)`
  ${isMessageSendedStyle}
  fill: #ca0707;
  display: ${(props) =>
    props.isMessageSended === false ? "inline-block" : "none"};
`;

const spin = keyframes`
    100% { 
        transform:rotate(360deg); 
    } 
`;

export const AiOutlineLoading3Quart = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 0.9s ease infinite;
  fill: blue;
  ${isMessageSendedStyle}
  /* padding: 5px; */
`;

export const FormDeliverMessage = styled(MyErrorMessage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.color};
`;
