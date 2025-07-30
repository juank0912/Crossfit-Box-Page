import { Link } from "@tanstack/react-router";
import icon from "../../assets/icon.png";
import "./header-styles.css";

export default function Header() {
  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <img src={icon} alt="Crossfit box page logo" />
          <h1 className="brand">Kamus Barbell Club</h1>
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link to={"/#precios"}>Precios</Link>
        </li>
        <li>
          <Link to={"/#clases"}>Clases</Link>
        </li>
        <li>
          <Link to={"/#quienesSomos"}>¿Y estos locos?</Link>
        </li>
        <li>
          <Link to={"/#contactanos"}>Contactanos</Link>
        </li>
      </ul>
    </nav>
  );
}
