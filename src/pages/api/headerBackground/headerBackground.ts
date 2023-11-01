import { NextApiRequest, NextApiResponse } from "next";
import { IApodApiResponse } from "../../../@types/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const apiKey = process.env.APOD_KEY;
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    const serverResponse: IApodApiResponse = {
      isError: true,
      data: {},
    };
    try {
      const response = await fetch(url);
      if (response.status === 200) {
        const responseData = await response.json();
        serverResponse.isError = false;
        serverResponse.data = responseData;
      }
    } catch (err) {
      console.log(err);
    }
    return res.status(200).json(serverResponse);
  }
}
