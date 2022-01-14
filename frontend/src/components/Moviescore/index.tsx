import Moviestars from "components/Moviestars";
import './moviescore.css';

type Props = {
    score: number;
    count: number;
}


function Moviescore( { score, count } : Props ) {
    
    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <Moviestars score={score} />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    )
}

export default Moviescore;