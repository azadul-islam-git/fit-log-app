import Link from "next/link";
import React from "react";

const PlanButton = () => {
  return (
    <Link href="/my-plan">
      <div className="font-bold font-inter text-white">
        Plan{" "}
        <span className="rounded-full bg-[#ccff00] px-2.5 py-1 text-[11px] font-bold text-black ml-1">
          0
        </span>
      </div>
    </Link>
  );
};

export default PlanButton;
