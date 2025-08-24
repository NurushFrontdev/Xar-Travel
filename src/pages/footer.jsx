import "../css/footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Haqqımızda</h3>
          <p>
            E-poçt:
            <a href="mailto:office@XariTravel.com">office@XariTravel.com</a>
          </p>
          <p>
            Telefon: <a href="tel:+9947037600782654070">+99470 376 00 78</a>
          </p>
        </div>

        <div className="footer-section">
          <h3>Keçidlər</h3>
          <Link to="/">Ana səhifə</Link>
          <Link to="/turlar">Turlar</Link>
          <Link to="/oteller">Otellər</Link>
          <Link to="/qeydiyyat">Qeydiyyat</Link>
          <Link to="/haqqımızda">Haqqımızda</Link>
        </div>

        <div className="footer-section">
          <h2 className="footer-logo-text"> Xari Travel</h2>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Qarabağ Azərbaycandır</p>
      </div>
    </footer>
  );
}

export default Footer;
