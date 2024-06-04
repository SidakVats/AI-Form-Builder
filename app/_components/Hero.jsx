import Link from "next/link";
import React from "react";
import { Example } from "./Example";
import Footer from "./Footer";
import HowItWork from "./HowItWork";

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
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/95 focus:outline-none active:scale-90 transition-all duration-150 sm:w-auto"
              href=""
            >
              + Create AI Form
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary/95 focus:outline-none active:scale-90 sm:w-auto border-2 transition-all duration-150 border-[#eaeaea]"
              href="#how"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <HowItWork />

      <Example />

      <Footer />
    </section>
  );
}

export default Hero;
