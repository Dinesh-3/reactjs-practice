import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GuessSecretNumber from "./guessSecretNumber";
import Hello from "./components/Hello";
import DynamicComponent from "./components/DynamicComponent";

import { section } from "./data/section";
import CreateElement from "./components/CreateElement";
import TicTacToeGame from "./components/TicTacToe";
import Clock from "./components/Clock";
import LazyLoading from "./components/LazyLoading";
import Hooks from "./components/Hooks";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav className="nav-container">
                    <Link to="/">Home</Link>
                    <Link to="/guess-secret-number">Guess Secret Number</Link>
                    <Link to="/dynamic">Dynamic Component</Link>
                    <Link to="/create-element">React.createElement Syntax</Link>
                    <Link to="/hello">Hello</Link>
                    <Link to="/tic-tac-toe">Tic Tac Toe Game</Link>
                    <Link to="/clock">Clock</Link>
                    <Link to="/hooks">Hooks</Link>
                    <Link to="/lazy-loading">Lazy Loading</Link>
                </nav>

                <Routes>
                    {/*
                    react router v6 doesn't support exact anymore.
                    old - v5 <Route exact path="/" component={Home} />
                    new - v6 <Route path="/" element={<Home />} />
                    You don't need to use an exact prop on <Route path="/"> anymore. This is because all paths match exactly by default. 
                    If you want to match more of the URL because you have child routes use a trailing * as in <Route path="users/*">.
                    */}
                    {/* <Route
                        path="/"
                    /> */}

                    <Route path="/guess-secret-number" element={<GuessSecretNumber />} />
                    <Route path="/hello" element={<Hello greet="Hey What's Up!!" />} />
                    <Route path="/dynamic" element={<DynamicComponent section={section} />} />
                    <Route path="/create-element" element={<CreateElement name="Dinesh" />} />
                    <Route path="/tic-tac-toe" element={<TicTacToeGame />} />
                    <Route path="/clock" element={<Clock />} />
                    <Route path="/hooks" element={<Hooks />} />
                    <Route path="/lazy-loading" element={<LazyLoading />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
