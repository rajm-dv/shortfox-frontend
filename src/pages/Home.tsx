import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="px-20 my-12 flex flex-col items-center text-black/80">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold">
            Build stronger digital connections
          </h1>
          <p className="text-xl my-6 font-medium leading-relaxed">
            Use my URL shortener, and analytics dashboard to engage your
            audience, and connent them to the right information. Build, edit and
            track everything inside the Shortfox Connection Platfrom.
          </p>
        </div>
        <div className="self-start my-10 p-10 w-full rounded border border-slate-300">
          <h3 className="text-3xl font-semibold">Shorten a long link</h3>
          <p className="my-2 text-slate-700">No credit card required.</p>

          <p className="text-xl mt-16 font-semibold">
            Paste your long link here
          </p>
          <input
            name="origin"
            type="text"
            className="border border-slate-500 rounded w-full my-2 h-14 px-4 placeholder:text-slate-500"
            placeholder="https://example.com/my-long-url"
          />
          <button className="text-lg font-semibold rounded text-white bg-blue-600 hover:bg-blue-800 py-3 px-5 mt-3">
            Get your link for free
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
