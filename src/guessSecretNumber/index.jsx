import React, { useState } from "react";
import "./style.css";

const MAX_RANGE = 10;

const RESULT = {
    LOW: "Too Low",
    HIGH: "Too High",
    CORRECT: "Correct Answer!",
    GAME_OVER: "Game Over! Try Again",
    GUESS: "Start Guessing"
};

const initialContext = {
    score: MAX_RANGE,
    highScore: 0,
    answer: Number.parseInt(Math.random() * MAX_RANGE),
    result: RESULT.GUESS,
    showAnswer: "?"
};

const GuessSecretNumber = () => {
    const [context, setContext] = useState(initialContext);

    const [userGuess, setUserGuess] = useState("");

    const checkAnswer = () => {
        if (!userGuess) return;

        const prevContext = { ...context };

        prevContext.showAnswer = "?";

        if (context.score === 0) {
            prevContext.result = RESULT.GAME_OVER;
            return setContext(prevContext);
        }

        if (userGuess === context.answer) {
            prevContext.score += 1;
            prevContext.result = RESULT.CORRECT;

            prevContext.showAnswer = prevContext.answer;
            prevContext.highScore = Math.max(prevContext.score, prevContext.highScore);

            prevContext.answer = Number.parseInt(Math.random() * 10);
        } else {
            prevContext.score -= 1;
            prevContext.result = userGuess < context.answer ? RESULT.LOW : RESULT.HIGH;
        }

        // setUserGuess("");
        setContext(prevContext);
    };

    const handleUserGuessChange = (e) => {
        const number = Number.parseInt(e.target.value);
        if (number === NaN) setUserGuess(null);
        setUserGuess(number);
    };

    const handleTryAgain = () => {
        setContext(initialContext);
        setUserGuess("");
    };

    return (
        <div id="guess-my-number">
            <div className="header">
                <h1>Guess My Number!</h1>
                <p className="between">(Between 1 and {MAX_RANGE})</p>
                <button className="btn again" onClick={handleTryAgain}>
                    Again!
                </button>
                <div className="number">{context.showAnswer}</div>
            </div>
            <div className={`main ${context.showAnswer !== "?" ? "bg-green" : ""}`}>
                <section className="left">
                    <input type="number" className="guess" value={userGuess} onChange={handleUserGuessChange} />
                    <button className="btn check" onClick={checkAnswer}>
                        Check!
                    </button>
                </section>
                <section className="right">
                    <p className="message">{context.result}</p>
                    <p className="label-score">
                        💯 Score: <span className="score">{context.score}</span>
                    </p>
                    <p className="label-highscore">
                        🥇 Highscore: <span className="highscore">{context.highScore}</span>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default GuessSecretNumber;
