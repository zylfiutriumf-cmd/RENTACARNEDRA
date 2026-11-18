import { useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Cars from "./pages/Cars.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

// ====== TE DHENAT QE I NDRYSHON TI ======
const info = {
  phone: "+381 63 8226 559",
  facebook: "https://www.facebook.com/rentacarndera/",
  instagram: "https://www.instagram.com/rentacarndera/",
  statCars: "10+",
  statYears: "3+",
  statClients: "95%",
  person1: { name: "Nderim Hyseni", phone: "+381 63 8226 559" },
  person2: { name: "Onal Hyseni", phone: "+381 62 8538 633" },
};

// ====== GJUHET ======
const T = {
  sq: {
    home: "Ballina", about: "Rreth Nesh", cars: "Makinat", contact: "Kontakti",
    heroTitle: "Rent a Car",
    callCenter: "Call Center", workingHours: "Orari i Punës",
    hours: "E Hënë - E Diell: online 24/7",
    headquarters: "Lokacioni", location: "15. novembar 182,17523 Preševo, Serbia",
    homeText: "RentaCarNdera është një biznes që merret me rentimin e veturave në Preshevë.Biznesi ofron vetura me qira për udhëtime të ndryshme.Klientët mund të zgjedhin veturën sipas nevojave të tyre.Ofrojmë mundësi për rentim ditor, javor dhe afatgjatë.Qëllimi ynë është të ofrojmë shërbim cilësor dhe korrekt.Ne synojmë që çdo klient të ketë një përvojë të këndshme.Rezervimi i veturave bëhet në mënyrë të thjeshtë.RentaCarNdera kujdeset për nevojat dhe kërkesat e klientëve.Vizioni ynë është të bëhemi një biznes i njohur në Preshevë dhe më gjerë.Ofrojmë vetura të përshtatshme për udhëtime familjare dhe personale.Klientët mund të na kontaktojnë për informacione dhe rezervime.Ne punojmë për të krijuar besim dhe kënaqësi te klientët.Synojmë të përmirësojmë vazhdimisht shërbimet tona.Për ne, çdo klient dhe çdo udhëtim kanë rëndësi.RentaCarNdera – Udhëto lirshëm, udhëto me ne!",
    statCars: "Makina që kemi", statYears: "Vite eksperiencë", statClients: "Klientë të kënaqur",
    aboutTitle: "Rreth Nesh – RentaCarNdera", aboutText: "RentaCarNdera është një kompani e specializuar në rentimin e veturave, duke ofruar shërbime në Kosovë, Maqedoninë e Veriut dhe Serbi. Ne ofrojmë vetura të reja, moderne dhe në gjendje shumë të mirë teknike. Flota jonë përfshin vetura të fuqishme, komode dhe të përshtatshme për çdo lloj udhëtimi. Të gjitha veturat mirëmbahen rregullisht për të siguruar rehati dhe besueshmëri gjatë udhëtimit. Qëllimi ynë është t'u ofrojmë klientëve shërbim cilësor, çmime të arsyeshme dhe përvojë sa më të mirë.Ofrojmë vetura të markave të ndryshme, të përshtatshme për çdo preferencë. Me veturat tona mund të udhëtoni brenda dhe jashtë vendit. Çdo veturë kontrollohet dhe mirëmbahet rregullisht. Ne kujdesemi që klientët tanë të kenë rehati dhe siguri gjatë gjithë udhëtimit.RentaCarNdera është zgjedhja ideale për ata që kërkojnë cilësi, fuqi dhe komoditet.RentaCarNdera – Cilësi, fuqi dhe rehati në çdo udhëtim!",
    rules: "Rregullat e Rent a Car NDERA", rulesText: "Klienti duhet të ketë patentë shoferi valide.Vetura dorëzohet e pastër dhe duhet të kthehet e pastër.Vetura duhet të kthehet në kohën e caktuar.Karburanti duhet të kthehet në të njëjtin nivel si në momentin e marrjes.Ndalohet dhënia e veturës personave të tjerë pa lejen e kompanisë.",
    contactUs: "Na Kontaktoni", ourCars: "Makinat Tona",
    perDay: "Çmimi për 1 ditë", power: "Fuqia", year: "Viti", gearbox: "Transmisioni", manual: "Manual", automatic: "Automatik", photo: "Foto",
    owner: "Pronar", manager: "Menaxher", name: "Emri", surname: "Mbiemri",
    number: "Numri", message: "Mesazhi", send: "Dërgo", sent: "Mesazhi u dërgua!",
    carName: "Makina", carText: "Shkruaj këtu një paragraf për makinën.",
  },
  en: {
    home: "Home", about: "About", cars: "Cars", contact: "Contact",
    heroTitle: "Rent a Car - Your Title Here",
    callCenter: "Call Center", workingHours: "Working Hours",
    hours: "Monday-Sunday:online 24/7",
    headquarters: "Headquarters", location: "15. novembar 182, 17523 Preševo, Serbia",
    homeText: "RentaCarNdera is a car rental business located in Preševo.The business offers cars for rent for different types of trips.Customers can choose a car according to their needs.We offer daily, weekly, and long-term car rentals.Our goal is to provide high-quality and reliable service.We aim to make every customer's experience enjoyable.Car reservations are simple and easy.RentaCarNdera takes care of customers' needs and requests.Our vision is to become a well-known business in Preševo and beyond.We offer cars suitable for family and personal trips.Customers can contact us for information and reservations.We work to build trust and customer satisfaction.We aim to continuously improve our services.Every customer and every journey is important to us.RentaCarNdera – Travel freely, travel with us!", 
    statCars: "Cars we have", statYears: "Years of experience", statClients: "Satisfied clients",
    aboutTitle: "About Us – RentaCarNdera", aboutText: "RentaCarNdera is a car rental company offering services in Kosovo, North Macedonia, and Serbia. We provide new, modern cars that are in excellent technical condition. Our fleet includes powerful, comfortable vehicles suitable for every type of journey. All our cars are regularly maintained to ensurecomfort and reliability throughout your trip. Our goal is to provide customers with high-quality service, reasonable prices, and the best possible experience.We offer cars from different brands to suit every preference. You can travel with our cars within and outside the country. Every vehicle is regularly inspected and maintained. We make sure our customers enjoy comfort and safety throughout their journey.RentaCarNdera is the ideal choice for those looking for quality, power, and comfort.RentaCarNdera – Quality, power, and comfort on every journey!",
    rules: "NDERA Rent a Car Rules", rulesText: "The customer must have a valid driver's license.The car is delivered clean and must be returned clean.The car must be returned at the agreed time.The fuel level must be the same as when the car was picked up.Giving the car to other people without the company's permission is prohibited.",
    contactUs: "Contact Us", ourCars: "Our Cars",
    perDay: "Price per 1 day", power: "Power", year: "Year", gearbox: "Transmission", manual: "Manual", automatic: "Automatic", photo: "Photo",
    owner: "Owner", manager: "Manager", name: "Name", surname: "Surname",
    number: "Number", message: "Message", send: "Send", sent: "Message sent!",
    carName: "Car", carText: "Write a paragraph about the car here.",
  },
  sr: {
    home: "Početna", about: "O Nama", cars: "Automobili", contact: "Kontakt",
    heroTitle: "Rent a Car - Vaš Naslov Ovde",
    callCenter: "Call Centar", workingHours: "Radno Vreme",
    hours: "Ponedeljak - Nedelja: 07:00 - 17:00",
    headquarters: "Sedište", location: "15. novembar 182, 17523 Preševo, Serbia",
    homeText: "RentaCarNdera je preduzeće koje se bavi iznajmljivanjem automobila u Preševu.Preduzeće nudi automobile za različite vrste putovanja.Klijenti mogu izabrati automobil prema svojim potrebama.Nudimo dnevno, nedeljno i dugoročno iznajmljivanje automobila.Naš cilj je da pružimo kvalitetnu i pouzdanu uslugu.Želimo da svaki klijent ima prijatno iskustvo.Rezervacija automobila je jednostavna.RentaCarNdera brine o potrebama i zahtevima klijenata.Naša vizija je da postanemo poznato preduzeće u Preševu i šire.Nudimo automobile pogodne za porodična i lična putovanja.Klijenti nas mogu kontaktirati za informacije i rezervacije.Trudimo se da izgradimo poverenje i zadovoljstvo klijenata.Cilj nam je da stalno unapređujemo naše usluge.Za nas su svaki klijent i svako putovanje važni.RentaCarNdera – Putujte slobodno, putujte sa nama!",
    statCars: "Automobila imamo", statYears: "Godina iskustva", statClients: "Zadovoljnih klijenata",
    aboutTitle: "O Nama – RentaCarNdera", aboutText: "RentaCarNdera je kompanija specijalizovana za iznajmljivanje automobila, koja pruža usluge naKosovu, u Severnoj Makedoniji i Srbiji. Nudimo nova, moderna vozila u odličnom tehničkom stanju. Naš vozni park obuhvata snažna, udobna vozila pogodna za sve vrste putovanja. Sva vozila se redovno održavaju kako bi se obezbedili udobnost i pouzdanost tokom putovanja. Naš cilj je da klijentima pružimo kvalitetnu uslugu, pristupačne cene i što bolje iskustvo.Nudimo automobile različitih marki, prilagođene svačijim željama. Našim automobilima možete putovati u zemlji i inostranstvu. Svako vozilo se redovno kontroliše i održava. Brinemo se da naši klijenti imaju udobnost i sigurnost tokom celog putovanja.RentaCarNdera je idealan izbor za one koji traže kvalitet, snagu i udobnost.RentaCarNdera – Kvalitet, snaga i udobnost na svakom putovanju!",
    rules: "Pravila Rent a Car NDERA", rulesText: "Klijent mora posedovati važeću vozačku dozvolu.Automobil se preuzima čist i mora se vratiti čist.Automobil mora biti vraćen u dogovoreno vreme.Nivo goriva mora biti isti kao u trenutku preuzimanja vozila.Zabranjeno je davanje automobila drugim osobama bez dozvole kompanije.",
    contactUs: "Kontaktirajte Nas", ourCars: "Naši Automobili",
    perDay: "Cena za 1 dan", power: "Snaga", year: "Godina", gearbox: "Menjač", manual: "Manuelni", automatic: "Automatik", photo: "Slika",
    owner: "Vlasnik", manager: "Menadžer", name: "Ime", surname: "Prezime",
    number: "Broj", message: "Poruka", send: "Pošalji", sent: "Poruka je poslata!",
    carName: "Automobil", carText: "Napišite ovde paragraf o automobilu.",
  },
};

const langNames = { sq: "Shqip", en: "English", sr: "Srpski" };

export default function App() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("sq");
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = T[lang];

  const go = (p) => {
    setPage(p);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const links = ["home", "about", "cars", "contact"];

  return (
    <div className="app">
      <header className="header">
        {/* 3 vijat - vetem ne telefon, ne te majte */}
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="logo" onClick={() => go("home")}>
          RENTACAR<span>NDERA</span>
        </div>

        <div className="header-right">
          {/* Menu: ne kompjuter horizontale, ne telefon del nga 3 vijat */}
          <nav className={`menu ${menuOpen ? "open" : ""}`}>
            {links.map((l) => (
              <button
                key={l}
                className={`menu-link ${page === l ? "active" : ""}`}
                onClick={() => go(l)}
              >
                {t[l]}
              </button>
            ))}

            <div className="socials">
              <a href={info.facebook} target="_blank" rel="noreferrer" className="social" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
              <a href={info.instagram} target="_blank" rel="noreferrer" className="social" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </nav>

          {/* Butoni i gjuhes */}
          <div className="lang">
            <button className="lang-btn" onClick={() => setLangOpen(!langOpen)}>
              {langNames[lang]} ▾
            </button>
            {langOpen && (
              <div className="lang-list">
                {Object.keys(langNames).map((k) => (
                  <button
                    key={k}
                    className={`lang-item ${lang === k ? "active" : ""}`}
                    onClick={() => {
                      setLang(k);
                      setLangOpen(false);
                    }}
                  >
                    {langNames[k]}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </header>

      <main>
        {page === "home" && <Home t={t} info={info} lang={lang} />}
        {page === "about" && <About t={t} info={info} />}
        {page === "cars" && <Cars t={t} />}
        {page === "contact" && <Contact t={t} info={info} />}
      </main>
    </div>
  );
}





