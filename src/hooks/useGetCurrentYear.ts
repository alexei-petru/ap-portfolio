import { useEffect, useState } from "react";

export const useGetCurrentYear = (): number => {
  const [currentYear, setCurrentYear] = useState(2022);
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setCurrentYear(year);
  }, []);
  return currentYear;
};
