import { APP_THEME } from "src/constants-types/constants";

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

export interface IApodApiResponse {
  isError: boolean;
  data: IApodData | object;
}

export type AppTheme = typeof APP_THEME;

//
