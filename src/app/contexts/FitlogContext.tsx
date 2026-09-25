"use client";
import { IExercise } from "@/types/exercise.type";
import React, { createContext, ReactNode, useState } from "react";

interface IFitlogContext {
  addPlan: IExercise[];
  saveLater: IExercise[];
  setAddPlan: React.Dispatch<React.SetStateAction<IExercise[]>>;
  setSaveLater: React.Dispatch<React.SetStateAction<IExercise[]>>;
}

export const FitlogContext = createContext<IFitlogContext>({
  addPlan: [],
  saveLater: [],
  setAddPlan: () => {},
  setSaveLater: () => {},
});

const FitlogContextProvider = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<IExercise[]>([]);
  const [saveLater, setSaveLater] = useState<IExercise[]>([]);

  const sharedData = {
    addPlan,
    setAddPlan,
    saveLater,
    setSaveLater,
  };

  return (
    <FitlogContext.Provider value={sharedData}>
      {children}
    </FitlogContext.Provider>
  );
};

export default FitlogContextProvider;
