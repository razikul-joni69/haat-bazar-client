import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import "./Login.css";
import {
    createUserWithEmailandPassword,
    handleFacebookSignIn,
    handleGithubSignIn,
    handleGoogleSignIn,
    initializeLoginFramework,
    loginWithEmailAndPassword,
} from "./LoginManager";

function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isLoggedIn: false,
        name: "",
        email: "",
        password: "",
        photo: "",
        error: "",
    });
    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const facebookSignIn = () => {
        handleFacebookSignIn().then((res) => {
            handleResponse(res, true);
        });
    };

    const githubSignIn = () => {
        handleGithubSignIn().then((res) => {
            handleResponse(res, true);
        });
    };
    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === "email") {
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === "password") {
            const passwordLength = event.target.value.length >= 6;
            const passwordHasNumber = /\d{1}/.test(event.target.value);
            isFormValid = passwordLength && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUser && user.email && user.password) {
            createUserWithEmailandPassword(
                user.name,
                user.email,
                user.password
            ).then((res) => {
                handleResponse(res, true);
            });
        }
        if (!newUser && user.email && user.password) {
            loginWithEmailAndPassword(user.email, user.password).then((res) => {
                handleResponse(res, true);
            });
        }
    };
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    };
    return (
        <div className="mt-5 form-container">
            <div className="form-card">
                <form onSubmit={handleSubmit}>
                    <br />
                    {newUser && (
                        <input
                            className="form-control"
                            name="name"
                            type="text"
                            onBlur={handleBlur}
                            placeholder="Write your Name"
                        />
                    )}
                    <br />
                    <input
                        className="form-control"
                        name="email"
                        type="text"
                        onBlur={handleBlur}
                        placeholder="Write your Email"
                        required
                    />
                    <br />
                    <input
                        className="form-control"
                        name="password"
                        type="text"
                        onBlur={handleBlur}
                        placeholder="password"
                        required
                    />
                    <br />
                    <input
                        className="btn btn-primary btn-block"
                        type="submit"
                        value={newUser ? "Sign Up" : " Sign In"}
                    />
                    <p className="forgot-password text-center">
                        {newUser ? "Already registered" : "Create an Account"}{" "}
                        <div
                            onClick={() => {
                                setNewUser(!newUser);
                            }}
                        >
                            <Link to='/login' className="">
                                {newUser ? " Sign In" : "Sign Up"}
                            </Link>{" "}
                        </div>
                    </p>
                    <h3 className="text-warning">Or</h3>

                    <button
                        className="btn btn-danger btn-block"
                        onClick={googleSignIn}
                    >
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={["fab", "google"]}
                        />
                        Continue With Google
                    </button>
                    <button
                        className="btn btn-primary btn-block"
                        onClick={facebookSignIn}
                    >
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={["fab", "facebook"]}
                        />
                        Continue With Facebook
                    </button>
                    <button
                        className="btn btn-dark btn-block"
                        onClick={githubSignIn}
                    >
                        <FontAwesomeIcon
                            className="mr-2"
                            icon={["fab", "github"]}
                        />
                        Continue With GitHub
                    </button>
                    <p></p>

                    {user.success && (
                        <p style={{ color: "green" }}>
                            Account {newUser ? "Created" : "Login"} Successfully
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Login;
