import "../css/HomePage.scss";
import mountainView from "../assets/mountain View.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <div className="homepage">
        <img src={mountainView} alt="Qarabağ" />
        <div className="homepage__overlay">
          <h2>Qarabağın gözəlliklərini kəşf edin</h2>
          <p>Tur seçin və unutulmaz səfərə başlayın</p>
          <Link to="/turlar" className="homeButton">
            Tur seç
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
