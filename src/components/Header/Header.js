import React, { useContext } from "react";
import { Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.displayName);
    return (
        <div className="header">
            <Navbar className="container" bg="" variant="light" expand="lg">
                <Link to="/home">
                    <Navbar.Brand to="/home">
                        <span className="text-warning display-4">
                            Haat Bazar
                        </span>
                        <small>.com</small>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
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
                        {loggedInUser.name || loggedInUser.displayName ? (
                            <Link className="nav-link text-warning" to="/user">
                                {" "}
                                {loggedInUser.name || loggedInUser.displayName}
                            </Link>
                        ) : (
                            <Link
                                className="nav-link btn btn-primary btn-sm"
                                to="/login"
                            >
                                Login
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Header;
