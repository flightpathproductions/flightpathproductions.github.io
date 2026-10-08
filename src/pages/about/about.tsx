import { Link } from 'react-router-dom';
import Donate from '../../components/Donate';
import SupporterCard from '../../components/SupporterCard';
import { supporterData } from '../../data/supporters';

export default function About() {
    return (
        <div className="space-y-12 pb-10 sm:space-y-16">
            <section className="container-masthead mx-auto w-full text-white">
                <img
                    className="masthead-poster"
                    src="/img/poster.png"
                    width={480}
                    alt="Women at 36,000 feet film poster"
                />
                <h1 className="aeronaves text-center text-masthead-title font-medium tracking-normal md:text-masthead-title-md masthead-xl:text-masthead-title-xl">
                    Women at <span className="numbers font-bold italic">36,000</span> feet
                </h1>
                <h2 className="mb-5 text-center text-masthead-subtitle font-medium tracking-normal">
                    A feature documentary on women in aviation.
                </h2>
                <p className="mb-4 text-masthead-copy">
                    The world of female pilots is riddled with stereotypes and challenges too often hidden from public view. Discover the struggles they face in training, in the cockpit, and at home, in "Women at 36,000 Feet".
                </p>
                <p className="mb-4 text-masthead-copy">
                    For the first time ever, the complex issues surrounding women in aviation are being investigated across the entire industry. From fighter pilots to commercial airline captains, from helicopter pilots to aerobatic champions; uncover the common fight for equality that underpins these tenacious women's work on land and in the skies.
                </p>
                <p className="mb-4 text-masthead-copy">
                    Aviation is one of the most under-represented industries in STEM for women. Change is happening, but progress is extremely slow. This production aims to uncover some of the reasons why issues can take decades to improve, and most importantly; what can be done to speed up this progress.
                </p>
                <p className="text-masthead-copy">
                    Whether you're curious about global feminism, women working in male-dominated industries, or motherhood vs a demanding and dangerous career, and young girl's introduction to STEM fields in education, this documentary will transform perceptions, solve mysteries and inspire positive action for change.
                </p>
            </section>

            <Donate />

            <section aria-labelledby="support-title" className="text-white">
                <h2 id="support-title" className="mx-auto mb-6 max-w-3xl text-center text-2xl font-semibold sm:text-3xl">
                    These are just some of our international supporters from across the aviation industry!
                </h2>
                <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-[repeat(2,minmax(0,360px))] md:grid-cols-[repeat(2,minmax(0,420px))] lg:grid-cols-[repeat(2,minmax(0,480px))] xl:grid-cols-[repeat(2,minmax(0,540px))] sm:justify-center">
                    {supporterData.map((supporter) => (
                        <SupporterCard key={supporter.name} supporter={supporter} />
                    ))}
                </div>
            </section>

            <section className="text-center text-white">
                <h2 className="mb-5 text-2xl font-semibold sm:text-3xl">
                    If you are a female pilot with a story to tell, please get in touch!
                </h2>
                <Link
                    className="inline-flex rounded bg-primary px-6 py-3 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-navy"
                    to="/contact"
                >
                    I have a story to tell
                </Link>
            </section>
        </div>
    );
}