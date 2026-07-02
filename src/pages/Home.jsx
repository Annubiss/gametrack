import { useState, useEffect } from "react"
import GameCard from "../components/GameCard"



function Home() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?pageSize=12&sortBy=DealRating")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .then(setLoading(false))
  }, [])

  return (
      <section>
        <h1>Game Track</h1>
          {loading ? ("Se incarca..."

          ):(<div className='grid grid-cols-3 gap-4 p-4'>
          {games.map((game) =>(
            <GameCard key={game.dealID} title={game.title} thumb={game.thumb} price={game.salePrice} rating={game.steamRatingPercent} />
          ))}
        </div>)}

        
      </section>
         )
      
}

export default Home
