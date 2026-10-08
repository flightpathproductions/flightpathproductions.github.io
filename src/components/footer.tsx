const socialLinks = [
  { name: 'TikTok', href: 'https://vm.tiktok.com/ZMLtGjnsS/', image: '/img/logo-tiktok.png' },
  { name: 'Instagram', href: 'https://www.instagram.com/flightpathproductions1/?hl=en', image: '/img/logo-instagram.png' },
];

export default function Footer() {
  return (
    <footer className="bg-black/35 py-5 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-center gap-5 sm:gap-6 lg:gap-8">
          <a
            href={socialLinks[0].href}
            target="_blank"
            rel="noreferrer"
            aria-label={socialLinks[0].name}
            className="transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/35 rounded-full"
          >
            <img
              className="h-8 w-auto object-contain grayscale sm:h-10"
              src={socialLinks[0].image}
              alt={socialLinks[0].name}
              loading="lazy"
            />
          </a>

          <img
            className="h-16 w-auto object-contain sm:h-20"
            src="/img/logo-pink.png"
            alt="Women at 36,000 feet"
            loading="lazy"
          />

          <a
            href={socialLinks[1].href}
            target="_blank"
            rel="noreferrer"
            aria-label={socialLinks[1].name}
            className="transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black/35 rounded-full"
          >
            <img
              className="h-8 w-auto object-contain grayscale sm:h-10"
              src={socialLinks[1].image}
              alt={socialLinks[1].name}
              loading="lazy"
            />
          </a>
        </div>

        <small className="text-center text-sm tracking-wide opacity-90">
          © {new Date().getFullYear()} Flight Path Productions
        </small>
      </div>
    </footer>
  );
}
