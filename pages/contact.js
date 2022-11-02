import Head from 'next/head';
import Footer from '../components/shared/Footer';
import Form from '../components/shared/Form';
import FourColumnsDescriptionComponent from '../components/shared/FourColumnsDescriptionComponent';
import { COLUMNS_CONSULANCE, COLUMNS_CUSTOMERS } from '../constants/global-data';

export default function Contact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SKreputation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="SKReputation Contact" />
        <meta name="description" content="Difendi la tua reputazione. Servizio di rimozione articoli online, video, immagini, recensioni, informazioni personali, cancellazione link." />
        <link rel="shortcut icon" href="./assets/img/favicon.ico" />
        <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="./assets/styles/tailwind.min.css" />
        <link rel="stylesheet" href="./assets/styles/highlight.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* <!--  Essential META Tags --> */}
        <meta property="og:title" content="SKReputation" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://skreputation.com/hero-meta.png" />
        <meta property="og:url" content="https://skreputation.com" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* <!--  Non-Essential, But Recommended --> */}
        <meta
          property="og:description"
          content="Difendi la tua reputazione. Servizio di rimozione articoli online, video, immagini, recensioni, informazioni personali, cancellazione link."
        />
        <meta property="og:site_name" content="SKReputation" />
        <meta name="twitter:image:alt" content="Servizio di difesa reputazione" />

        {/* <!--  Non-Essential, But Required for Analytics --> */}
        <meta name="twitter:site" content="@skreputation"></meta>
      </Head>
      <div className="text-blueGray-700 antialiased">
        <div className="bg-white docs-components-wrapper">
          <div className="w-full">
            <section className="relative block py-12 bg-blueGray-900">
              <div className="container w-full flex mx-auto px-16 flex-col lg:flex-row">
                <div className="mb-12 flex w-full flex-wrap  justify-center">
                  <div className="px-4 relative w-full text-center">
                    <h3 className="text-2xl font-bold mt-3 mb-1 text-lightBlue-300">SK REPUTATION</h3>
                    <h3 className="text-3xl font-bold mt-3 mb-1 text-white">Vuoi eliminare i contenuti negativi da Internet?</h3>
                    <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                      Compila il form dei contatti scrivendo la tua richiesta e i link che vorresti rimuovere.
                    </p>
                    <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                      Il nostro team analizzerà la tua richiesta e ti risponderà ai tuoi contatti il prima possibile.
                    </p>
                    <p className="mt-2 mb-4 text-xl font-bold leading-relaxed text-white opacity-75">
                      Puoi inviare una richiesta per rimozione articoli, video, immagini, recensioni, informazioni personali e cancellazione di link
                    </p>
                  </div>
                  <div className="px-4 relative w-full text-center">
                    <h3 className="mt-16 mb-1 text-2xl  leading-relaxed text-lightBlue-300 opacity-75">Difendi la tua reputazione</h3>
                    <h3 className=" mb-4 text-3xl font-bold uppercase leading-relaxed text-white ">Riprendi in mano la tua vita</h3>
                  </div>
                </div>
                <Form />
              </div>
            </section>
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
          </div>

          {/* CONSULANCE COLUMNS */}

          <div id="consulence">
            <FourColumnsDescriptionComponent
              buttonText="Leggi di più"
              buttonHref="./"
              title="Cosa otterrai con la nostra consulenza?"
              color={{
                button: 'bg-lightBlue-500 border-lightBlue-500 active:bg-lightBlue-600 active:border-lightBlue-600',
                icon: 'bg-lightBlue-500',
              }}
              columns={COLUMNS_CONSULANCE}
            />
          </div>
          {/* CUSTOMERS COLUMNS */}
          <div className="w-full">
            <section className="relative block">
              <div className="w-full pointer-events-none overflow-hidden h-70-px bg-blueGray-100" style={{ transform: 'translateZ(0px)' }}>
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  fill="#0f172a"
                  x="0"
                  y="0"
                >
                  <polygon className="text-blueGray-100 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
              </div>
              <div id="customers" className=" bg-blueGray-900 py-24">
                <FourColumnsDescriptionComponent
                  buttonText="Leggi di più"
                  buttonHref="./"
                  dark
                  title="A chi è rivolto il nostro servizio?"
                  color={{ button: 'bg-red-500 border-red-500 active:bg-red-600 active:border-red-600', icon: 'bg-red-500' }}
                  columns={COLUMNS_CUSTOMERS}
                />
              </div>
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
