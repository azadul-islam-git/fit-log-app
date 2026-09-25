import LibraryDetails from "@/components/shared/LibraryDetails";
import { IExercise } from "@/types/exercise.type";
import React from "react";

interface IFitlogDetailsProps {
  params: Promise<{
    fitlogId: string;
  }>;
}

const getLibraries = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error, "error from fitlog details page");
    return [];
  }
};

const FitlogDetailsPage = async ({ params }: IFitlogDetailsProps) => {
  const { fitlogId } = await params;
  const librariesData = await getLibraries();

  const library = librariesData.find(
    (library: IExercise) => String(library.id) === String(fitlogId),
  ) as IExercise;

  return <LibraryDetails library={library} />;
};

export default FitlogDetailsPage;
