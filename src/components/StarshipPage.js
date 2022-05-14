import { useParams } from 'react-router-dom'

function StarshipPage(props) {
    let { id } = useParams();
    
    return (
        <>
            <h3>{id} is showing</h3>
        </>
    )
}

export default StarshipPage