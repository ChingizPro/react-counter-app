const Navbar = (props) => {
    console.log("Navbar - Render");
    return (
        <nav className="navbar navbar-light bg-light navbar-left p-3">
            <div className="counter-header container-fluid justify-content-start">
                <h5 className="text-primary mr-2">Total number: </h5>
                <span className="badge badge-secondary badge-pill">{props.badgeNumber()}</span>
            </div>
        </nav>
    );
};

export default Navbar;
