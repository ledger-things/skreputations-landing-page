import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full">
      <footer>
        <div className="w-full pointer-events-none overflow-hidden h-70-px bg-blueGray-900" style={{ transform: 'translateZ(0px)' }}>
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            fill="#f1f5f9"
            x="0"
            y="0"
          >
            <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="relative bg-blueGray-100 pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-xl mt-4 font-bold">Teniamoci in contatto!</h4>
                <h5 className="mt-1 mb-2 text-blueGray-500">Ci trovi sui social</h5>
                <div className="mt-6 lg:mb-0 mb-6">
                  <a
                    href="/"
                    target="_blank"
                    className="bg-white text-twitter-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="bg-white text-facebook-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                    type="button"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="bg-white text-dribbble-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                    type="button"
                  >
                    <i className="fab fa-dribbble"></i>
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="bg-white text-github-regular shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-flex"
                    type="button"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-xs font-bold mb-2">Useful Links</span>
                    <ul className="list-unstyled">
                      <a
                        href="https://www.creative-tim.com/presentation?npr-landing-1"
                        target="_blank"
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                      >
                        About Us
                      </a>
                      <a
                        href="https://www.creative-tim.com/blog?npr-landing-1"
                        target="_blank"
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                      >
                        Blog
                      </a>
                      <a
                        href="https://github.com/creativetimofficial"
                        target="_blank"
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                      >
                        Github
                      </a>
                      <a
                        href="https://www.creative-tim.com/templates/free?npr-landing-1"
                        target="_blank"
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                      >
                        Free Products
                      </a>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-xs font-bold mb-2">Other Resources</span>
                    <ul className="list-unstyled">
                      <a
                        href="https://www.creative-tim.com/license?npr-landing-1"
                        target="_blank"
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                      >
                        License
                      </a>
                      <a
                        href="https://www.creative-tim.com/terms?npr-landing-1"
                        target="_blank"
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                      >
                        Terms &amp; Conditions
                      </a>
                      <a
                        href="https://www.creative-tim.com/privacy?npr-landing-1"
                        target="_blank"
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                      >
                        Privacy Policy
                      </a>
                      <a
                        href="https://www.creative-tim.com/contact-us?npr-landing-1"
                        target="_blank"
                        className="text-blueGray-500 hover:text-blueGray-700 block pb-2 text-sm"
                      >
                        Contact Us
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-200" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 py-1">Copyright © 2021 Notus Design System PRO by Creative Tim.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
