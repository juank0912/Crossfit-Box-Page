import { use } from "react";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <nav>
      <Link to={"/"}>
        <h1 className="logo">Crossfit Box Page footer</h1>
      </Link>
    </nav>
  );
}
