function GameCard(props) {
    return (
        <div>
            <img src={props.thumb} alt={props.title}/>
            <h2>{props.title}</h2>
            <p>Price: {props.price}</p>
            <h3>{props.genre}</h3>
            <p>Rating: {props.rating}</p>
        </div>
    )
}

export default GameCard