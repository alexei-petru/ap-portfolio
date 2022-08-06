import styled from "styled-components";

const StyledHero = styled.section`
  /* z-index: 1; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 100vh;
  max-height: 1080px;
`;
export default StyledHero;
