import Link from "next/link";
import React from "react";

const SavedButton = () => {
  return (
    <Link href="/my-plan">
      <div className="font-bold font-inter text-white">
        Saved{" "}
        <span className="rounded-full border border-[#343942] px-2.5 py-1 text-[11px] text-gray-300 ml-1">
          0
        </span>
      </div>
    </Link>
  );
};

export default SavedButton;
