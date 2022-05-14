import { Link } from "react-router-dom";

function Nav () {
    return (
        <div className="nav">
            <Link to="/">
                <div>Ships list page</div>
            </Link>
        </div>
    );
};

export default Nav;