import Image from "next/image";
import { IExercise } from "@/types/exercise.type";
import AddPlanButton from "../button/AddPlanButton";
import SaveLaterButton from "../button/SaveLaterButton";

const LibraryDetails = ({ library }: { library: IExercise }) => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* LEFT - IMAGE */}
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src={library.image}
              alt={library.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT - DETAILS */}
          <div className="flex flex-col">
            {/* Title */}
            <h1 className="text-4xl font-extrabold uppercase tracking-tight sm:text-3xl font-oswald">
              {library.name}
            </h1>

            {/* Description */}
            <p className="mt-2 text-[16px] leading-relaxed text-gray-400">
              {library.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-4 flex flex-wrap gap-2">
              {library.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-lime-400 px-3 py-1 text-[12px] font-semibold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#252932] bg-[#15181e]">
              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                <span className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                  Equipment
                </span>
                <span className="text-sm text-gray-200 ">
                  {library.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                <span className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                  Difficulty
                </span>
                <span className="text-sm text-gray-200">
                  {library.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                <span className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                  Sets
                </span>
                <span className="text-sm text-gray-200">{library.sets}</span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                <span className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                  Reps
                </span>
                <span className="text-sm text-gray-200">{library.reps}</span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                <span className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                  Duration
                </span>
                <span className="text-sm text-gray-200">
                  {library.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#252932] px-4 py-3">
                <span className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                  Calories
                </span>
                <span className="text-sm text-gray-200">
                  {library.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[12px] font-bold uppercase tracking-wide text-gray-400">
                  Rating
                </span>
                <span className="text-sm text-gray-200">{library.rating}</span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <h2 className="text-[16px] font-extrabold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-3 space-y-3">
                {library.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[11px] leading-relaxed text-gray-400"
                  >
                    <span className="shrink-0 text-gray-500 text-sm">
                      {index + 1}.
                    </span>

                    <span className="text-sm">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <AddPlanButton library={library} />
              <SaveLaterButton library={library} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryDetails;
