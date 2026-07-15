function GameCard(props) {
    return (
        <div>
            <img src={props.thumb} alt={props.title}/>
            <h2>{props.title}</h2>
            <p>Price: {props.price}</p>
            <h3>{props.genre}</h3>
            <p>{props.rating > 0 ? `Positive steam reviews: ${props.rating}%` : "No steam rating"}</p>
            {props.rating >= 90 && <p>⭐ Must play</p> }
        </div>
    )
}

export default GameCard