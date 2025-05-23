import Relogio from "../components/Relogio/Relogio";
import Letreiro from "../components/Letreiro/Letreiro";
import "./Atv01.css";
import { Link } from "react-router-dom";

export default function Atv01() {
  return (
    <div class="atv01-container">
      <h1 class="atv01-title">Atividade 1 - Relógio e Letreiro</h1>
      <Relogio />
      <Letreiro />
      <Link className="botao-voltar" to="/">
        Voltar
      </Link>
    </div>
  );
}
