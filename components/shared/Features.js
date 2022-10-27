import React from 'react';

const Features = ({ subtitle, title, description, cards }) => {
  console.log('LOG --> cards', cards);
  return (
    <div className="w-full">
      <section className="pb-20 bg-blueGray-100">
        <div className="container mx-auto px-4">
          <div className="pt-6">
            <div className="mb-12 flex flex-wrap -mx-4 justify-center">
              <div className="px-4 relative w-full lg:w-8/12 text-center">
                <h6 className="mb-2 font-bold uppercase text-lightBlue-500">{subtitle}</h6>
                <h3 className="text-3xl font-bold mt-3 mb-1 text-blueGray-700">{title}</h3>
                <p className="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">{description}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap">
            {cards.map((card, index) => (
              <div key={index} className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b ${card.tailwindColorClasses}`}
                    >
                      <i className={`fas ${card.icon}`}></i>
                    </div>
                    <h6 className="text-xl font-semibold">{card.title}</h6>
                    <p className={`mt-2 mb-4  text-blueGray-400`}>{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
