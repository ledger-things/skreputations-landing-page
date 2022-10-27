import React from 'react';

const DescriptionCard = ({ descTitle, desc1, desc2, descFooter, imageCard, cardTitle, cardDesc, reverse }) => {
  return (
    <div className={`flex items-center pt-32 bg-slate-100 ${reverse ? 'flex-row-reverse' : 'flex-wrap'}`}>
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-slate-500 bg-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full">
          <i className="fas fa-user-friends text-xl"></i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">{descTitle}</h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-700">{desc1} </p>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-700">{desc2}</p>
        <a className="font-bold text-slate-800 mt-8" href="#/">
          {descFooter}
        </a>
      </div>
      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-sky-500">
          <img alt="..." src={imageCard} className="w-full align-middle rounded-t-lg" />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block h-95-px -top-94-px"
              fill="#0ea5e9"
            >
              <polygon points="-30,95 583,95 583,65" className="text-sky-500 fill-current"></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">{cardTitle}</h4>
            <p className="text-md font-light mt-2 text-white">{cardDesc}</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
