import { StyledContainer } from "styles/Container.styled";
import * as St from "./Footer.styled";

const Footer = () => {
  return (
    <>
      <St.Footer>
        <StyledContainer>
          <St.Form
            // action="mailto:contact@yourdomain.com"
            action="javascript:void(0)"
            method="POST"
            encType="multipart/form-data"
            name="EmailForm"
          >
            Name:
            <br />
            <input type="text" size={19} name="ContactName" />
            Message:
            <br /> <textarea name="ContactCommentt"></textarea>
            <br /> <input type="submit" value="Submit" />
          </St.Form>
          <p style={{ color: "black", fontSize: "24px" }}></p>
        </StyledContainer>
      </St.Footer>
    </>
  );
};

export default Footer;
