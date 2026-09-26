import React from "react";
import FitLibraryCard from "../shared/FitLibraryCard";
import { IExercise } from "@/types/exercise.type";

const getLibraries = async (): Promise<IExercise[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }

    const data: IExercise[] = await res.json();

    return data;
  } catch (error) {
    console.log(error, "error from fitlog library");
    return [];
  }
};

const FitLogLibrary = async () => {
  const librariesData = await getLibraries();

  return (
    <div className="container mx-auto mt-16 mb-6">
      <div className="mb-8">
        <h1 className="font-bold text-3xl font-oswald text-white mb-1">
          The Library
        </h1>
        <p className="text-[#9CA3AF] text-sm font-inter">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {librariesData.map((library: IExercise) => (
          <FitLibraryCard key={library.id} library={library} />
        ))}
      </div>
    </div>
  );
};

export default FitLogLibrary;
