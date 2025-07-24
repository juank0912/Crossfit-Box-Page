import { use } from "react";
import { Link } from "@tanstack/react-router";
import icon from "../../assets/logo192.png";

export default function Header() {
  return (
    <nav>
      <Link to={"/"}>
        <img src={icon} alt="Crossfit box page logo" />
        <h1 className="logo">Crossfit Box Page header</h1>
      </Link>
      <ul>
        <li>
          <Link to={"/precios"}>Precios</Link>
        </li>
        <li>
          <Link to={"/clases"}>Clases</Link>
        </li>
        <li>
          <Link to={"/quienesSomos"}>¿Y estos locos?</Link>
        </li>
        <li>
          <Link to={"/contactanos"}>Contactanos</Link>
        </li>
      </ul>
    </nav>
  );
}
