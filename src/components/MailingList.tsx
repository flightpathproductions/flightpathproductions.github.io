export default function MailingList() {
  return (
    <section
      aria-labelledby="mailing-list-title"
      className="mx-auto"
    >
      {/* 
  clear: left;
  width: auto;
  font: 14px Helvetica, Arial, sans-serif;
  margin: auto;
  padding: 10px 20px 5px;
  border-radius: 5px;
}  */}
      <div className="max-w-[500px] w-auto rounded-md bg-white px-5 pt-4 pb-3 text-slate-900 shadow-lg">
        <h2 id="mailing-list-title" className="mb-4 text-center text-3xl text-crimson aeronaves sm:text-wrap">
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
            className="min-w-0 flex-1 rounded border border-slate-300 px-2 py-1 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
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
            className="rounded bg-gray-400 text-xs text-semibold hover:transition-colors duration-100 hover:bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
