import { useParams } from 'react-router-dom'

function StarshipPage(props) {
    let { id } = useParams();
    const ship = props.ships[id]

    return (
        <>
            <h1>Ship name: {ship.name}</h1>
            <h3>Model: {ship.model}</h3>
            <h3>Manufacturer: {ship.manufacturer}</h3>
            <ol>
            {ship.films.map((film, idx) => (
                <div key ={idx}>
                    <li>{film}</li>
                </div>
            ))}
            </ol>
        </>
    )
}

export default StarshipPage