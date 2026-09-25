"use client";
import { FitlogContext } from "@/app/contexts/FitlogContext";
import { IExercise } from "@/types/exercise.type";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FiCalendar } from "react-icons/fi";

const AddPlanButton = ({ library }: { library: IExercise }) => {
  const { addPlan, setAddPlan } = useContext(FitlogContext);

  const handleAddPlan = () => {
    const alreadyAdded = addPlan.some((exercise) => exercise.id === library.id);

    if (alreadyAdded) {
      toast.error("This exercise is already in today's plan!");
      return;
    }

    setAddPlan([...addPlan, library]);
    toast.success("Added to today's plan!");
  };

  return (
    <div>
      <button
        onClick={handleAddPlan}
        className="btn h-9 min-h-9 border-none bg-lime-400 px-4 text-sm font-semibold text-black 
      hover:bg-lime-300"
      >
        <FiCalendar className="h-3.5 w-3.5" />
        Add to today&apos;s plan
      </button>
    </div>
  );
};

export default AddPlanButton;
