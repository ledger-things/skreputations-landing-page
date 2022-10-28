import React from 'react';

const ServiceCard = ({ title, subtitle, cardTitle, cardDescription, tailwindBackImage }) => {
  return (
    <div className="w-full  bg-blueGray-100">
      <div className="py-12">
        <div className="flex flex-wrap">
          <div className="mx-auto px-4 relative w-full lg:w-10/12">
            <div className="flex flex-wrap  justify-start">
              <div className="px-4 relative w-full text-left">
                <h2 className="text-4xl font-bold mt-3 mb-1 text-blueGray-700">{title}</h2>
                <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">{subtitle}</p>
              </div>
            </div>
            <div className="overflow-hidden mb-12 rounded-lg relative flex flex-col min-w-0 break-words bg-white w-full  shadow-lg  lg:h-550-px transition-all duration-150 ease-in-out hover:transform hover:scale-105 group">
              <div
                className={` absolute rounded-lg w-full h-full bg-50-center transition-all duration-1000 ease-in-out group-hover:transform group-hover:scale-110`}
                style={{
                  background: `url("${tailwindBackImage}")`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backfaceVisibility: 'hidden',
                }}
              ></div>
              <div className="absolute rounded-lg w-full h-full bg-black opacity-50"></div>
              <div className="p-10 flex h-full items-end z-1">
                <div>
                  <a href="#contact">
                    <h1 className="text-4xl font-semibold mt-0 mb-2 text-white">{cardTitle}</h1>
                    <p className="text-white opacity-75 text-lg">{cardDescription}</p>
                    <button className="inline-block mt-6 outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-red-500 border-red-500 active:bg-red-600 active:border-red-600 text-sm px-6 py-2 shadow hover:shadow-lg rounded-md">
                      Contattaci subito
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
