// Vendose linkun e fotos ketu, p.sh. "/foto.jpg"
import foto from "../assets/logondera.png";
const IMAGE = foto;

export default function About({ t, info }) {
  return (
    <div className="page">
      {/* Foto */}
      {IMAGE ? (
        <img className="photo" src={IMAGE} alt="about" />
      ) : (
        <div className="photo">{t.photo}</div>
      )}

      {/* About - teksti vjen nga App.jsx */}
      <h2 className="subtitle">{t.aboutTitle}</h2>
      <p className="paragraph">{t.aboutText}</p>

      {/* Rregullat - teksti vjen nga App.jsx */}
      <h2 className="subtitle">{t.rules}</h2>
      <p className="paragraph">{t.rulesText}</p>

      {/* Contact Us */}
      <h2 className="subtitle">{t.contactUs}</h2>
      <p className="paragraph phone">{info.phone}</p>
    </div>
  );
}




