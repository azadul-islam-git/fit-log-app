import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiDetail } from "react-icons/bi";
import { FaCheck, FaRegClock, FaRegStar } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { TbFlameFilled } from "react-icons/tb";

const MyPlanPage = () => {
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
              2
            </p>
          </div>

          <div className="my-4 w-px bg-base-content/10 sm:my-6" />

          <div className="flex-1 px-4 py-4 sm:px-8 sm:py-6">
            <p className="text-xs text-[#8A92A0] sm:text-sm">Minutes</p>
            <p className="mt-1 text-xl font-bold text-white sm:text-2xl">23</p>
          </div>

          <div className="my-4 w-px bg-base-content/10 sm:my-6" />

          <div className="flex-1 px-4 py-4 sm:px-8 sm:py-6">
            <p className="text-xs text-[#8A92A0] sm:text-sm">Calories</p>
            <p className="mt-1 text-xl font-bold text-white sm:text-2xl">190</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="tabs tabs-box">
            <input
              type="radio"
              name="my_tabs_1"
              className="tab"
              aria-label="Today's Plan"
              defaultChecked
            />
            <input
              type="radio"
              name="my_tabs_1"
              className="tab"
              aria-label="Saved"
            />
          </div>

          {/* sort */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-white">
            <fieldset className="fieldset flex flex-row items-center gap-2">
              <span className="text-white whitespace-nowrap">Sort By</span>
              <select
                defaultValue="Pick a browser"
                className="select outline-none! focus:outline-none!"
              >
                <option>Chrome</option>
                <option>FireFox</option>
                <option>Safari</option>
              </select>
            </fieldset>
          </div>
        </div>

        {/* Content area */}
        {/* no content */}
        <div className="mt-4 flex min-h-80 items-center justify-center rounded-2xl border border-dashed border-base-content/15 px-4 py-16 sm:min-h-95 bg-[#111317]/50">
          <div className="text-center">
            <h2 className="text-white font-bold tracking-wide sm:text-lg md:text-[20px] font-oswald">
              NOTHING HERE YET
            </h2>
            <p className="mt-2 max-w-xs text-sm text-base-content/60 sm:max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <Link href="/">
              <button className="btn btn-sm mt-5 border-none bg-lime-400 px-6 py-2.5 font-semibold normal-case text-neutral-900 hover:bg-lime-300 rounded-full">
                Go to workouts
              </button>
            </Link>
          </div>
        </div>

        {/* when there is content */}
        {/* todays plan content */}
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#111317] p-3 sm:p-4">
          <div className="flex items-center gap-4 min-w-0">
            <Image
              src=""
              alt="Russian Twist"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover shrink-0"
            />
            <div className="min-w-0">
              <h3 className="text-white font-bold text-sm sm:text-base tracking-wide truncate">
                RUSSIAN TWIST
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5 truncate">
                Medicine Ball
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <FaRegClock className="w-3.5 h-3.5 text-gray-400" />8 min
                </span>
                <span className="flex items-center gap-1">
                  <TbFlameFilled className="w-3.5 h-3.5 text-gray-500 -scale-x-100" />
                  70 kcal
                </span>
                <span className="flex items-center gap-1">
                  <FaRegStar className="w-3.5 h-3.5 text-yellow-400" />
                  4.1
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button className="rounded-full flex items-center gap-1.5 border border-gray-600 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white whitespace-nowrap">
              <BiDetail className="w-3.5 h-3.5" />
              View Details
            </button>
            <button className="flex items-center gap-1.5 rounded-full bg-lime-400 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-black whitespace-nowrap">
              <FaCheck className="w-3.5 h-3.5" />
              Mark as Done
            </button>
            <button className="text-gray-400 p-1">
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* saved content */}
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#111317] p-3 sm:p-4">
          <div className="flex items-center gap-4 min-w-0">
            <Image
              src=""
              alt="Russian Twist"
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl object-cover shrink-0"
            />
            <div className="min-w-0">
              <h3 className="text-white font-bold text-sm sm:text-base tracking-wide truncate">
                RUSSIAN TWIST
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5 truncate">
                Medicine Ball
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center gap-1">
                  <FaRegClock className="w-3.5 h-3.5 text-gray-400" />8 min
                </span>
                <span className="flex items-center gap-1">
                  <TbFlameFilled className="w-3.5 h-3.5 text-gray-500 -scale-x-100" />
                  70 kcal
                </span>
                <span className="flex items-center gap-1">
                  <FaRegStar className="w-3.5 h-3.5 text-yellow-400" />
                  4.1
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button className="rounded-full flex items-center gap-1.5 border border-gray-600 px-3 sm:px-4 py-2 text-xs sm:text-sm text-white whitespace-nowrap">
              <BiDetail className="w-3.5 h-3.5" />
              View Details
            </button>
            <button className="text-gray-400 p-1">
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
