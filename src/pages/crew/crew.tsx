import SupporterCard from "../../components/SupporterCard";
import { crewData } from "../../data/crew";

export default function Crew() {
  return (
    <div className="mx-auto max-w-8xl flex flex-col sm:flex-wrap gap-6">

            <div className="text-center">
              <h1 className="aeronaves text-4xl font-bold">About Flight Path Productions</h1>
              <p>Flight Path Productions are working to create insightful, conscientious and challenging media that seeks to find the answers to complicated questions. Driven by curiosity and an eye for detail, “Women at 36,000 Feet” is their first feature length production, set for release in 2022. </p>
            </div>


        <section className="mx-auto px-0 flex flex-col gap-6 flight-videos">
          <p className="text-center">Meet some of the team…</p>
          <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-[repeat(2,minmax(0,480px))] xl:grid-cols-[repeat(2,minmax(0,540px))] sm:justify-center">
            {crewData.map((supporter) => (
                <SupporterCard key={supporter.name} supporter={supporter} imageShape="natural" />
            ))}
          </div>
        </section>
    </div>
);
}