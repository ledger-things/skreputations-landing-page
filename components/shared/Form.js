import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Form = () => {
  const [links, setLinks] = useState([{ link: '' }]);
  const [submitterName, setSubmitterName] = useState('');
  const router = useRouter();
  const confirmationScreenVisible = router.asPath?.includes('success=true');
  const formVisible = !confirmationScreenVisible;

  return (
    <div className="flex flex-wrap justify-center" id="contact">
      <div className="w-full lg:w-6/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
          <div className="flex-auto p-5 lg:p-10">
            <h4 className="text-2xl font-semibold">Contattaci</h4>
            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">Compila il form e ti ricontatteremo il prima possibile.</p>
            <form name="contact-form" method="POST" action="./#contact?success=true" data-netlify="true" data-netlify-honeypot="bot-field">
              <input type="hidden" name="subject" value={`You've got mail from ${submitterName}`} />
              <input type="hidden" name="form-name" value="contact-form" />
              <p hidden>
                <label>
                  Don’t fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="mt-8">
                <div className="relative w-full mb-3">
                  <label htmlFor="name" className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">
                    Nome Completo
                  </label>
                  <input
                    placeholder="Nome Completo"
                    id="name"
                    name="name"
                    type="text"
                    onChange={(e) => setSubmitterName(e.target.value)}
                    required
                    className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label htmlFor="email" className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">
                    Email
                  </label>
                  <input
                    id="email"
                    placeholder="Email"
                    name="email"
                    type="email"
                    required
                    className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label htmlFor="ohone" className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">
                    Numero di telefono
                  </label>
                  <input
                    id="phone"
                    placeholder="Numero di telefono"
                    name="phone"
                    type="tel"
                    required
                    className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label htmlFor="message" className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">
                    Messaggio
                  </label>
                  <textarea
                    placeholder="Scrivi un messaggio..."
                    name="message"
                    id="message"
                    type="textarea"
                    rows="4"
                    cols="80"
                    className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                  ></textarea>
                </div>
                <div className="relative w-full mb-3">
                  <label htmlFor="links" className="block uppercase text-blueGray-500 text-xs font-bold mb-2 ml-1">
                    Link
                  </label>
                  <textarea
                    placeholder="Scrivi i link che vorresti rimuovere..."
                    name="links"
                    id="links"
                    type="textarea"
                    rows="2"
                    cols="80"
                    className="px-3 py-3 placeholder-blueGray-400 text-blueGray-500 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 border-transparent"
                  ></textarea>
                </div>
              </div>
              {formVisible ? (
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="text-xs px-4 py-2 shadow hover:shadow-md text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold"
                  >
                    Invio
                  </button>
                </div>
              ) : (
                <div className="text-center mt-6">
                  <p className="block text-blueGray-500 text-sm font-bold mb-2">Grazie di averci scritto. Risponderemo il prima possibile.</p>
                  <span
                    className="text-xs px-4 py-2 shadow hover:shadow-md text-white bg-blueGray-800 border-blueGray-800 active:bg-blueGray-900 active:border-blueGray-900 rounded outline-none focus:outline-none align-middle transition-all duration-150 ease-in-out uppercase border border-solid font-bold"
                    onClick={() => router.replace('#contact', undefined, { shallow: true })}
                  >
                    Invia un'altra richiesta
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
