import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import CheckOut from "./components/CheckOut/CheckOut";
import Deals from "./components/Deals/Deals";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

library.add(fab);
export const UserContext = createContext();
function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <div className="background-img">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <h2>Login {loggedInUser.email}</h2>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        {/* <PrivateRoute path="/orders/:productId">
                            <Orders />
                        </PrivateRoute> */}
                        <PrivateRoute path="/orders">
                            <Orders />
                        </PrivateRoute>
                        <PrivateRoute path="/checkout/:productId">
                            <CheckOut></CheckOut>
                        </PrivateRoute>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <Route path="/deals">
                            <Deals />
                        </Route>
                        <PrivateRoute path="/admin/:title">
                            <Admin />
                        </PrivateRoute>
                        <Route path="/login">
                            <Login />
                        </Route>
                        {/* <Route path="/manageProduct">
                            <ManageProduct />
                        </Route>
                        <Route path="/addProduct">
                            <AddProduct/>
                        </Route> */}
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
