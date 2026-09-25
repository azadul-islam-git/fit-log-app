"use client";
import { FitlogContext } from "@/app/contexts/FitlogContext";
import { IExercise } from "@/types/exercise.type";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FiBookmark } from "react-icons/fi";

const SaveLaterButton = ({ library }: { library: IExercise }) => {
  const { saveLater, setSaveLater } = useContext(FitlogContext);

  const handleSaveLater = () => {
    const alreadySaved = saveLater.some(
      (exercise) => exercise.id === library.id,
    );

    if (alreadySaved) {
      toast.error("This exercise is already saved!");
      return;
    }

    setSaveLater([...saveLater, library]);
    toast.success("Saved for later!");
  };

  return (
    <div>
      <button
        onClick={handleSaveLater}
        className="btn btn-outline h-9 min-h-9 border-[#303640] px-4 text-sm font-normal text-gray-300 hover:border-[#303640] hover:bg-[#181b20]"
      >
        <FiBookmark className="h-3.5 w-3.5" />
        Save for later
      </button>
    </div>
  );
};

export default SaveLaterButton;
