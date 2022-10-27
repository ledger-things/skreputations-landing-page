import React from 'react';

const Hero = () => {
  return (
    <div className="w-full">
      <div className="relative pt-16pb-3 flex content-center items-center justify-center min-h-screen-75 ">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-hero">
          <span className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
              <div className="">
                <h1 className="text-white font-semibold text-5xl">DIFENDI LA TUA REPUTAZIONE </h1>
                <p className="mt-4 text-lg text-blueGray-300">
                  RIMOZIONE ARTICOLI ONLINE, VIDEO, IMMAGINI, RECENSIONI, INFORMAZIONI PERSONALI, CANCELLAZIONE LINK
                </p>
                <a href="#contact">
                  <button className="mt-4 inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white bg-orange-500 border-orange-500 active:bg-orange-600 active:border-orange-600 text-sm px-6 py-3 shadow-md hover:shadow-lg rounded-lg">
                    <i className="fas fa-play mr-2"></i>CONTATTACI SUBITO{' '}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute top-auto bottom-0">
          <div className="w-full pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              fill="#f1f5f9"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

//Malicious link removal service for your image
