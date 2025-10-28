import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pizza/:id" element={<Pizza />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
