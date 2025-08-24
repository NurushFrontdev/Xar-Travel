import { Link } from "react-router-dom";
import "../css/header.scss";
function Header() {
  return (
    <header className="homepage-header">
      <div className="XariTravel">
        <h1> Xari Travel</h1>
        <nav className="headerNav">
          <Link to="/">Ana səhifə</Link>
          <Link to="/turlar">Turlar</Link>
          <Link to="/oteller">Otellər</Link>
          <Link to="/qeydiyyat">Qeydiyyat</Link>
          <Link to="/haqqımızda">Haqqımızda</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
