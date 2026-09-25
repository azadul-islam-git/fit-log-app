import { FitlogContext } from "@/app/contexts/FitlogContext";
import Link from "next/link";
import React, { useContext } from "react";

const PlanButton = () => {
  const { addPlan } = useContext(FitlogContext);

  return (
    <Link href="/my-plan">
      <div className="font-bold font-inter text-white">
        Plan{" "}
        <span className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[11px] font-bold text-black ml-1">
          {addPlan.length}
        </span>
      </div>
    </Link>
  );
};

export default PlanButton;
