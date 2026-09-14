/* ==========================================
   100 ESTUDIANTES DIJERON
   GAME ENGINE
========================================== */


/* ==========================================
   VARIABLES
========================================== */

let questions = [];

let currentQuestion = 0;

let currentAnswer = 0;

let roundPoints = 0;

let score1 = 0;

let score2 = 0;

let strikes = 0;


/* ==========================================
   ELEMENTOS
========================================== */

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startGameBtn =
    document.getElementById("startGameBtn");

const questionText =
    document.getElementById("questionText");

const answerBoard =
    document.getElementById("answerBoard");

const roundNumber =
    document.getElementById("roundNumber");

const questionCounter =
    document.getElementById("questionCounter");

const roundPointsDisplay =
    document.getElementById("roundPoints");

const score1Display =
    document.getElementById("score1");

const score2Display =
    document.getElementById("score2");

const revealBtn =
    document.getElementById("revealBtn");

const strikeBtn =
    document.getElementById("strikeBtn");

const resetRoundBtn =
    document.getElementById("resetRoundBtn");

const nextRoundBtn =
    document.getElementById("nextRoundBtn");

const roundModal =
    document.getElementById("roundModal");

const modalPoints =
    document.getElementById("modalPoints");

const modalNextBtn =
    document.getElementById("modalNextBtn");


/* ==========================================
   STRIKES
========================================== */

const strikeElements = [

    document.getElementById("strike1"),

    document.getElementById("strike2"),

    document.getElementById("strike3")

];


/* ==========================================
   LOAD JSON
========================================== */

async function loadQuestions() {

    try {

        const response =
            await fetch("data/questions.json");

        if (!response.ok) {

            throw new Error(
                "No se pudo cargar questions.json"
            );

        }

        const data =
            await response.json();

        questions =
            data.questions;

    }

    catch (error) {

        console.error(error);

        alert(
            "No se pudieron cargar las preguntas."
        );

    }

}


/* ==========================================
   START GAME
========================================== */

startGameBtn.addEventListener(
    "click",
    async () => {

        if (questions.length === 0) {

            await loadQuestions();

        }

        if (questions.length === 0) {

            return;

        }

        startScreen.classList.add("hidden");

        gameScreen.classList.remove("hidden");

        currentQuestion = 0;

        score1 = 0;

        score2 = 0;

        updateScores();

        loadRound();

        playSound("start");

    }
);


/* ==========================================
   LOAD ROUND
========================================== */

function loadRound() {

    const question =
        questions[currentQuestion];

    currentAnswer = 0;

    roundPoints = 0;

    strikes = 0;

    questionText.textContent =
        question.question;

    roundNumber.textContent =
        currentQuestion + 1;

    questionCounter.textContent =
        `Pregunta ${currentQuestion + 1} de ${questions.length}`;

    roundPointsDisplay.textContent =
        roundPoints;

    resetStrikes();

    createAnswerBoard(
        question.answers
    );

}


/* ==========================================
   CREATE ANSWER BOARD
========================================== */

function createAnswerBoard(answers) {

    answerBoard.innerHTML = "";

    answers.forEach(
        (answer, index) => {

            const answerElement =
                document.createElement("div");

            answerElement.className =
                "answer hidden-answer";

            answerElement.dataset.index =
                index;

            answerElement.innerHTML = `

                <div class="answer-number">
                    ${index + 1}
                </div>

                <div class="answer-content">

                    <span class="answer-hidden-mark">
                        ?
                    </span>

                    <span class="answer-text">
                        ${answer.text}
                    </span>

                    <span class="answer-points">
                        ${answer.points}
                    </span>

                </div>

            `;

            answerBoard.appendChild(
                answerElement
            );

        }
    );

}


/* ==========================================
   REVEAL ANSWER
========================================== */

revealBtn.addEventListener(
    "click",
    () => {

        const answers =
            questions[currentQuestion].answers;

        if (
            currentAnswer >= answers.length
        ) {

            finishRound();

            return;

        }

        const answerElement =
            answerBoard.children[currentAnswer];

        answerElement.classList.remove(
            "hidden-answer"
        );

        answerElement.classList.add(
            "revealed"
        );

        roundPoints +=
            answers[currentAnswer].points;

        roundPointsDisplay.textContent =
            roundPoints;

        currentAnswer++;

        playSound("reveal");

        if (
            currentAnswer >= answers.length
        ) {

            revealBtn.textContent =
                "RONDA TERMINADA";

        }

    }
);


/* ==========================================
   STRIKE
========================================== */

strikeBtn.addEventListener(
    "click",
    () => {

        if (strikes >= 3) {

            return;

        }

        strikeElements[strikes]
            .classList.add("active");

        strikes++;

        playSound("strike");

        if (strikes === 3) {

            setTimeout(
                () => {

                    finishRound();

                },
                800
            );

        }

    }
);


