import { useState } from "react";
import "../css/HotelsPage.scss";
import kharibulbulHotel from "../assets/kharibulbul  hotel.avif";
import kharibulbulHotelRestoran from "../assets/kharibulbul hotel restoran.jpg";
import kharibulbulRoom from "../assets/kharibulbul room.jpg";
import qarabagHotel from "../assets/qarabag hotel.jpg";
import qarabagHotelRestoran from "../assets/qarabag hotel restoran.jpg";
import qarabagHotelRoom from "../assets/qarabag hotel room.jpg";
import shushaHotel from "../assets/shusha hotel.jpg";
import ShushaHotelRestoran from "../assets/Shusha hotel restoran.jpg";
import shushaHotelRoom from "../assets/shusha hotel room.png";
import lachinHotel from "../assets/lachin hotel.jpg";
import lachinHotelRestoran from "../assets/lachin hotel restoran.jpg";
import lachinHotelRoom from "../assets/lachin hotel room.jpg";

const hotels = [
  {
    id: 1,
    name: "Xarıbulbul Otel",
    rating: 4,
    desc: "Şuşa şəhərinin mərkəzində yerləşir",
    price: "250-300 AZN",
    images: [kharibulbulHotel, kharibulbulHotelRestoran, kharibulbulRoom],
  },
  {
    id: 2,
    name: "Qarabağ Otel",
    rating: 5,
    desc: "Lüks şəraitli 5 ulduzlu otel",
    price: "350-400 AZN",
    images: [qarabagHotel, qarabagHotelRestoran, qarabagHotelRoom],
  },
  {
    id: 3,
    name: "Şuşa Otel",
    rating: 3,
    desc: "Dağ mənzərəli premium resort",
    price: "200-250 AZN",
    images: [shushaHotel, ShushaHotelRestoran, shushaHotelRoom],
  },
  {
    id: 4,
    name: "Laçın Hotel",
    rating: 4,
    desc: "Qış turizmi üçün ideal seçim",
    price: "250-350 AZN",
    images: [lachinHotel, lachinHotelRestoran, lachinHotelRoom],
  },
];

export default function Hotels() {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const handleOpen = (hotel) => {
    setSelectedHotel(hotel);
    setCurrentImg(0);
  };

  const handleNext = () => {
    setCurrentImg((prev) =>
      prev === selectedHotel.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImg((prev) =>
      prev === 0 ? selectedHotel.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="hotels-header">
        <h1>Otellər</h1>
        <h3>Rahat qalmaq üçün yerlər</h3>
      </div>

      <div className="hotels">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.images[0]} alt={hotel.name} className="hotel-img" />
            <div className="hotel-info">
              <h2>{hotel.name}</h2>
              <p>{hotel.desc}</p>
              <span className="price">{hotel.price}</span>
              <div className="rating">{"⭐".repeat(hotel.rating)}</div>
              <button className="btn" onClick={() => handleOpen(hotel)}>
                Ətraflı
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedHotel && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedHotel(null)}>
              &times;
            </span>
            <h2>{selectedHotel.name}</h2>
            <p>{selectedHotel.desc}</p>
            <span className="price">{selectedHotel.price}</span>
            <div className="rating">{"⭐".repeat(selectedHotel.rating)}</div>

            <div className="slider">
              <button className="prev" onClick={handlePrev}>
                ◀
              </button>
              <img
                src={selectedHotel.images[currentImg]}
                alt={selectedHotel.name}
                className="slider-img"
              />
              <button className="next" onClick={handleNext}>
                ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
