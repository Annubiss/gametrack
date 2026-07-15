import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function GameDetail() {
    const [deal, setDeal] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { dealID } = useParams()
    

    useEffect(() => {
        console.log(dealID)
        fetch(`https://www.cheapshark.com/api/1.0/deals?id=${(dealID)}`)
        .then((res) => {
            if(!res.ok) throw new Error(`HTTP ${res.status}`)
                return res.json()
        })
        .then((data) => setDeal(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    }, [])
    
    return (
        <section  className='max-w-xl mx-auto mt-8'>
            {error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : loading ? (
                "Loading..."
            ) : (
                <>
                    <Link to="/">Back</Link>
                    <h2>{deal.gameInfo.name}</h2>
                    <img alt={deal.gameInfo.tile} src={deal.gameInfo.thumb}/>
                    <div className='flex items-baseline gap-2'>
                        <p className="line-through text-gray-400">Retail Price: {deal.gameInfo.retailPrice}</p>
                        <p className='text-emerald-400 text-xl font-bold'>{deal.gameInfo.salePrice}</p>
                    </div>
                    <div className='text-gray-600 text-sm'>
                        <p>Publisher: {deal.gameInfo.publisher}</p>
                        <p>Rating: {deal.gameInfo.steamRatingPercent}% positive reviews</p>
                    </div>
                </>
            )
        }
        </section>
    )
}

export default GameDetail