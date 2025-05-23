import { Link } from "react-router-dom";
import Gallery from "../components/Gallery/Gallery";
import TodoList from "../components/TodoList/TodoList";
import Profile from "../components/Profile/Profile";
import "./Atv03.css";

const styleDiv = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
};

function Atv03() {
  return (
    <>
      <h1 className="titulo">Atividade 03</h1>
      <div className="atv03-container" style={styleDiv}>
        <Gallery />
        <TodoList />
        <Profile />
      </div>
      <div className="botao-voltar-container">
        <Link to="/" className="botao-voltar">
          Voltar
        </Link>
      </div>
    </>
  );
}

export default Atv03;
