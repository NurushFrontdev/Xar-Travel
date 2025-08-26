import { useState, useEffect } from "react";
import "../css/RegistrationPage.scss";

function Registration() {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    email: "",
    participants: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setRegistrations(users);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.ad.trim()) newErrors.ad = "*Ad daxil edin";
    if (!formData.soyad.trim()) newErrors.soyad = "*Soyad daxil edin";
    if (!formData.email.trim()) newErrors.email = "*Email daxil edin";
    if (!formData.participants || Number(formData.participants) < 1)
      newErrors.participants = "*İştirakçı sayı daxil edin";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(formData);
      localStorage.setItem("users", JSON.stringify(users));
      setRegistrations(users);

      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 3000);

      setFormData({
        ad: "",
        soyad: "",
        email: "",
        participants: "",
      });
      setErrors({});
    }
  };

  const handleDelete = (index) => {
    let users = [...registrations];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    setRegistrations(users);
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

          <button type="submit">Göndər</button>
        </form>
      </div>

      {/* Modal */}
      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>✅ Qeydiyyatınız uğurla alındı</h3>
          </div>
        </div>
      )}

      {/* Qeydiyyat cədvəli */}
      {registrations.length > 0 && (
        <div className="table-container">
          <h2>Qeydiyyatlar</h2>
          <table>
            <thead>
              <tr>
                <th>Ad</th>
                <th>Soyad</th>
                <th>Email</th>
                <th>Hotel</th>
                <th>Tur</th>
                <th>Nəqliyyat</th>
                <th>Sorğu</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((user, index) => (
                <tr key={index}>
                  <td>{user.ad}</td>
                  <td>{user.soyad}</td>
                  <td>{user.email}</td>
                  <td className="missing">Seçilməyib</td>
                  <td className="missing">Seçilməyib</td>
                  <td className="missing">Seçilməyib</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Ləğv Et</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Registration;
