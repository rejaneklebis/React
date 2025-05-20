import {Relogio} from './Components/Relogio';
import {Letreiro} from './Components/Letreiro';
import Gallery from './Components/Gallery';
import {Link} from "react-router-dom";

export default function Atv01(){
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            <Letreiro />
            <Gallery />
            <br />
            <Link to="/">Retornar a página inicial</Link>

        </>

    );
    
}