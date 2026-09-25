import { FitlogContext } from "@/app/contexts/FitlogContext";
import Link from "next/link";
import React, { useContext } from "react";

const SavedButton = () => {
  const { saveLater } = useContext(FitlogContext);
  return (
    <Link href="/my-plan">
      <div className="font-bold font-inter text-white">
        Saved{" "}
        <span className="rounded-full border border-[#343942] px-2.5 py-1 text-[11px] text-gray-300 ml-1">
          {saveLater.length}
        </span>
      </div>
    </Link>
  );
};

export default SavedButton;
