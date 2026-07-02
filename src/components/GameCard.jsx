function GameCard(props) {
    return (
        <div className="game-card">
            <h2>{props.name}</h2>
            <p>Rating: {props.rating}</p>
        </div>
    )
}

export default GameCard