import { HeroData } from '../data/heroes';

type HeroCardProps = {
  hero: HeroData;
};

export default function HeroCard({ hero }: HeroCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden shadow-lg gap-1">
      <img
        className="aspect-square h-auto w-full shrink-0 object-cover object-top"
        src={hero.image}
        alt={hero.tag}
        loading="lazy"
      />
      <div className="flex-1 bg-secondary p-1 text-white text-center flex flex-col gap-4">
        <p className="mb-1 font-light text-[1.25rem]">{hero.tag}</p>
      </div>
    </article>
  );
}
