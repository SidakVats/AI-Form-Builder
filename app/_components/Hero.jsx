import { AtomIcon, Edit, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Example } from "./Example";
import Footer from "./Footer";

function Hero() {
  return (
    // bg-[url('/grid.svg')]
    <section className=" h-[500px] bg-[url('/grid.svg')]">
      <div className="mx-auto max-w-screen-xl z-30 px-4 pt-32 lg:flex  ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Create your Form
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              In Seconds Not in Hours{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            Generate, publish and share your form right away with AI. Dive into
            insightful results, charts and analytics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href=""
            >
              + Create AI Form
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-600 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href=""
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      {/* <img src='/grid.svg' className=' absolute w-full h-[400px] '/> */}
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-56 ">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">How it Works</h2>

            <p className="mt-4 text-gray-400">
              Discover the simplicity and power of creating custom forms with
              our AI-driven platform. Follow these three easy steps to generate,
              customize, and share your forms effortlessly, allowing you to
              start collecting valuable responses in no time.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-primary/15"
              href="#"
            >
              <AtomIcon className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Write promot for your form
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Kickstart Your Form Creation: Simply describe your needs and let
                our AI handle the rest.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-primary/15"
              href="#"
            >
              <Edit className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Edit Your form{" "}
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Customize with Ease: Fine-tune your form to perfection with our
                intuitive editor.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-primary/10 hover:shadow-primary/15"
              href="#"
            >
              <Share2 className="h-8 w-8" />

              <h2 className="mt-4 text-xl font-bold text-black">
                Share & Start Accepting Responses
              </h2>

              <p className="mt-1 text-sm text-gray-600">
                Launch and Collect: Share your form instantly and gather
                responses seamlessly.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/sign-in"
              className="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-primary/90 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>


      <Example/>

      <Footer/>
    </section>
  );
}

export default Hero;
