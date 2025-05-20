import './Navbar.css';
function Navbar(){
    return(
        <nav className="navbar">
            <h1>Job Board</h1>
            <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/create">New Job</a></li>
                <li><a href="/register">Login / Sign-up</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
          
    )
}
export default Navbar;