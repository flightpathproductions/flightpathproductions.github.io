import Donate from "../../components/Donate";
import HeroCard from "../../components/HeroCard";
import Presslink from "../../components/PressLink";
import { contactData } from "../../data/heroes";

export default function Contact() {
  return (
    <div>

      <section className="mx-auto max-w-7xl px-3 sm:px-8 lg:px-9 py-10 flex flex-col gap-6 flight-videos">
        <div className="container mt-5" id="contact">
          <div className="row">
            <div className="col-12 text-center flex flex-col gap-4">
              <h2 className="aeronaves text-3xl font-bold">Contact</h2>
              <p>Are you a female pilot with a story to tell? Perhaps you’re an academic researcher with data to share?</p>
              <p>At Flight Path Productions, we are looking for the most insightful stories and experiences to include, and would love to hear from you.</p>
              <p>To get in touch with a member of our production team, please email:</p>
              <a className="text-underline lead" href="mailto:production@flightpathproductions.com">production@flightpathproductions.com</a>
            </div>
          </div>
        </div>
      </section>
      
      <Presslink />

      <Donate />

      <section className="mx-auto max-w-7xl px-3 sm:px-8 lg:px-9 py-10 flex flex-col gap-6 flight-videos">
        <div className="grid auto-rows-fr grid-cols-3 gap-5 sm:grid-cols-[repeat(3,minmax(0,360px))] md:grid-cols-[repeat(3,minmax(0,420px))] lg:grid-cols-[repeat(3,minmax(0,480px))] xl:grid-cols-[repeat(3,minmax(0,380px))] sm:justify-center">
          {contactData.map((hero) => (
              <HeroCard key={hero.tag} hero={hero} />
          ))}
        </div>
      </section>
    </div>
  );
}