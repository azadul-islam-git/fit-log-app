"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { FaCheck, FaRegClock, FaRegStar } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { TbFlameFilled } from "react-icons/tb";
import { FitlogContext } from "../contexts/FitlogContext";
import toast from "react-hot-toast";

const MyPlanPage = () => {
  const { addPlan, setAddPlan, saveLater, setSaveLater } =
    useContext(FitlogContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("Duration");

  const handleMarkAsDone = (id: number) => {
    setCompletedExercises([...completedExercises, id]);
    toast.success("Workout marked as done!");
  };

  const sortedExercises = [...addPlan].sort((a, b) => {
    if (sortBy === "Duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "Calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "Rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <div className="min-h-fit bg-base-100 text-base-content">
      <div className="mx-auto container px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
        {/* Header */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-3xl font-oswald text-white">
          MY PLAN
        </h1>
        <p className="mt-2 text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats bar */}
        <div className="mt-6 flex items-stretch rounded-2xl border border-accent bg-base-200">
          <div className="flex-1 px-4 py-4 sm:px-8 sm:py-6">
            <p className="text-xs text-[#8A92A0] sm:text-sm">Exercises</p>
            <p className="mt-1 text-xl font-bold text-lime-400 sm:text-2xl">
              {addPlan.length}
            </p>
          </div>

          <div className="my-4 w-px bg-base-content/10 sm:my-6" />

          <div className="flex-1 px-4 py-4 sm:px-8 sm:py-6">
            <p className="text-xs text-[#8A92A0] sm:text-sm">Minutes</p>
            <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {addPlan.reduce(
                (total, exercise) => total + exercise.duration,
                0,
              )}
            </p>
          </div>

          <div className="my-4 w-px bg-base-content/10 sm:my-6" />

          <div className="flex-1 px-4 py-4 sm:px-8 sm:py-6">
            <p className="text-xs text-[#8A92A0] sm:text-sm">Calories</p>
            <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {addPlan.reduce(
                (total, exercise) => total + exercise.caloriesBurned,
                0,
              )}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="tabs tabs-box">
            <button
              className={`tab ${activeTab === "plan" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("plan")}
            >
              Today&apos;s Plan
            </button>

            <button
              className={`tab ${activeTab === "saved" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("saved")}
            >
              Saved
            </button>
          </div>

          {/* sort */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-white">
            <fieldset className="fieldset flex flex-row items-center gap-2">
              <span className="text-white whitespace-nowrap">Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="select outline-none! focus:outline-none!"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>
            </fieldset>
          </div>
        </div>

        {activeTab === "plan" && (
          <>
            {addPlan.length > 0 ? (
              <div className="mt-4 space-y-3">
                {sortedExercises.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-[#111317] p-3 sm:p-4"
                  >
                    {/* Left */}
                    <div className="flex min-w-0 items-center gap-4">
                      <Image
                        src={exercise.image}
                        alt={exercise.name}
                        width={140}
                        height={80}
                        className="h-16 w-28 shrink-0 rounded-xl object-cover sm:h-20 sm:w-32"
                      />

                      <div className="min-w-0">
                        <h3 className="truncate text-[16px] font-bold tracking-wide font-oswald text-white sm:text-base">
                          {exercise.name}
                        </h3>

                        <p className="mt-0.5 truncate text-xs text-gray-400 sm:text-sm">
                          {exercise.equipment}
                        </p>

                        <div className="mt-2 flex items-center gap-3 text-xs text-gray-300 sm:text-sm">
                          <span className="flex items-center gap-1">
                            <FaRegClock className="h-3.5 w-3.5 text-gray-400" />
                            {exercise.duration} min
                          </span>

                          <span className="flex items-center gap-1">
                            <TbFlameFilled className="h-3.5 w-3.5 text-gray-500" />
                            {exercise.caloriesBurned} kcal
                          </span>

                          <span className="flex items-center gap-1">
                            <FaRegStar className="h-3.5 w-3.5 text-yellow-400" />
                            {exercise.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                      <Link
                        href={`/fitlog/${exercise.id}`}
                        className="flex items-center gap-1.5 rounded-full border border-gray-600 px-3 py-2 text-xs text-white whitespace-nowrap sm:px-4 sm:text-sm"
                      >
                        <BiDetail className="h-3.5 w-3.5" />
                        View Details
                      </Link>

                      <button
                        onClick={() => handleMarkAsDone(exercise.id)}
                        disabled={completedExercises.includes(exercise.id)}
                        className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm ${
                          completedExercises.includes(exercise.id)
                            ? "cursor-default bg-gray-600 text-gray-300"
                            : "cursor-pointer bg-lime-400 text-black"
                        }`}
                      >
                        <FaCheck className="h-3.5 w-3.5" />

                        {completedExercises.includes(exercise.id)
                          ? "Completed"
                          : "Mark as Done"}
                      </button>

                      <button
                        onClick={() => {
                          setAddPlan(
                            addPlan.filter((item) => item.id !== exercise.id),
                          );

                          toast.success("Exercise removed from your plan!");
                        }}
                        className="cursor-pointer p-1 text-gray-400 hover:text-white"
                      >
                        <FiX className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-base-content/15 bg-[#111317]/50 px-4 py-16 sm:min-h-95">
                <div className="text-center">
                  <h2 className="font-oswald font-bold tracking-wide text-white sm:text-lg md:text-[20px]">
                    NOTHING HERE YET
                  </h2>

                  <p className="mt-2 max-w-xs text-sm text-base-content/60 sm:max-w-sm">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link
                    href="/"
                    className="btn mt-5 rounded-full border-none bg-lime-400 px-6 py-2.5 font-semibold normal-case text-neutral-900 hover:bg-lime-300"
                  >
                    Go to workouts
                  </Link>
                </div>
              </div>
            )}
          </>
        )}

        {/* saved content */}
        {activeTab === "saved" && (
          <>
            {saveLater.length > 0 ? (
              <div className="mt-4 space-y-3">
                {saveLater.map((exercise) => (
                  <div
                    key={exercise.id}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-[#111317] p-3 sm:p-4"
                  >
                    {/* Left */}
                    <div className="flex min-w-0 items-center gap-4">
                      <Image
                        src={exercise.image}
                        alt={exercise.name}
                        width={140}
                        height={80}
                        className="h-16 w-28 shrink-0 rounded-xl object-cover sm:h-20 sm:w-32"
                      />

                      <div className="min-w-0">
                        <h3 className="truncate text-[16px] font-bold tracking-wide font-oswald text-white sm:text-base">
                          {exercise.name}
                        </h3>

                        <p className="mt-0.5 truncate text-xs text-gray-400 sm:text-sm">
                          {exercise.equipment}
                        </p>

                        <div className="mt-2 flex items-center gap-3 text-xs text-gray-300 sm:text-sm">
                          <span className="flex items-center gap-1">
                            <FaRegClock className="h-3.5 w-3.5 text-gray-400" />
                            {exercise.duration} min
                          </span>

                          <span className="flex items-center gap-1">
                            <TbFlameFilled className="h-3.5 w-3.5 text-gray-500" />
                            {exercise.caloriesBurned} kcal
                          </span>

                          <span className="flex items-center gap-1">
                            <FaRegStar className="h-3.5 w-3.5 text-yellow-400" />
                            {exercise.rating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                      <Link
                        href={`/fitlog/${exercise.id}`}
                        className="flex items-center gap-1.5 rounded-full border border-gray-600 px-3 py-2 text-xs text-white whitespace-nowrap sm:px-4 sm:text-sm"
                      >
                        <BiDetail className="h-3.5 w-3.5" />
                        View Details
                      </Link>

                      <button
                        onClick={() => {
                          setSaveLater(
                            saveLater.filter((item) => item.id !== exercise.id),
                          );

                          toast.success("Exercise removed from Save Later!");
                        }}
                        className="cursor-pointer p-1 text-gray-400 hover:text-white"
                      >
                        <FiX className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-base-content/15 bg-[#111317]/50 px-4 py-16 sm:min-h-95">
                <div className="text-center">
                  <h2 className="font-oswald font-bold tracking-wide text-white sm:text-lg md:text-[20px]">
                    NO SAVED WORKOUTS
                  </h2>

                  <p className="mt-2 max-w-xs text-sm text-base-content/60 sm:max-w-sm">
                    Save workouts from the library and they&apos;ll appear here.
                  </p>

                  <Link
                    href="/"
                    className="btn mt-5 rounded-full border-none bg-lime-400 px-6 py-2.5 font-semibold normal-case text-neutral-900 hover:bg-lime-300"
                  >
                    Go to workouts
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;
