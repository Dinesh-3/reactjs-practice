import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GuessSecretNumber from "./guessSecretNumber";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <nav>
                                <Link to="/">Home</Link> | <Link to="/guess-secret-number">Guess Secret Number</Link>
                            </nav>
                        }
                    />
                    <Route path="/guess-secret-number" element={<GuessSecretNumber />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