/* ==========================================
   RESET ROUND
========================================== */

resetRoundBtn.addEventListener(
    "click",
    () => {

        loadRound();

        revealBtn.textContent =
            "REVELAR RESPUESTA";

    }
);


/* ==========================================
   NEXT ROUND
========================================== */

nextRoundBtn.addEventListener(
    "click",
    () => {

        nextRound();

    }
);


modalNextBtn.addEventListener(
    "click",
    () => {

        roundModal.classList.add(
            "hidden"
        );

        nextRound();

    }
);


/* ==========================================
   FINISH ROUND
========================================== */

function finishRound() {

    modalPoints.textContent =
        roundPoints;

    roundModal.classList.remove(
        "hidden"
    );

}


/* ==========================================
   NEXT QUESTION
========================================== */

function nextRound() {

    currentQuestion++;

    if (
        currentQuestion >= questions.length
    ) {

        showFinalScore();

        return;

    }

    revealBtn.textContent =
        "REVELAR RESPUESTA";

    loadRound();

}


/* ==========================================
   FINAL SCORE
========================================== */

function showFinalScore() {

    const winner =
        score1 > score2
            ? "¡GANA EL EQUIPO 1!"
            : score2 > score1
                ? "¡GANA EL EQUIPO 2!"
                : "¡EMPATE!";

    questionText.textContent =
        winner;

    answerBoard.innerHTML = `

        <div
            style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 50px;
                font-size: 45px;
                font-weight: 900;
            "
        >
            ${score1} — ${score2}
        </div>

    `;

    roundPointsDisplay.textContent =
        "FIN";

    playSound("winner");

}


/* ==========================================
   ADD SCORE
========================================== */

function addScore(team) {

    if (team === 1) {

        score1 += roundPoints;

    }

    if (team === 2) {

        score2 += roundPoints;

    }

    updateScores();

    playSound("score");

}


/* ==========================================
   UPDATE SCORES
========================================== */

function updateScores() {

    score1Display.textContent =
        score1;

    score2Display.textContent =
        score2;

}


/* ==========================================
   RESET STRIKES
========================================== */

function resetStrikes() {

    strikes = 0;

    strikeElements.forEach(
        strike => {

            strike.classList.remove(
                "active"
            );

        }
    );

}


/* ==========================================
   SOUND SYSTEM
   Uses Web Audio API
========================================== */

let audioContext = null;


function getAudioContext() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();

    }

    return audioContext;

}


function beep(
    frequency,
    duration,
    type = "sine"
) {

    const ctx =
        getAudioContext();

    const oscillator =
        ctx.createOscillator();

    const gain =
        ctx.createGain();

    oscillator.type =
        type;

    oscillator.frequency.value =
        frequency;

    gain.gain.setValueAtTime(
        0.08,
        ctx.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        ctx.currentTime + duration
    );

    oscillator.connect(gain);

    gain.connect(
        ctx.destination
    );

    oscillator.start();

    oscillator.stop(
        ctx.currentTime + duration
    );

}


function playSound(type) {

    if (type === "start") {

        beep(330, 0.15);
        setTimeout(
            () => beep(440, 0.15),
            150
        );
        setTimeout(
            () => beep(660, 0.3),
            300
        );

    }

    if (type === "reveal") {

        beep(520, 0.1);

        setTimeout(
            () => beep(700, 0.15),
            100
        );

    }

    if (type === "strike") {

        beep(
            120,
            0.5,
            "sawtooth"
        );

    }

    if (type === "score") {

        beep(500, 0.1);

        setTimeout(
            () => beep(700, 0.15),
            100
        );

    }

    if (type === "winner") {

        beep(440, 0.15);

        setTimeout(
            () => beep(550, 0.15),
            150
        );

        setTimeout(
            () => beep(660, 0.15),
            300
        );

        setTimeout(
            () => beep(880, 0.4),
            450
        );

    }

}


/* ==========================================
   KEYBOARD CONTROLS
========================================== */

document.addEventListener(
    "keydown",
    event => {

        /*
         Space = reveal
        X = strike
        R = reset
        N = next round
        */

        if (
            gameScreen.classList.contains(
                "hidden"
            )
        ) {

            return;

        }

        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            revealBtn.click();

        }

        if (
            event.key.toLowerCase() === "x"
        ) {

            strikeBtn.click();

        }

        if (
            event.key.toLowerCase() === "r"
        ) {

            resetRoundBtn.click();

        }

        if (
            event.key.toLowerCase() === "n"
        ) {

            nextRoundBtn.click();

        }

    }
);


/* ==========================================
   INITIAL LOAD
========================================== */

loadQuestions();