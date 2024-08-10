import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        //for using route instead of sending server request we need to use react link tag
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link style={{
                    color: "white", backgroundColor: "#f1356d",
                    border: "8px", borderRadius: "5px "
                }} to="/createblog">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;