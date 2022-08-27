import styled from "@emotion/styled";

type CardProps = {
  thumbnail: string;
};

export const Card = styled.div<CardProps>`
  position: relative;
  max-width: 100%;
  width: 250px;
  display: flex;
  flex-flow: column;
  background-color: #ecf0f1;
  background: hsla(0, 0%, 100%, 0.3);
  border-radius: 0.2rem;
  user-select: text;
  transition: 0.25s ease-in-out;
  box-shadow: 5px 3px 30px black;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 10px -10px rgba(#7f8c8d, 1);
    transform: scale(1.08);
  }

  ::before {
    content: "";
    margin: 0px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(20px) brightness(0.75);
    background: url(${(props) => props.thumbnail}) no-repeat top/ 250%;
  }
`;

export const CardContent = styled.div`
  height: 100%;
`;

export const CardThumbnail = styled.div`
  display: flex;
  height: 40%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 1rem 0;
`;

export const CardImg = styled.img`
  width: 220px;
  height: 150px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 7px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  user-select: none;
`;

export const CardTextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  width: 100%;
  height: 60%;
  padding: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
  border-top: 1px solid rgba(#ecf0f1, 0.2);
  background-color: rgba(0, 0, 0, 0.2);
  color: #ecf0f1;
  justify-items: center;
`;

export const CardTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

export const CardDescription = styled.div`
  color: rgba(#ecf0f1, 0.8);
  font-size: 1rem;
  padding: 0.5rem 0;
  font-weight: 400;
  text-align: start;
`;

export const CardTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* justify-content: center; */
`;

export const CardTag = styled.span`
  margin: 0.15rem;
  padding: 0.25rem 0.75rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 2rem;
`;

type cardButtonsProps = {
  isDisabled?: boolean;
  isCardHover?: boolean;
};

export const ButtonsWrapper = styled.div<cardButtonsProps>`
  --btn-size: 49px;
  top: calc(50% - calc(var(--btn-size)) / 2);
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  z-index: 99;

  a {
    width: var(--btn-size);
    height: var(--btn-size);
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    border: none;
    transition: margin, opacity, 0.25s ease-in-out;
    opacity: ${(props) => (props.isCardHover ? "1" : "0")};
  }
`;

const gitLock = "github-lock.png";
const gitOpen = "github.png";

export const LinkGit = styled.a<cardButtonsProps>`
  background-color: gray;
  background: url(${(props) => (props.isDisabled ? gitLock : gitOpen)})
    no-repeat center / contain;
  color: red;
  margin-left: ${(props) =>
    props.isCardHover ? "0px" : "calc(0px - var(--btn-size))"};
`;

const liveLock = "github-lock.png";
const liveOpen = "github.png";
export const LinkLive = styled.a<cardButtonsProps>`
  background: url(${(props) => (props.isDisabled ? liveLock : liveOpen)})
    no-repeat center / contain;
  color: green;
  margin-right: ${(props) =>
    props.isCardHover ? "0px" : "calc(0px - var(--btn-size))"};
`;
