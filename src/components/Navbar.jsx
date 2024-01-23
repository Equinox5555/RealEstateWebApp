import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/' className="navbar-brand mx-2">Affluent Club</Link>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">Link</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
