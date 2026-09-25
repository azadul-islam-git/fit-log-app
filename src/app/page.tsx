import FitLogLibrary from "@/components/homepage/FitLogLibrary";
import Banner from "@/components/homepage/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <section id="fitlog-library">
        <FitLogLibrary />
      </section>
    </div>
  );
}
