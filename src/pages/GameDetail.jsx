import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
function GameDetail() {
    const [deal, setDeal] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { dealID } = useParams()
    

    useEffect(() => {
        fetch(`https://www.cheapshark.com/api/1.0/deals?id=${dealID}`)
        .then((res) => res.json())
        .then((data) => setDeal(data))
        .then(setLoading(false))
    })
    return <h2>Details for: {dealID}</h2>
}

export default GameDetail