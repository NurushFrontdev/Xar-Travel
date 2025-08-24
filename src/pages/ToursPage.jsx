import { useState } from "react";
import "../css/ToursPage.scss";
import { Link } from "react-router-dom";
import agdam1 from "../assets/agdam.jpg";
import fuzuli1 from "../assets/fuzuli.jpg";
import cebrayil1 from "../assets/cebrayil.jpg";
import qubadli1 from "../assets/Qubadli.jpg";
import zengilan1 from "../assets/Zengilan.jpg";
import kelbecer1 from "../assets/kelbecer.jpeg";

const tours = [
  {
    id: 1,
    name: "Ağdam Turu",
    desc: "Tarixi məkanlara səfər və şəhər gəzintisi",
    price: "200 AZN",
    image: agdam1,
  },
  {
    id: 2,
    name: "Füzuli Turu",
    desc: "Təbiət və mədəniyyətlə tanışlıq",
    price: "250 AZN",
    image: fuzuli1,
  },
  {
    id: 3,
    name: "Cəbrayıl Turu",
    desc: "Tarixi abidələr və mənzərəli yerlər",
    price: "250 AZN",
    image: cebrayil1,
  },
  {
    id: 4,
    name: "Qubadlı Turu",
    desc: "Qubadlının təbiət gözəllikləri",
    price: "250 AZN",
    image: qubadli1,
  },
  {
    id: 5,
    name: "Zəngilan Turu",
    desc: "Dağlıq ərazilərdə gəzinti",
    price: "200 AZN",
    image: zengilan1,
  },
  {
    id: 6,
    name: "Kəlbəcər Turu",
    desc: "Dağlar, bulaqlar və unudulmaz mənzərələr",
    price: "200 AZN",
    image: kelbecer1,
  },
];

export default function Tours() {
  const [selectedTour, setSelectedTour] = useState(null);

  return (
    <>
      <div className="tours-header">
        <h1>Turlar</h1>
        <h3>Unudulmaz səyahətlər</h3>
      </div>

      <div className="tours">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.name} className="tour-img" />
            <div className="tour-info">
              <h2>{tour.name}</h2>
              <p>{tour.desc}</p>
              <span className="price">{tour.price}</span>
              <button className="btn" onClick={() => setSelectedTour(tour)}>
                Ətraflı
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTour && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedTour(null)}>
              &times;
            </span>

            <img
              src={selectedTour.image}
              alt={selectedTour.name}
              className="modal-img"
            />

            <h2>{selectedTour.name}</h2>
            <p>{selectedTour.desc}</p>

            <ul className="tour-details">
              <li>✅ Nəqliyyat</li>
              <li>✅ Otel</li>
              <li>✅ Bələdçi</li>
              <li>✅ Nahar</li>
            </ul>

            <Link to="/qeydiyyat" className="register-btn">
              Qeydiyyatdan keç
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
