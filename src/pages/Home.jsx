import { useState, useEffect } from "react"
import GameCard from "../components/GameCard"
import { Link } from 'react-router-dom'



function Home() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?pageSize=12&sortBy=DealRating")
      .then((res) => {
        if(!res.ok) throw new Error(`HTTP ${res.status}`)
          return res.json()
      })
      .then((data) => setGames(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))

  }, [])

  return (
      <section>
        <h1>Game Track</h1>
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : loading ? (
            "Loading..."
          ) : (
            <div className="grid grid-cols-3 gap-4 p-4">
              {games.map((game) => (
                <Link key={game.dealID} to={`/game/${encodeURIComponent(game.dealID)}`}>
                  <GameCard title={game.title} thumb={game.thumb} price={game.salePrice} rating={game.steamRatingPercent}/>
                  
                </Link>
              ))}
            </div>
          )
          }

        
      </section>
         )
      
}

export default Home
