import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <Link to="/about">About Page</Link>
            <Link to="*">Not Found Page</Link>
            <div>Ömer Furkan Doğruyol Home Page</div>
        </>
    )
}

export default Home