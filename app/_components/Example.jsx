import Image from "next/image";

export const Example = () => {
  return (
    <div className="bg-white px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max_padd_container md:px-24 lg:px-8 lg:py-20">
      <div className="max_padd_container mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Effortless Form Creation with AI
          </p>
        </div>
        <h2 className="max_padd_container mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Real</span>
          </span>{" "}
          -World Examples
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Explore a variety of sample forms generated from straightforward
          prompts. Our AI makes it easy to create customized forms for any
          purpose.
        </p>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 max_padd_container">
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
          <div className="flex items-center mb-2 gap-3">
            <Image src="./one.svg" alt="one svg" width={25} height={10}/>
            <p className="text-lg font-bold leading-5">Example 1</p>
          </div>
          <p className="text-sm text-gray-900">
            Create a customer feedback survey for my restaurant.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
          <div className="flex items-center mb-2 gap-3">
          <Image src="./two.svg" alt="two svg" width={25} height={10}/>
            <p className="text-lg font-bold leading-5">Example 2</p>
          </div>
          <p className="text-sm text-gray-900">
            Design a job application form for a software developer position.
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
          <div className="flex items-center mb-2 gap-3">
          <Image src="./three.svg" alt="three svg" width={25} height={10}/>
            <p className="text-lg font-bold leading-5">Example 3</p>
          </div>
          <p className="text-sm text-gray-900">
            Generate an event registration form for a charity marathon
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};
