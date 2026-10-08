import HeroCard from "../../components/HeroCard";
import Presslink from "../../components/PressLink";
import { pressData } from "../../data/heroes";

export default function Press() {
  return (
    <div>
      <Presslink />

      <section className="mx-auto max-w-7xl px-3 sm:px-8 lg:px-9 py-10 flex flex-col gap-6 flight-videos">
        <div className="container my-5">
          <div className="row">
            <div className="col-12 flex flex-col place-items-center text-center">
              <h3 className="aeronaves text-3xl">Thrust Flight Academy - Women In Aviation</h3>
              <p className="mb-2">Kathryn Vinclaire chatted with Chief Pilot Liz Brassaw for Thrust Flight Academy's video series.</p>
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xSOV3ovr74c" title="YouTube video player" frameBorder="0" allow="picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12 flex flex-col place-items-center text-center">
              <h3 className="aeronaves text-3xl">The Busy Aviation Podcast</h3>
              <p>Kathryn Vinclaire discussed gender in aviation with pilot Chris Cooper.</p>
              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nRyqtDolWSA" title="YouTube video player" frameBorder="0" allow="picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 sm:px-8 lg:px-9 py-10 flex flex-col gap-6 flight-videos">
        <div className="grid auto-rows-fr grid-cols-3 gap-5 sm:grid-cols-[repeat(3,minmax(0,360px))] md:grid-cols-[repeat(3,minmax(0,420px))] lg:grid-cols-[repeat(3,minmax(0,480px))] xl:grid-cols-[repeat(3,minmax(0,380px))] sm:justify-center">
          {pressData.map((hero) => (
              <HeroCard key={hero.tag} hero={hero} />
          ))}
        </div>
      </section>
    </div>
  );
}