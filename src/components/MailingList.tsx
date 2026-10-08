export default function MailingList() {
  return (
    <section
      aria-labelledby="mailing-list-title"
      className="mx-auto max-w-2xl rounded-md bg-white p-3 text-slate-900 shadow-lg sm:p-7"
    >
      <h2 id="mailing-list-title" className="mb-4 text-center text-2xl font-semibold text-danger aeronaves">
        Join Our Mailing List!
      </h2>
      <form
        action="https://flightpathproductions.us5.list-manage.com/subscribe/post?u=64801c2d127741e90ec0cb3c3&id=91c449f999"
        method="post"
        target="_blank"
        className="flex flex-col gap-3 sm:flex-row"
      >
        <label className="sr-only" htmlFor="mailing-list-email">Email address</label>
        <input
          className="min-w-0 flex-1 rounded border border-slate-300 px-3 py-2 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
          id="mailing-list-email"
          type="email"
          name="EMAIL"
          placeholder="Email address"
          autoComplete="email"
          required
        />
        <div className="absolute -left-[5000px]" aria-hidden="true">
          <input type="text" name="b_64801c2d127741e90ec0cb3c3_91c449f999" tabIndex={-1} defaultValue="" />
        </div>
        <button
          className="rounded bg-gray-400 hover:transition-colors duration-100 hover:bg-gray-700 px-5 py-2 font-semibold text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
