// ====== SHKRUAJ KETU TE GJITHA TE DHENAT E FAQES HOME ======
import foto from "../assets/ndera.png";
const IMAGE = foto;
const HERO_TITLE = "Rent a Car";

// 3 pllakat e para: shkruaj titullin dhe tekstin e secilës
const CALL_CENTER = "+381 63 8226 559";

// Shkruaj orarin ne te 3 gjuhet
const WORKING_HOURS = {
  sq: "E Hënë - E Diell: online 24/7",
  en: "Monday - Sunday: online 24/7",
  sr: "Ponedeljak - Nedelja: online 24/7",
};

const HEADQUARTERS = "15. novembar 182, 17523 Preševo, Serbia";

const STAT_CARS = "10+";
const STAT_YEARS = "3+";
const STAT_CLIENTS = "95%";

export default function Home({ t, lang = "sq" }) {
  return (
    <div className="page">
      {/* Titulli */}
      <h1 className="title">{HERO_TITLE}</h1>

      {/* Fotografia */}
      {IMAGE ? (
        <img className="photo" src={IMAGE} alt="rent a car" />
      ) : (
        <div className="photo">{t.photo}</div>
      )}

      {/* 3 pllakat e para */}
      <div className="grid3 tiles-info">
        <div className="tile">
          <h3>{t.callCenter}</h3>
          <p>{CALL_CENTER}</p>
        </div>
        <div className="tile">
          <h3>{t.workingHours}</h3>
          <p style={{ color: "#ffffff" }}>{WORKING_HOURS[lang]}</p>
        </div>
        <div className="tile">
          <h3>{t.headquarters}</h3>
          <p>{HEADQUARTERS}</p>
        </div>
      </div>

      {/* Paragrafi */}
      <p className="paragraph">{t.homeText}</p>

      {/* 3 pllakat e statistikave */}
      <div className="grid3">
        <div className="tile stat">
          <h2>{STAT_CARS}</h2>
          <p>{t.statCars}</p>
        </div>
        <div className="tile stat">
          <h2>{STAT_YEARS}</h2>
          <p>{t.statYears}</p>
        </div>
        <div className="tile stat">
          <h2>{STAT_CLIENTS}</h2>
          <p>{t.statClients}</p>
        </div>
      </div>
    </div>
  );
}









