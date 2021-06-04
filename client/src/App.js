import { BrowserRouter, Route, Switch } from "react-router-dom";

// PAGES
import JoinUs from "./pages/Form";
import LandingPage from "./pages/LandingPage";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Blog from "./pages/Blog";
import SingleArticle from "./pages/SingleArticle";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar/Navbar";
import AdminPanel from "./pages/AdminPanel";
import AdminProduct from "./pages/AdminProduct";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { current } from "./redux/actions/User";
import { getAllProduct } from "./redux/actions/Product";
import UserRoute from "./routes/UserRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(current());
        dispatch(getAllProduct());
    }, [dispatch]);
    return (
        <BrowserRouter>
            <Navbar />

            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/about" component={About} />

                <Route exact path="/shop" component={Shop} />
                <Route path="/shop/:name" component={SingleProduct} />

                <UserRoute exact path="/blog" component={Blog} />
                <UserRoute path="/blog/:name" component={SingleArticle} />

                <Route path="/join-us" component={JoinUs} />
                <AdminRoute exact path="/admin" component={AdminPanel} />
                <AdminRoute path="/admin/products" component={AdminProduct} />
                <Route path="/*" component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
