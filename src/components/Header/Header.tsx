import { StyledContainer } from "../../styles/Container.styled";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import * as St from "./Header.styled";
import HeaderBackground from "src/components/Header/HeaderBackground";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { IApodApiResponse } from "src/@types/types";
import { apodLocalImage } from "src/data/localData";

export interface IApodData {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title: string;
  url: string;
  locale: boolean;
}

const Header = () => {
  const { height } = useViewportSize();

  const [headerBackgroundData, setHeaderBackgroundData] = useState({
    title: "",
    url: "",
    locale: false,
  });

  useEffect(() => {
    const getBackgroundImage = async () => {
      try {
        const response = await fetch("/api/headerBackground/headerBackground");
        const responseData: IApodApiResponse = await response.json();
        const data: IApodData = responseData.data;
        if (data.url && data["media_type"] === "image") {
          setHeaderBackgroundData({ ...data, locale: false });
        } else {
          setHeaderBackgroundData({ ...apodLocalImage, locale: true });
        }
      } catch (error) {
        setHeaderBackgroundData({ ...apodLocalImage, locale: true });
      }
    };
    getBackgroundImage();
  }, []);

  return (
    <>
      <St.Header height={height}>
        <St.HeaderNavbarBackground />
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
