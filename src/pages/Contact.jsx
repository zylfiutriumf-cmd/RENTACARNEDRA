import { useState } from "react";

// Vendndodhja ne harte: emri i biznesit + qyteti (si ta shkruash ne Google Maps)
// Per saktesi te plote, zevendeso MAP_URL me linkun "Embed a map" nga Google Maps
const ADDRESS = "Servis Ndera, Preševo, Serbia";
const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&z=17&output=embed`;

// Ngjite ketu celesin qe te vjen ne email nga web3forms.com
const ACCESS_KEY = "21d23077-74df-4dea-afdc-82f8980b4be8";

export default function Contact({ t, info }) {
  const [form, setForm] = useState({ name: "", surname: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Mesazh i ri nga faqja RentaCarNdera",
          name: `${form.name} ${form.surname}`,
          phone: form.phone,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        alert(t.sent);
        setForm({ name: "", surname: "", phone: "", message: "" });
      } else {
        alert("Error, try again.");
      }
    } catch {
      alert("Error, try again.");
    }
    setSending(false);
  };

  const people = [
    { emoji: "👤", ...info.person1, role: t.owner },
    { emoji: "👤", ...info.person2, role: t.manager },
  ];

  return (
    <div className="page">
      {/* Harta me lokacionin e biznesit */}
      <iframe
        className="map"
        src={MAP_URL}
        title="map"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* 2 pllakat e njerezve */}
      <div className="grid2">
        {people.map((p, i) => (
          <div className="tile person" key={i}>
            <div className="emoji">{p.emoji}</div>
            <h3>{p.name}</h3>
            <span className="role">{p.role}</span>
            <p>{p.phone}</p>
          </div>
        ))}
      </div>

      {/* 3 pllakat me nenvizim */}
      <div className="grid3">
        <div className="tile underline">
          <h3>{t.callCenter}</h3>
          <p>{info.phone}</p>
        </div>
        <div className="tile underline">
          <h3>{t.workingHours}</h3>
          <p>{t.hours}</p>
        </div>
        <div className="tile underline">
          <h3>{t.headquarters}</h3>
          <p>{t.location}</p>
        </div>
      </div>

      {/* Contact Us */}
      <h2 className="subtitle">{t.contactUs}</h2>
      <form className="form" onSubmit={submit}>
        <input name="name" placeholder={t.name} value={form.name} onChange={change} required />
        <input name="surname" placeholder={t.surname} value={form.surname} onChange={change} required />
        <input name="phone" placeholder={t.number} value={form.phone} onChange={change} required />
        <textarea name="message" placeholder={t.message} rows="5" value={form.message} onChange={change} required />
        <button type="submit" className="send" disabled={sending}>{t.send}</button>
      </form>
    </div>
  );
}



