import type { SupporterData } from '../data/supporters';

type SupporterCardProps = {
  supporter: SupporterData;
  imageShape: 'square' | 'natural';
};

export default function SupporterCard({ supporter, imageShape }: SupporterCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md bg-white text-slate-900 shadow-lg">
      <img
        className={imageShape === 'square'
          ? 'aspect-square h-auto w-full shrink-0 object-cover object-top'
          : 'h-auto w-full shrink-0'}
        src={supporter.image}
        alt={supporter.name}
        loading="lazy"
      />
      <div className="flex-1 bg-secondary p-3 text-white text-center flex flex-col gap-4">
        <h3 className="supporter-card__name mb-1 text-xl">{supporter.name}</h3>
        <p className="mb-4 font-light text-[1.25rem]">{supporter.role}</p>
        <blockquote className="whitespace-pre-line text-base italic">“{supporter.quote}”</blockquote>
      </div>
    </article>
  );
}
