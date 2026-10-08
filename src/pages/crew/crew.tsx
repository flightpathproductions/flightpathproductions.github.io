import SupporterCard from "../../components/SupporterCard";
import { crewData } from "../../data/crew";

export default function Crew() {
  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-8 lg:px-9 py-10 flex flex-col gap-6">

            <div className="text-center">
              <h1 className="aeronaves text-4xl font-bold">About Flight Path Productions</h1>
              <p>Flight Path Productions are working to create insightful, conscientious and challenging media that seeks to find the answers to complicated questions. Driven by curiosity and an eye for detail, “Women at 36,000 Feet” is their first feature length production, set for release in 2022. </p>
            </div>


        <section className="mx-auto max-w-7xl px-3 sm:px-8 lg:px-9 py-10 flex flex-col gap-6 flight-videos">
          <p className="text-center">Meet some of the team…</p>
          <div className="grid auto-rows-fr grid-cols-3 gap-5 sm:grid-cols-[repeat(2,minmax(0,360px))] md:grid-cols-[repeat(2,minmax(0,420px))] lg:grid-cols-[repeat(2,minmax(0,480px))] xl:grid-cols-[repeat(2,minmax(0,380px))] sm:justify-center">
            {crewData.map((supporter) => (
                <SupporterCard key={supporter.name} supporter={supporter} />
            ))}
          </div>
        </section>
        
    </div>
);
}