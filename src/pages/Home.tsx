import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { useState } from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAuthStore from "../store/auth";

const Home = () => {
  const [origin, setOrigin] = useState("");
  const { isLoading, generateUrl } = useAuthStore();
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (origin.length < 10) {
      toast.error("Please enter a long url.");
      return;
    }

    const shortUrl = await generateUrl({ origin: origin });
    console.log(shortUrl);
  };

  return (
    <div className="px-20">
      <Navbar />
      <main className="my-12 flex flex-col items-center text-black/80">
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
        <form
          className="self-start my-10 p-10 w-full rounded border border-slate-300"
          onSubmit={handleSubmit}
        >
          <h3 className="text-3xl font-semibold">Shorten a long link</h3>
          <p className="my-2 text-slate-700">No credit card required.</p>

          <p className="text-xl mt-16 font-semibold">
            Paste your long link here
          </p>
          <input
            name="origin"
            type="text"
            onChange={(e) => setOrigin(e.target.value)}
            value={origin}
            className="border border-slate-500 rounded w-full my-2 h-14 px-4 placeholder:text-slate-500"
            placeholder="https://example.com/my-long-url"
          />
          <button
            className="text-lg font-semibold rounded text-white bg-blue-600 hover:bg-blue-800 py-3 px-5 mt-3 flex items-center disabled:bg-blue-400"
            type="submit"
            disabled={!origin || isLoading}
          >
            Get your link for free
            <ArrowRight className="ml-2" />
          </button>
        </form>
      </main>
      <hr className="border-slate-300" />
      <Footer />
    </div>
  );
};

export default Home;
