import { Link } from 'react-router-dom'

function StarshipsList(props) {
    return (
        <>
            {props.ships.map((ship, index) => (
                <div key={index}>
                    <Link to={`/${index}`} >
                        <h1>{ship.name}</h1>
                    </Link >
                    <h3>{ship.model}</h3>
                </div>
            ))}
        </>
    )
}

export default StarshipsList