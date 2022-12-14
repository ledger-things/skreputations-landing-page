import Head from 'next/head';
import Hero from '../components/shared/Hero';
import Footer from '../components/shared/Footer';
import Features from '../components/shared/Features';
import DescriptionCard from '../components/shared/DescriptionCard';
import FourColumnsDescriptionComponent from '../components/shared/FourColumnsDescriptionComponent';
import ServiceCard from '../components/shared/ServiceCard';
import { COLUMNS_CONSULANCE, COLUMNS_CUSTOMERS, SERVICES_CARDS } from '../constants/global-data';
import Form from '../components/shared/Form';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SKreputation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="SKReputation" />
        <meta
          name="description"
          content="Difendi la tua reputazione. Servizio di rimozione articoli online, video, immagini, recensioni, informazioni personali, cancellazione link."
        />
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
          <Hero />

          <Features
            subtitle="riprendi in mano la tua vita"
            title="Difendi e potenzia la tua reputazione digitale "
            description="Se sei atterrato su questa pagina, molto probabilmente stai subendo qualche situazione spiacevole per colpa di contenuti presenti online e per questo motivo di seguito troverai informazioni utili al tuo bisogno specifico ma per qualsiasi informazione puoi raggiungermi anche per telefono."
            cards={[
              {
                tailwindColorClasses: 'from-lightBlue-400 to-lightBlue-600 bg-lightBlue-400',
                icon: 'fa-retweet',
                title: 'Monitoraggio online',
                description:
                  'Individuiamo qualsiasi menzione online sul tuo conto o su quello della tua azienda, intervenendo in maniera tempestiva in caso di contenuti negativi',
              },
              {
                tailwindColorClasses: 'from-orange-400 to-orange-600 bg-orange-400',
                icon: 'fa-award',
                title: 'Cancellazione Rapida di materiali dannosi',
                description:
                  'Puoi richiedere il nostro servizio innovativo di rimozione dei contenuti negativi per ottenere la cancellazione di foto, video, siti web, blog, articoli di giornale, di informazioni personali, di account digitali come i social network.',
              },
              {
                tailwindColorClasses: 'from-emerald-400 to-emerald-600 bg-emerald-400',
                icon: 'fa-fingerprint',
                title: "Miglioriamo l'identit?? digitale",
                description:
                  'Creiamo un???identit?? digitale nuova e positiva che valorizza la tua reputazione o quella della tua azienda, contrastando le eventuali notizie negative.',
              },
            ]}
          />

          <DescriptionCard
            descTitle="Perch?? difendere la reputazione online con SKReputation?"
            desc1="SKReputation ?? una delle pochissime realt?? specializzate nella difesa della Reputazione online di Aziende e Persone. Il nostro network ?? formato da grandi professionisti."
            desc2="Ogni giorno cooperano per tutelare l???immagine e la reputazione di centinaia di clienti in Italia, Europa ed America.  "
            descFooter="Consulenza e Formazione continua"
            imageCard="https://www.eskimoz.fr/wp-content/uploads/2022/03/e-reputation_1-3-1024x599.jpg"
            cardTitle="Una delle poche realt?? in Italia"
            cardDesc="I clienti che si rivolgono a SKReputation, possono contare sul valore aggiunto di essere seguiti dalla figura dell???E-Reputation Manager, ovvero il manager della reputazione online dei clienti.Questa figura professionale ?? specializzata nella costruzione dell???identit?? digitale e nella cura, difesa della reputazione e presenza digitale di persone ed aziende."
          />
          <DescriptionCard
            descTitle="Quando ?? possibile cancellare un contenuto dal web?"
            desc1="Quando vi ?? un???esigenza di cancellare dal web articoli relativi a fatti passati che non rappresentano pi?? l???identit?? e la realt?? attuale e che provocano danni gravi e perpetui alla reputazione. "
            desc2="Alla serenit?? della persona vittima di un???esposizione forzata di eventi che non hanno pi?? pertinenza."
            descFooter="Richiedi ora una rimozione di link e salva la tua immagine"
            imageCard="https://ambrosioecommodo.it/ac/wp-content/uploads/2021/10/diritto-oblio-1-1024x545.png"
            cardTitle="Quali contenuti puoi rimuovere dal web?"
            cardDesc="Puoi richiedere la rimozione di articoli di giornale, news, articoli blog,
            puoi richiedere di anonimizzare o cancellare i tuoi dati personali come nome e cognome.
            Puoi richiedere la cancellazione di foto e video che non hanno il consenso al pubblico utilizzo."
            reverse
          />

          {/* TREND BANNER */}
          <div className="w-full">
            <section className="relative block">
              <div className="bg-blueGray-900 py-24">
                <div className="container mx-auto px-4">
                  <div className="mb-12 flex flex-wrap -mx-4 justify-center">
                    <div className="px-4 relative w-full lg:w-8/12 text-center">
                      <h6 className="mb-2 font-bold uppercase text-blueGray-200">Rimozione recensioni</h6>
                      <h3 className="text-3xl font-bold mt-3 mb-1 text-white">Hai ricevuto recensioni ingiuste sul tuo prodotto o servizio?</h3>
                      <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                        Noi di SKReputation monitoriamo, analizziamo e rimuoviamo tutte le fake review che danneggiano la tua immagine. Il nostro
                        servizio nasce per dare supporto ad aziende o persone che salvaguardano la propria reputazione da una review diffamatorie. Il
                        servizio ?? rivolto sia alla piccola attivit?? e grandi imprese.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
            </section>
          </div>

          <DescriptionCard
            descTitle={
              <span>
                Sei una piccola attivit??? <br /> Hai un e-commerce?
              </span>
            }
            desc1="Sei stato preso di mira da false recensioni che danneggiano la tua immagine e il tuo business?! "
            desc2="Noi di SKReputation abbiamo tutti gli strumenti per aiutarti nel salvaguardare la tua azienda, il tuo nome e il tuo business."
            descFooter="Richiedi una consulenza gratuita, i nostri tecnici saranno a tua disposizione ed analizzeranno il tuo caso."
            imageCard="https://www.bbs.unibo.it/wp-content/uploads/2020/02/1440x580_uomoscala1-e1540819208212.jpg"
            cardTitle="Storia di un nostro cliente"
            cardDesc="Un giovane imprenditore decide di voler aprire un proprio e-commerce per la vendita dei suoi prodotti. Dopo tanto lavoro, riesce nella sua impresa, sviluppa il suo shop online e finalmente ha la possibilit?? di espandere il suo mercato.
           Bersagliato da false recensioni che danneggiano la sua reputazione, noi di SKReputation lo aiutiamo a riottenere la sua immagine e reputazione monitorando, individuando ed eliminando le false recensioni.
            Adesso il giovane imprenditore lavora e migliora la sua attivit?? con tranquillit?? e concentradosi sui suoi obbiettivi senza dover pensare alle recensioni diffamatorie."
            reverse
          />
          <DescriptionCard
            descTitle="E' possibile richiedere la cancellazione di foto e video?"
            desc1="Puoi richiedere la rimozione delle immagini ed i video che ti ritraggono.  "
            desc2="Come ogni caso, ?? necessario studiare la strategia adeguata e comprendere se ?? stata firmata una liberatoria riconoscendo un compenso oppure un titolo di gratuit??. "
            descFooter="Richiedi ora una rimozione di foto e video"
            imageCard="https://www.ogmag.net/wp-content/uploads/2019/02/1.jpg"
            cardTitle="Una nostra storia"
            cardDesc="Per esempio capita di poter aiutare ragazze che in passato hanno partecipato a concorsi di bellezza che sono state ripresi da altri soggetti ma il materiale postato da questi era inappropriato e dannoso per l'immagine che esse volevano dare. I contenuti possono comparire anche su youtube.  "
          />
          <DescriptionCard
            descTitle="Le banche controllano la reputazione online degli imprenditori e politici prima di concedere un fido?"
            desc1="La reputazione digitale della persona e dell???azienda diventa sempre pi?? importante poich?? condiziona in modo preponderante gli eventi della vita di tutti i soggetti. Alcuni esempi sono gli imprenditori, i politici oppure i personaggi pubblici che esposti mediaticamente, hanno una massiccia quantit?? di informazioni sul web."
            desc2=" Le banche prima di decidere se attivare un prestito, un fido ed altre tipologie di atti fiduciari, utilizzano un reparto speciale con tecnologie avanzate per esaminare la reputazione online di ogni richiedente e cliente per prendere infine una decisione.  "
            descFooter="Proteggi la tua reputazione come imprenditore, richiedi ora una consulenza"
            imageCard="https://www.focus.it/site_stored/imgs/0001/033/peter-adams-corbis.1020x680.jpg"
            cardTitle="Proteggere la propria indole imprenditoriale"
            cardDesc="Succede spesso di vedere imprenditori non ottenere fidi bancari per via di notizie diffamanti sul web a loro carico ed ?? per questo che ?? importante intervenire per proteggere la reputazione online. "
            reverse
          />

          {/* CUSTOMERS COLUMNS */}
          <div className="w-full">
            <section className="relative block">
              <div id="customers" className=" bg-blueGray-900 py-24">
                <FourColumnsDescriptionComponent
                  dark
                  buttonText="Contattaci"
                  buttonHref="./contact"
                  title="A chi ?? rivolto il nostro servizio?"
                  color={{ button: 'bg-red-500 border-red-500 active:bg-red-600 active:border-red-600', icon: 'bg-red-500' }}
                  columns={COLUMNS_CUSTOMERS}
                />
              </div>
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
            </section>
          </div>

          {/* CONSULANCE */}
          <div id="consulence">
            <FourColumnsDescriptionComponent
              title="Cosa otterrai con la nostra consulenza?"
              buttonText="Contattaci"
              buttonHref="./contact"
              color={{
                button: 'bg-lightBlue-500 border-lightBlue-500 active:bg-lightBlue-600 active:border-lightBlue-600',
                icon: 'bg-lightBlue-500',
              }}
              columns={COLUMNS_CONSULANCE}
            />
          </div>

          {/* SERVICE CARDS */}
          <div id="faq">
            {SERVICES_CARDS.map((s, index) => (
              <ServiceCard key={index} index={index} {...s} />
            ))}
          </div>

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
                  <polygon className="text-blueGray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg>
              </div>
              <div className="bg-blueGray-900 py-24">
                <div className="container mx-auto px-4">
                  <div className="mb-12 flex flex-wrap -mx-4 justify-center">
                    <div className="px-4 relative w-full lg:w-8/12 text-center">
                      <h6 className="mb-2 font-bold uppercase text-blueGray-200">Prendi la giusta decisione</h6>
                      <h3 className="text-3xl font-bold mt-3 mb-1 text-white">Riprenditi la fiducia che meriti.</h3>
                      <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                        Rimuoviamo tutto quello che pu?? gettare ombre sulla tua reputazione e mettere a rischio il tuo Futuro.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-12 justify-center">
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-blueGray-900 bg-white p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center">
                        <i className="fas fa-medal text-xl"></i>
                      </div>
                      <h6 className="text-white text-xl mt-5 font-semibold">Servizio Eccellente</h6>
                      <p className="text-blueGray-500 mt-2 mb-4">Siamo professionali e sempre a tua disposizione</p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-blueGray-900 bg-white p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center">
                        <i className="fas fa-clock text-xl"></i>
                      </div>
                      <h6 className="text-white text-xl mt-5 font-semibold">Rimozione in tempi brevi</h6>
                      <p className="text-blueGray-500 mt-2 mb-4">
                        Il nostro team di analisti ed avvocati informatici garantiscono tempi brevi nella rimozione dei link lesivi dal web.
                        (Mediamente alcune settimane ma ?? relativo di caso in caso).{' '}
                      </p>
                    </div>
                    <div className="w-full lg:w-3/12 px-4 text-center">
                      <div className="text-blueGray-900 bg-white p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center">
                        <i className="fas fa-lightbulb text-xl"></i>
                      </div>
                      <h6 className="text-white text-xl mt-5 font-semibold">Staff dedicato per il tuo caso</h6>
                      <p className="text-blueGray-500 mt-2 mb-4">
                        Avrai un manager della reputazione dedicato, per avere controllo sull'intero processo di rimozione e difesa della Reputazione
                        online.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full">
            <section className="relative block py-24 bg-blueGray-900">
              <div className="container mx-auto px-4">
                <div className="mb-12 flex flex-wrap -mx-4 justify-center">
                  <div className="px-4 relative w-full lg:w-8/12 text-center">
                    <span className="text-teal-500 bg-teal-200 text-xs font-bold inline-block py-1 uppercase last:mr-0 mr-1 leading-tight rounded px-2">
                      Message us
                    </span>
                    <h3 className="text-3xl font-bold mt-3 mb-1 text-white">Contattaci adesso</h3>
                    <p className="mt-2 mb-4 text-xl leading-relaxed text-white opacity-75">
                      Saremo felici di risponderti nel minor tempo possibile ed analizzeremo insieme tutte le possibilit?? per risolvere nel pi?? breve
                      tempo il tuo caso.
                    </p>
                  </div>
                </div>
                <Form width50Percent />
              </div>
            </section>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
