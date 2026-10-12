const socialLinks = [
  { name: 'TikTok', href: 'https://vm.tiktok.com/ZMLtGjnsS/', image: '/img/logo-tiktok.png' },
  { name: 'Instagram', href: 'https://www.instagram.com/flightpathproductions1/?hl=en', image: '/img/logo-instagram.png' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/flightpathproductions/', image: '/img/logo-linkedin.png' },
];

export default function Donate() {
  return (
    <div className="rounded-md p-6 text-center bg-white/10 text-white shadow-lg sm:p-8">
      <form action="https://www.paypal.com/donate" method="post" target="_blank" className="mb-5">
        <input type="hidden" name="hosted_button_id" value="UJE6H3L8P5RBE" />
        <button className="rounded bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2" type="submit">
          Donate via PayPal
        </button>
      </form>
      <h2 className="mb-6 text-xl font-semibold sm:text-2xl">
        You can help us today by making a contribution of any amount. Let's take flight together.
      </h2>
      <div className="flex items-center justify-center gap-6">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.href} target="_blank" rel="noreferrer" aria-label={link.name}>
            <img className="h-10 w-10 object-contain" src={link.image} alt="" loading="lazy" />
          </a>
        ))}
      </div>
    </div>
  );
}
