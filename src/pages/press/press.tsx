import HeroCard from "../../components/HeroCard";
import Presslink from "../../components/PressLink";
import { pressData } from "../../data/heroes";

export default function Press() {
  return (
    <div className="flex flex-col gap-8">
      <Presslink />

      <div className="mx-auto max-w-7xl sm:max-w-5xl flex flex-col gap-6 flight-videos">
        <div className="my-5">
          <div className="col-12 flex flex-col place-items-center text-center">
            <h3 className="aeronaves text-3xl">Thrust Flight Academy - Women In Aviation</h3>
            <p className="mb-2">Kathryn Vinclaire chatted with Chief Pilot Liz Brassaw for Thrust Flight Academy's video series.</p>
            <iframe className="w-fit sm:w-[560px] sm:h-[315px] sm:max-w-[560px] sm:max-h-[315px] mx-auto"   src="https://www.youtube-nocookie.com/embed/xSOV3ovr74c" title="YouTube video player" frameBorder="0" allow="picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>

        <div className="my-5">
          <div className="col-12 flex flex-col place-items-center text-center">
            <h3 className="aeronaves text-3xl">The Busy Aviation Podcast</h3>
            <p>Kathryn Vinclaire discussed gender in aviation with pilot Chris Cooper.</p>
            <iframe className="w-fit sm:w-[560px] sm:h-[315px] sm:max-w-[560px] sm:max-h-[315px] mx-auto" src="https://www.youtube-nocookie.com/embed/nRyqtDolWSA" title="YouTube video player" frameBorder="0" allow="picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      
      <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-[repeat(1,minmax(0,360px))] md:grid-cols-[repeat(3,minmax(0,420px))] lg:grid-cols-[repeat(3,minmax(0,480px))] xl:grid-cols-[repeat(3,minmax(0,380px))] sm:justify-center">
        {pressData.map((hero) => (
            <HeroCard key={hero.tag} hero={hero} />
        ))}
      </div>
      
    </div>
  );
}