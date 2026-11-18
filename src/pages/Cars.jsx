// Per cdo foto te re: vendose fotoen te src/assets dhe shto nje import ketu
import golf6izi from "../assets/Golf6izi.png";
import Golfiperhimt from "../assets/Golfiperhimt.png";
import Tauran7 from "../assets/Tauran7.png";
import Tauran5 from "../assets/Tauran5.png";
import shkodaiperhimt from "../assets/shkodaiperhimt.png";
import shkodaizi from "../assets/shkodaizi.png";
import Pasati6 from "../assets/Pasati6.png";
import Tauran from "../assets/Tauran.png";
import Peugeot from "../assets/Peugeot.png";

// Ketu i shkruan te dhenat e makinave
// image = emri i importit (pa thonjeza) | gearbox = "manual" ose "automatic"
const cars = [
  { name: "Golf 6 1.6 TDI", image: golf6izi, text: "Kjo makine i ka 5 ulese", price: "€30", year: "2012", power: "105 HP", gearbox: "automatic" },
  { name: "Golf 6 2.0 TDI", image: Golfiperhimt, text: "Kjo makine i ka 5 ulese", price: "€25", year: "2010", power: "110 HP", gearbox: "manual" },
  { name: "Touran 1.9 TDI", image: Tauran7, text: "Kjo makine i ka 7 ulese", price: "€30", year: "2006", power: "105 HP", gearbox: "automatic" },
  { name: "Touran 1.4 TSI", image: Tauran5, text: "Kjo makine i ka 5 ulese", price: "€30", year: "2010", power: "140 HP", gearbox: "automatic" },
  { name: "Skoda 2.0 TDI", image: shkodaiperhimt, text: "Kjo makine i ka 5 ulese", price: "€30", year: "2009", power: "140 HP", gearbox: "automatic" },
  { name: "Skoda 2.0 TDI", image: shkodaizi, text: "Kjo makine i ka 5 ulese", price: "€30", year: "2007", power: "140HP", gearbox: "automatic" },
  { name: "Passat B6 1.9 TDI", image: Pasati6, text: "Kjo makine i ka 5 ulse", price: "€25", year: "2010", power: "105 HP", gearbox: "manual" },
  { name: "Saran 1.9 TDI", image: Tauran, text: "Kjo makine i ka 7 ulse", price: "€30", year: "2006", power: "116 HP", gearbox: "automatic" },
  { name: "Peugeot 1.6 Benzin", image: Peugeot, text: "Kjo makine i ka 5 ulese", price: "€25", year: "2004", power: "75 HP", gearbox: "manual" },
];

export default function Cars({ t }) {
  return (
    <div className="page">
      <h2 className="subtitle">{t.ourCars}</h2>

      <div className="cars-grid">
        {cars.map((car, i) => (
          <div className="car-card" key={i}>
            {car.image ? (
              <img className="car-img" src={car.image} alt={car.name} />
            ) : (
              <div className="car-img">{t.photo}</div>
            )}
            <div className="car-body">
              <h3>{car.name}</h3>
              <p>{car.text}</p>
              <div className="car-row">
                <span>{t.perDay}</span>
                <strong>{car.price}</strong>
              </div>
              <div className="car-row">
                <span>{t.power}</span>
                <strong>{car.power}</strong>
              </div>
              <div className="car-row">
                <span>{t.year}</span>
                <strong>{car.year}</strong>
              </div>
              <div className="car-row">
                <span>{t.gearbox}</span>
                <strong>{t[car.gearbox]}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

