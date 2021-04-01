import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header">
            <Navbar className="container" bg="" variant="light">
                <Link to="/home">
                    <Navbar.Brand to="/home">FRESH VALLY</Navbar.Brand>
                </Link>
                <Nav className="ml-auto">
                    <Link className="nav-link  " to="/home">
                        Home
                    </Link>
                    <Link className="nav-link " to="/orders">
                        Orders
                    </Link>
                    <Link className="nav-link " to="/admin">
                        Admin
                    </Link>
                    <Link className="nav-link " to="/deals">
                        Deals
                    </Link>
                    {/* {loggedInUser.name || loggedInUser.displayName ? (
                        <Link className="nav-link text-warning" to="/user">
                            {" "}
                            {loggedInUser.name || loggedInUser.displayName}
                        </Link>
                    ) : ( */}
                        <Link
                            className="nav-link btn btn-primary btn-sm"
                            to="/login"
                        >
                            Login
                        </Link>
                    {/* )} */}
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;
