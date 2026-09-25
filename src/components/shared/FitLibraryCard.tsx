import { IExercise } from "@/types/exercise.type";
import Image from "next/image";
import React from "react";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { TbFlameFilled } from "react-icons/tb";

const FitLibraryCard = ({ library }: { library: IExercise }) => {
  const {
    image,
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = library;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#292c33] bg-[#15171c] text-white shadow-lg">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        <div className="mb-4 flex flex-wrap gap-2">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="font-heading text-lg font-extrabold uppercase tracking-wide">
          {name}
        </h2>

        {/* Equipment */}
        <p className="mt-1 text-sm text-gray-400">{equipment}</p>

        {/* Divider */}
        <div className="my-4 border-t border-[#292c33]" />

        {/* Stats */}
        <div className="flex items-center gap-5 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <FaRegClock className="text-gray-500" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <TbFlameFilled className="text-gray-500 -scale-x-100" />
            <span>{caloriesBurned}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaRegStar className="text-gray-500" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitLibraryCard;
