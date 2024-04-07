import Menu from "./components/Menu.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DriftPage from "./components/DriftPage.jsx";
import TimeAttackPage from "./components/TimeAttackPage.jsx";
import HomePage from "./components/HomePage.jsx";
import ForzaPage from "./components/ForzaPage.jsx";
import "./index.css";

function AppNavMenu() {
    return (
        <div className="nav-menu-wrapper">
            <Router>
                <div>
                    <Menu />
                    <div className="page">
                        <Routes>
                            <Route path="/" exact element={<HomePage />} />
                            <Route path="/drift" element={<DriftPage />} />
                            <Route path="/timeattack" element={<TimeAttackPage />} />
                            <Route path="/forza" element={<ForzaPage />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </div>
    );
}

export default AppNavMenu;