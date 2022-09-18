import { StyledContainer } from "../../styles/Container.styled";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import * as St from "./Header.styled";
import HeaderBackground from "components/Header/HeaderBackground";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { IServerResponse } from "pages/api/types";
import { apodLocalImage } from "data/localData";

export interface IApodData {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title: string;
  url: string;
}

const Header = () => {
  const { height } = useViewportSize();

  useEffect(() => {
    const getBackgroundImage = async () => {
      try {
        const response = await fetch("/api/headerBackground/headerBackground");
        const responseData: IServerResponse = await response.json();
        const data: IApodData = responseData.data;
        if (data.url && data["media_type"] === "image") {
          setHeaderBackgroundData(data);
        } else {
          setHeaderBackgroundData(apodLocalImage);
        }
      } catch (error) {
        setHeaderBackgroundData(apodLocalImage);
      }
    };
    getBackgroundImage();
  }, []);

  const [headerBackgroundData, setHeaderBackgroundData] = useState({
    title: "",
    url: "",
  });

  return (
    <>
      <St.Header height={height}>
        <HeaderBackground headerBackgroundImage={headerBackgroundData} />
        <StyledContainer>
          <Navbar />
          <Hero headerBackgroundData={headerBackgroundData} />
        </StyledContainer>
      </St.Header>
    </>
  );
};

export default Header;
