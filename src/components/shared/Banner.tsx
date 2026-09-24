import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-col md:flex-row min-h-130 max-w-366.25 items-center overflow-hidden rounded-2xl border border-[#252932] bg-[#15171c]">
        {/* Content */}
        <div className="w-full px-7 py-14 sm:px-10 lg:w-[55%] lg:px-16">
          <p className="mb-7 text-sm font-bold tracking-wider text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-175 text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-[60px] font-oswald">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-7 max-w-162.5 text-base leading-7 text-[#9ca3af] sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          <button className="btn mt-8 h-12 min-h-12 rounded-lg border-0 bg-[#ccff00] px-7 text-sm font-bold text-black hover:bg-[#b8eb00]">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Image */}
        <div className="hidden h-full w-[45%] items-center justify-center lg:flex">
          <Image
            src={bannerImg}
            alt="FitLog workout"
            width={420}
            height={420}
            priority
            className="h-auto w-87.5 object-contain xl:w-100"
          />
        </div>

        {/* Mobile Image */}
        <div className="flex w-full justify-center pb-10 lg:hidden">
          <Image
            src={bannerImg}
            alt="FitLog workout"
            width={300}
            height={300}
            priority
            className="w-60 object-contain sm:w-70"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
