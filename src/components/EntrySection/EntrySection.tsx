import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import * as St from "./EntrySection.styled";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { IApodApiResponse } from "src/types/typesLocal";
import { apodLocalImage } from "src/data/localData";
import EntrySectionBackground from "./EntrySectionBackground";

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

const EntrySection = () => {
  const { height } = useViewportSize();

  const [entrySectionBackgroundData, setEntrySectionBackgroundData] = useState({
    title: "",
    url: "",
    locale: false,
  });

  useEffect(() => {
    const getBackgroundImage = async () => {
      try {
        const response = await fetch(
          "/api/entrySectionBackground/entrySectionBackground"
        );
        const responseData: IApodApiResponse = await response.json();
        const data: IApodData = responseData.data;
        if (data.url && data["media_type"] === "image") {
          setEntrySectionBackgroundData({ ...data, locale: false });
        } else {
          setEntrySectionBackgroundData({ ...apodLocalImage, locale: true });
        }
      } catch (error) {
        setEntrySectionBackgroundData({ ...apodLocalImage, locale: true });
      }
    };
    getBackgroundImage();
  }, []);

  return (
    <>
      <St.EntrySection height={height}>
        <EntrySectionBackground
          entrySectionBackgroundImage={entrySectionBackgroundData}
        />
        <Navbar />
        <Hero entrySectionBackgroundData={entrySectionBackgroundData} />
      </St.EntrySection>
    </>
  );
};

export default EntrySection;
