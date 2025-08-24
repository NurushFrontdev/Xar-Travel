import { useState } from "react";
import "../css/RegistrationPage.scss";

function Registration() {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    tour: "",
    hotel: "",
    participants: "",
  });

  const [errors, setErrors] = useState({});
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [paid, setPaid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  const tourPrices = {
    "Ağdam-200 AZN": 200,
    "Füzuli-250 AZN": 250,
    "Cəbrayıl-250 AZN": 250,
    "Qubadlı-250 AZN": 250,
    "Zəngilan-200 AZN": 200,
    "Kəlbəcər-200 AZN": 200,
    "Laçın-250 AZN": 250,
  };

  const hotelPrices = {
    "Xarıbülbül Hotel-250 AZN": 250,
    "Qarabağ Hotel-350 AZN": 350,
    "Şuşa Hotel-200 AZN": 200,
    "Laçın Hotel-250 AZN": 250,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "tour" || name === "hotel") {
      const tourPrice =
        name === "tour"
          ? tourPrices[value] || 0
          : tourPrices[formData.tour] || 0;
      const hotelPrice =
        name === "hotel"
          ? hotelPrices[value] || 0
          : hotelPrices[formData.hotel] || 0;
      setAmount(tourPrice + hotelPrice);
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.ad.trim()) newErrors.ad = "*Ad daxil edin";
    if (!formData.soyad.trim()) newErrors.soyad = "*Soyad daxil edin";
    if (!formData.email.trim()) newErrors.email = "*Email daxil edin";
    if (!formData.tour) newErrors.tour = "*Tur seçin";
    if (!formData.hotel) newErrors.hotel = "*Otel seçin";
    if (!formData.participants || Number(formData.participants) < 1)
      newErrors.participants = "*İştirakçı sayı daxil edin";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paid) {
      setShowModal(true);
      return;
    }
    if (validateForm()) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));

      console.log("Yeni qeydiyyat əlavə olundu:", formData);

      setShowSuccessModal(true);
      setFormData({
        ad: "",
        soyad: "",
        email: "",
        tour: "",
        hotel: "",
        participants: "",
      });
      setAmount(0);
      setPaid(false);
      setPaymentMethod("");
      setErrors({});
    }
  };

  const handlePay = () => {
    if (validateForm() && amount > 0) setShowModal(true);
  };

  const completePayment = () => {
    if (!paymentMethod) return;
    setPaid(true);
    setShowModal(false);
  };

  return (
    <>
      <div className="registration-header">
        <h1>Qeydiyyat</h1>
        <h3>Səfərinizi planlaşdırın</h3>
      </div>
      <div className="registration">
        <form onSubmit={handleSubmit}>
          <label>
            Ad
            <input
              type="text"
              name="ad"
              value={formData.ad}
              onChange={handleChange}
              placeholder="Adınızı daxil edin"
            />
            {errors.ad && <span className="error">{errors.ad}</span>}
          </label>

          <label>
            Soyad
            <input
              type="text"
              name="soyad"
              value={formData.soyad}
              onChange={handleChange}
              placeholder="Soyadınızı daxil edin"
            />
            {errors.soyad && <span className="error">{errors.soyad}</span>}
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Tur seçimi
            <select name="tour" value={formData.tour} onChange={handleChange}>
              <option value="">Tur seçin</option>
              {Object.keys(tourPrices).map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {errors.tour && <span className="error">{errors.tour}</span>}
          </label>

          <label>
            Otel seçimi
            <select name="hotel" value={formData.hotel} onChange={handleChange}>
              <option value="">Otel seçin</option>
              {Object.keys(hotelPrices).map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
            {errors.hotel && <span className="error">{errors.hotel}</span>}
          </label>

          <fieldset>
            <legend>Nəqliyyat seçimi</legend>
            <label>
              <input type="radio" name="car" /> Şəxsi maşın
            </label>
            <label>
              <input type="radio" name="car" /> Tur maşın
            </label>
          </fieldset>

          <label>
            İştirakçı sayı
            <input
              type="number"
              name="participants"
              min="1"
              value={formData.participants}
              onChange={handleChange}
            />
            {errors.participants && (
              <span className="error">{errors.participants}</span>
            )}
          </label>

          <button
            type="button"
            className={`pay-button ${paid ? "paid" : ""}`}
            onClick={handlePay}
          >
            {paid ? "Ödəniş tamamlandı" : `Ödə (${amount} AZN)`}
          </button>
          <button type="submit">Göndər</button>
        </form>
      </div>

      {}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Ödəniş Metodu Seçin</h3>
            <label>
              <input
                type="radio"
                name="payment"
                value="Kart"
                checked={paymentMethod === "Kart"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Kart
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="Nağd"
                checked={paymentMethod === "Nağd"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Nağd
            </label>

            {!paymentMethod && (
              <p className="payment-warning">
                Zəhmət olmasa ödəniş metodunu seçin
              </p>
            )}

            <div className="modal-actions">
              <button onClick={completePayment}>Təsdiqlə</button>
              <button onClick={() => setShowModal(false)}>Bağla</button>
            </div>
          </div>
        </div>
      )}

      {}
      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Bizə müraciət etdiyiniz üçün təşəkkür </h3>
            <p> ✅ Qeydiyyatınız uğurla alındı </p>
            <div className="modal-actions">
              <button onClick={() => setShowSuccessModal(false)}>Bağla</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Registration;
