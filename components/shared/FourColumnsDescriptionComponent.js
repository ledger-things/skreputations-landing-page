import React from 'react';

const FourColumnsDescriptionComponent = ({ subtitle, title, description, dark, color, columns }) => {
  return (
    <div className={` ${dark ? ' bg-blueGray-900' : 'bg-blueGray-100'}  pt-12  container mx-auto px-4`}>
      <div className="mb-12 flex flex-wrap -mx-4 justify-center">
        <div className="px-4 relative w-full lg:w-8/12 text-center">
          <h6 className="mb-2 text-lg font-bold uppercase text-lightBlue-500">{subtitle}</h6>
          <h2 className={`text-4xl font-bold mt-0 mb-1 ${dark ? 'text-white' : ' text-blueGray-700'}`}>{title}</h2>
          <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 items-center justify-center -mt-6">
        <button
          className={`${color.button} inline-block outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold last:mr-0 mr-2  text-white text-sm px-6 py-2 shadow hover:shadow-lg rounded-md`}
        >
          <i className="mr-1 fas fa-comment"></i> Contact Us
        </button>
      </div>
      <div className="flex flex-wrap -mx-4 mt-12">
        {columns.map((col, index) => (
          <div key={index} className="px-4 relative lg:w-3/12 md:w-6/12 w-6/12 border-r">
            <div className="text-center py-6">
              <div
                className={` text-white ${color.icon} shadow-lg  rounded-full justify-center items-center inline-flex text-center p-2 mb-6 w-16 h-16`}
              >
                <i className={`fas ${col.icon} text-lg`}></i>
              </div>
              <h4 className={` ${dark ? 'text-white' : ' text-blueGray-700'} text-xl font-bold leading-tight mt-0 mb-2`}>{col.title}</h4>
              <div className="mb-4">
                <p className={`${dark ? 'text-white' : ' text-blueGray-500'}`}>{col.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourColumnsDescriptionComponent;
