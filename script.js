/* =========================================================
   100 ESTUDIANTES DIJERON
   SCRIPT.JS
   ========================================================= */


/* =========================================================
   BANCO DE PREGUNTAS
   ========================================================= */

const questions = [

    {
        id: 1,
        category: "Escuela",
        question: "Menciona algo que un estudiante hace antes de un examen.",
        answers: [
            { text: "Estudiar", points: 35 },
            { text: "Dormir", points: 25 },
            { text: "Repasar", points: 18 },
            { text: "Usar el celular", points: 12 },
            { text: "Preguntar a un amigo", points: 10 }
        ]
    },

    {
        id: 2,
        category: "Escuela",
        question: "Menciona algo que un estudiante lleva en su mochila.",
        answers: [
            { text: "Cuadernos", points: 30 },
            { text: "Lápices", points: 25 },
            { text: "Computadora", points: 20 },
            { text: "Cargador", points: 15 },
            { text: "Comida", points: 10 }
        ]
    },

    {
        id: 3,
        category: "Vida Estudiantil",
        question: "Menciona algo que los estudiantes hacen durante el recreo.",
        answers: [
            { text: "Comer", points: 30 },
            { text: "Hablar con amigos", points: 25 },
            { text: "Usar el celular", points: 20 },
            { text: "Caminar", points: 15 },
            { text: "Jugar", points: 10 }
        ]
    },

    {
        id: 4,
        category: "Escuela",
        question: "Menciona una materia que muchos estudiantes consideran difícil.",
        answers: [
            { text: "Matemáticas", points: 40 },
            { text: "Inglés", points: 20 },
            { text: "Ciencias", points: 18 },
            { text: "Historia", points: 12 },
            { text: "Química", points: 10 }
        ]
    },

    {
        id: 5,
        category: "Vida Estudiantil",
        question: "Menciona algo que un estudiante hace cuando llega tarde a clase.",
        answers: [
            { text: "Pedir permiso para entrar", points: 30 },
            { text: "Disculparse", points: 25 },
            { text: "Sentarse rápidamente", points: 20 },
            { text: "Dar una excusa", points: 15 },
            { text: "Preguntar qué hicieron", points: 10 }
        ]
    },

    {
        id: 6,
        category: "Escuela",
        question: "Menciona algo que los estudiantes hacen en una computadora.",
        answers: [
            { text: "Hacer tareas", points: 30 },
            { text: "Buscar información", points: 25 },
            { text: "Ver videos", points: 20 },
            { text: "Jugar", points: 15 },
            { text: "Escuchar música", points: 10 }
        ]
    },

    {
        id: 7,
        category: "Vida Estudiantil",
        question: "Menciona algo que un estudiante compra en la escuela.",
        answers: [
            { text: "Comida", points: 35 },
            { text: "Bebidas", points: 25 },
            { text: "Snacks", points: 20 },
            { text: "Útiles escolares", points: 12 },
            { text: "Agua", points: 8 }
        ]
    },

    {
        id: 8,
        category: "Vida Estudiantil",
        question: "Menciona algo que un estudiante hace después de clases.",
        answers: [
            { text: "Ir a casa", points: 30 },
            { text: "Trabajar", points: 25 },
            { text: "Hacer tarea", points: 20 },
            { text: "Practicar deportes", points: 15 },
            { text: "Salir con amigos", points: 10 }
        ]
    },

    {
        id: 9,
        category: "Escuela",
        question: "Menciona algo que necesitas para graduarte.",
        answers: [
            { text: "Créditos", points: 35 },
            { text: "Pasar las clases", points: 25 },
            { text: "Asistencia", points: 18 },
            { text: "Exámenes", points: 12 },
            { text: "Buenas calificaciones", points: 10 }
        ]
    },

    {
        id: 10,
        category: "Escuela",
        question: "Menciona algo que un estudiante hace cuando no entiende una lección.",
        answers: [
            { text: "Pregunta al maestro", points: 35 },
            { text: "Pregunta a un compañero", points: 25 },
            { text: "Busca en Internet", points: 18 },
            { text: "Practica", points: 12 },
            { text: "Se queda callado", points: 10 }
        ]
    },

    {
        id: 11,
        category: "Vida Estudiantil",
        question: "Menciona algo que los estudiantes hacen cuando reciben buenas calificaciones.",
        answers: [
            { text: "Se sienten felices", points: 30 },
            { text: "Se lo dicen a sus padres", points: 25 },
            { text: "Celebran", points: 20 },
            { text: "Presumen", points: 15 },
            { text: "Guardan la calificación", points: 10 }
        ]
    },

    {
        id: 12,
        category: "Escuela",
        question: "Menciona algo que puedes encontrar en un salón de clases.",
        answers: [
            { text: "Escritorios", points: 30 },
            { text: "Pizarrón", points: 25 },
            { text: "Computadoras", points: 20 },
            { text: "Libros", points: 15 },
            { text: "Calculadoras", points: 10 }
        ]
    },

    {
        id: 13,
        category: "Escuela",
        question: "Menciona algo que un estudiante hace durante una presentación.",
        answers: [
            { text: "Hablar", points: 35 },
            { text: "Leer", points: 25 },
            { text: "Mostrar diapositivas", points: 18 },
            { text: "Explicar", points: 12 },
            { text: "Responder preguntas", points: 10 }
        ]
    },

    {
        id: 14,
        category: "Escuela",
        question: "Menciona algo que un estudiante necesita para hacer una tarea.",
        answers: [
            { text: "Computadora", points: 30 },
            { text: "Internet", points: 25 },
            { text: "Cuaderno", points: 20 },
            { text: "Lápiz", points: 15 },
            { text: "Tiempo", points: 10 }
        ]
    },

    {
        id: 15,
        category: "Diversión",
        question: "Menciona algo que los estudiantes esperan durante el año escolar.",
        answers: [
            { text: "Vacaciones", points: 35 },
            { text: "Graduación", points: 25 },
            { text: "Días libres", points: 18 },
            { text: "Eventos escolares", points: 12 },
            { text: "Fin de clases", points: 10 }
        ]
    },

    {
        id: 16,
        category: "Vida Estudiantil",
        question: "Menciona algo que un estudiante hace cuando tiene mucha tarea.",
        answers: [
            { text: "Organizarse", points: 30 },
            { text: "Trabajar hasta tarde", points: 25 },
            { text: "Pedir ayuda", points: 20 },
            { text: "Procrastinar", points: 15 },
            { text: "Quejarse", points: 10 }
        ]
    },

    {
        id: 17,
        category: "Diversión",
        question: "Menciona algo que los estudiantes hacen durante el fin de semana.",
        answers: [
            { text: "Dormir", points: 30 },
            { text: "Salir con amigos", points: 25 },
            { text: "Jugar videojuegos", points: 20 },
            { text: "Trabajar", points: 15 },
            { text: "Ver películas", points: 10 }
        ]
    },

    {
        id: 18,
        category: "Escuela",
        question: "Menciona algo que los estudiantes llevan a educación física.",
        answers: [
            { text: "Tenis", points: 30 },
            { text: "Agua", points: 25 },
            { text: "Ropa deportiva", points: 20 },
            { text: "Toalla", points: 15 },
            { text: "Desodorante", points: 10 }
        ]
    },

    {
        id: 19,
        category: "Vida Estudiantil",
        question: "Menciona algo que un estudiante hace durante el almuerzo.",
        answers: [
            { text: "Comer", points: 35 },
            { text: "Hablar", points: 25 },
            { text: "Usar el celular", points: 18 },
            { text: "Escuchar música", points: 12 },
            { text: "Caminar", points: 10 }
        ]
    },

    {
        id: 20,
        category: "Vida Estudiantil",
        question: "Menciona una razón por la que un estudiante puede llegar tarde.",
        answers: [
            { text: "Tráfico", points: 30 },
            { text: "Se quedó dormido", points: 25 },
            { text: "Problemas con el transporte", points: 20 },
            { text: "No encontró sus cosas", points: 15 },
            { text: "Se entretuvo", points: 10 }
        ]
    },

    {
        id: 21,
        category: "Diversión",
        question: "Menciona algo que un estudiante puede hacer durante las vacaciones.",
        answers: [
            { text: "Viajar", points: 30 },
            { text: "Dormir", points: 25 },
            { text: "Trabajar", points: 20 },
            { text: "Jugar videojuegos", points: 15 },
            { text: "Salir con amigos", points: 10 }
        ]
    }

];


/* =========================================================
   GAME STATE
   ========================================================= */

let selectedQuestion = null;

let currentTeam = 1;

let score1 = 0;
let score2 = 0;

let roundPoints = 0;

let strikes = 0;

let revealedAnswers = [];

let usedQuestions = new Set();

let selectedCategory = "Todas";

let stealActive = false;

let stealTeam = null;

let stealUsed = false;

let roundFinished = false;


/* =========================================================
   DOM
   ========================================================= */

const startScreen =
    document.getElementById("startScreen");

const questionSelectScreen =
    document.getElementById("questionSelectScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startGameBtn =
    document.getElementById("startGameBtn");

const questionList =
    document.getElementById("questionList");

const questionSearch =
    document.getElementById("questionSearch");

const backToStartBtn =
    document.getElementById("backToStartBtn");

const selectQuestionBtn =
    document.getElementById("selectQuestionBtn");

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

const strike1 =
    document.getElementById("strike1");

const strike2 =
    document.getElementById("strike2");

const strike3 =
    document.getElementById("strike3");

const roundModal =
    document.getElementById("roundModal");

const modalPoints =
    document.getElementById("modalPoints");

const modalSelectBtn =
    document.getElementById("modalSelectBtn");

const team1Card =
    document.getElementById("team1Card");

const team2Card =
    document.getElementById("team2Card");


/* =========================================================
   START GAME
   ========================================================= */

if (startGameBtn) {

    startGameBtn.addEventListener(
        "click",
        () => {

            startScreen.style.display =
                "none";

            questionSelectScreen.style.display =
                "block";

            gameScreen.style.display =
                "none";

            renderQuestionList();

        }
    );

}


/* =========================================================
   QUESTION LIST
   ========================================================= */

function renderQuestionList() {

    if (!questionList) return;


    const searchText =
        questionSearch
            ? questionSearch.value
                .toLowerCase()
                .trim()
            : "";


    questionList.innerHTML = "";


    const filteredQuestions =
        questions.filter(question => {

            const categoryMatch =
                selectedCategory === "Todas" ||
                question.category === selectedCategory;


            const searchMatch =
                question.question
                    .toLowerCase()
                    .includes(searchText);


            return categoryMatch &&
                searchMatch;

        });


    if (filteredQuestions.length === 0) {

        questionList.innerHTML = `
            <div class="no-results">
                No se encontraron preguntas.
            </div>
        `;

        return;

    }


    filteredQuestions.forEach(question => {

        const option =
            document.createElement("div");


        option.className =
            "question-option";


        if (usedQuestions.has(question.id)) {

            option.classList.add("used");

        }


        option.innerHTML = `

            <div class="question-option-number">
                ${question.id}
            </div>

            <div class="question-option-content">

                <div class="question-option-category">
                    ${question.category}
                </div>

                <div class="question-option-text">
                    ${question.question}
                </div>

                <div class="question-option-answers">
                    ${question.answers.length} respuestas
                </div>

            </div>

            <div class="question-option-arrow">
                ${usedQuestions.has(question.id)
                    ? "✓"
                    : "→"}
            </div>

        `;


        option.addEventListener(
            "click",
            () => {

                selectQuestion(question);

            }
        );


        questionList.appendChild(option);

    });

}


/* =========================================================
   SEARCH
   ========================================================= */

if (questionSearch) {

    questionSearch.addEventListener(
        "input",
        renderQuestionList
    );

}


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".category-btn")
                    .forEach(btn => {

                        btn.classList.remove("active");

                    });


                button.classList.add("active");


                selectedCategory =
                    button.dataset.category ||
                    "Todas";


                renderQuestionList();

            }
        );

    });


/* =========================================================
   SELECT QUESTION
   ========================================================= */

function selectQuestion(question) {

    selectedQuestion =
        question;


    usedQuestions.add(
        question.id
    );


    questionSelectScreen.style.display =
        "none";

    gameScreen.style.display =
        "block";


    loadQuestion();

}


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

    if (!selectedQuestion) return;


    questionText.textContent =
        selectedQuestion.question;


    roundNumber.textContent =
        `PREGUNTA ${selectedQuestion.id}`;


    questionCounter.textContent =
        `${selectedQuestion.answers.length} respuestas`;


    roundPoints = 0;

    strikes = 0;

    revealedAnswers = [];

    stealActive = false;

    stealTeam = null;

    stealUsed = false;

    roundFinished = false;


    updateRoundPoints();

    updateStrikes();

    updateCurrentTeamDisplay();

    createAnswerBoard();

    removeStealPanel();

}


/* =========================================================
   CREATE ANSWER BOARD
   ========================================================= */

function createAnswerBoard() {

    answerBoard.innerHTML = "";


    selectedQuestion.answers.forEach(
        (answer, index) => {

            const number =
                index + 1;


            const card =
                document.createElement("div");


            card.className =
                "answer-card";


            card.dataset.answer =
                number;


            card.innerHTML = `

                <div class="answer-number">
                    ${number}
                </div>

                <div class="answer-content">

                    <span class="answer-text">
                        ${answer.text}
                    </span>

                    <span class="answer-points">
                        ${answer.points}
                    </span>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    revealAnswer(number);

                }
            );


            answerBoard.appendChild(card);

        }
    );

}


/* =========================================================
   REVEAL ANSWER
   ========================================================= */

function revealAnswer(number) {

    if (!selectedQuestion) return;

    if (roundFinished) return;


    const index =
        number - 1;


    if (
        index < 0 ||
        index >= selectedQuestion.answers.length
    ) {

        return;

    }


    if (
        revealedAnswers.includes(number)
    ) {

        return;

    }


    const answer =
        selectedQuestion.answers[index];


    const card =
        answerBoard.querySelector(
            `[data-answer="${number}"]`
        );


    if (!card) return;


    revealedAnswers.push(number);


    card.classList.add("revealed");


    roundPoints +=
        answer.points;


    updateRoundPoints();


    playSound("correct");


    /*
       If all answers have been revealed,
       the current team wins the round.
    */

    if (
        revealedAnswers.length ===
        selectedQuestion.answers.length
    ) {

        setTimeout(
            () => {

                awardRoundToTeam(
                    currentTeam
                );

            },
            700
        );

    }

}


/* =========================================================
   REVEAL NEXT ANSWER
   ========================================================= */

function revealNextAnswer() {

    if (!selectedQuestion) return;

    if (roundFinished) return;


    for (
        let i = 1;
        i <= selectedQuestion.answers.length;
        i++
    ) {

        if (
            !revealedAnswers.includes(i)
        ) {

            revealAnswer(i);

            return;

        }

    }

}


/* =========================================================
   STRIKE
   ========================================================= */

if (strikeBtn) {

    strikeBtn.addEventListener(
        "click",
        addStrike
    );

}


function addStrike() {

    if (!selectedQuestion) return;

    if (roundFinished) return;

    if (stealActive) return;


    strikes++;


    if (strikes > 3) {

        strikes = 3;

    }


    updateStrikes();

    playSound("wrong");


    if (strikes === 3) {

        activateSteal();

    }

}


/* =========================================================
   ACTIVATE STEAL
   ========================================================= */

function activateSteal() {

    stealActive = true;

    stealUsed = false;


    /*
       The other team gets the steal.
    */

    stealTeam =
        currentTeam === 1
            ? 2
            : 1;


    playSound("steal");

    createStealPanel();

}


/* =========================================================
   CREATE STEAL PANEL
   ========================================================= */

function createStealPanel() {

    removeStealPanel();


    const panel =
        document.createElement("div");


    panel.id =
        "stealPanel";


    panel.className =
        "steal-panel";


    panel.innerHTML = `

        <div class="steal-title">
            ¡3 STRIKES!
        </div>

        <div class="steal-message">
            EQUIPO ${stealTeam} TIENE UNA OPORTUNIDAD
        </div>

        <div class="steal-subtitle">
            ¿El equipo encontró una respuesta?
        </div>

        <div class="steal-buttons">

            <button
                id="stealCorrectBtn"
                class="steal-correct-btn"
            >
                ROBO CORRECTO
            </button>

            <button
                id="stealWrongBtn"
                class="steal-wrong-btn"
            >
                ROBO FALLIDO
            </button>

        </div>

    `;


    /*
       Place the steal panel above the scoreboard.
    */

    const scoreboard =
        document.querySelector(
            ".scoreboard"
        );


    if (scoreboard) {

        scoreboard.parentNode.insertBefore(
            panel,
            scoreboard
        );

    }
    else {

        gameScreen.appendChild(
            panel
        );

    }


    document
        .getElementById("stealCorrectBtn")
        .addEventListener(
            "click",
            stealCorrect
        );


    document
        .getElementById("stealWrongBtn")
        .addEventListener(
            "click",
            stealWrong
        );

}


/* =========================================================
   STEAL CORRECT
   ========================================================= */

function stealCorrect() {

    if (!stealActive) return;

    if (stealUsed) return;

    if (roundFinished) return;


    stealUsed = true;

    stealActive = false;


    /*
       The stealing team receives
       all accumulated round points.
    */

    awardPointsToTeam(
        stealTeam,
        roundPoints
    );


    playSound("winner");


    updateStealPanel(
        "¡ROBO CORRECTO!",
        `EQUIPO ${stealTeam} GANA ${roundPoints} PUNTOS`,
        true
    );


    setTimeout(
        () => {

            finishRound();

        },
        1500
    );

}


/* =========================================================
   STEAL WRONG
   ========================================================= */

function stealWrong() {

    if (!stealActive) return;

    if (stealUsed) return;

    if (roundFinished) return;


    stealUsed = true;

    stealActive = false;


    /*
       The original team receives
       the accumulated points.
    */

    awardPointsToTeam(
        currentTeam,
        roundPoints
    );


    playSound("wrong");


    updateStealPanel(
        "ROBO FALLIDO",
        `EQUIPO ${currentTeam} GANA ${roundPoints} PUNTOS`,
        false
    );


    setTimeout(
        () => {

            finishRound();

        },
        1500
    );

}


/* =========================================================
   AWARD ROUND TO TEAM
   ========================================================= */

function awardRoundToTeam(team) {

    if (roundFinished) return;


    roundFinished = true;


    awardPointsToTeam(
        team,
        roundPoints
    );


    playSound("winner");


    setTimeout(
        () => {

            finishRound();

        },
        700
    );

}


/* =========================================================
   AWARD POINTS
   ========================================================= */

function awardPointsToTeam(
    team,
    points
) {

    if (team === 1) {

        score1 += points;

    }
    else if (team === 2) {

        score2 += points;

    }


    updateScores();

}


/* =========================================================
   FINISH ROUND
   ========================================================= */

function finishRound() {

    if (
        roundModal.classList.contains("active")
    ) {

        return;

    }


    roundFinished = true;

    stealActive = false;


    updateRoundPoints();


    modalPoints.textContent =
        roundPoints;


    roundModal.classList.add(
        "active"
    );


    roundModal.style.display =
        "flex";

}


/* =========================================================
   UPDATE STRIKES
   ========================================================= */

function updateStrikes() {

    const strikeElements = [

        strike1,
        strike2,
        strike3

    ];


    strikeElements.forEach(
        (element, index) => {

            if (!element) return;


            if (index < strikes) {

                element.textContent =
                    "X";

                element.classList.add(
                    "active"
                );

            }
            else {

                element.textContent =
                    "";

                element.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   UPDATE ROUND POINTS
   ========================================================= */

function updateRoundPoints() {

    if (roundPointsDisplay) {

        roundPointsDisplay.textContent =
            roundPoints;

    }


    if (modalPoints) {

        modalPoints.textContent =
            roundPoints;

    }

}


/* =========================================================
   UPDATE SCORES
   ========================================================= */

function updateScores() {

    score1Display.textContent =
        score1;


    score2Display.textContent =
        score2;

}


/* =========================================================
   UPDATE CURRENT TEAM
   ========================================================= */

function updateCurrentTeamDisplay() {

    if (team1Card) {

        team1Card.classList.toggle(
            "active-team",
            currentTeam === 1
        );

    }


    if (team2Card) {

        team2Card.classList.toggle(
            "active-team",
            currentTeam === 2
        );

    }

}


/* =========================================================
   CHANGE TEAM
   ========================================================= */

function changeTeam() {

    currentTeam =
        currentTeam === 1
            ? 2
            : 1;


    updateCurrentTeamDisplay();

}


/* =========================================================
   REMOVE STEAL PANEL
   ========================================================= */

function removeStealPanel() {

    const panel =
        document.getElementById(
            "stealPanel"
        );


    if (panel) {

        panel.remove();

    }

}


/* =========================================================
   UPDATE STEAL PANEL
   ========================================================= */

function updateStealPanel(
    title,
    message,
    correct
) {

    const panel =
        document.getElementById(
            "stealPanel"
        );


    if (!panel) return;


    panel.innerHTML = `

        <div class="steal-title">
            ${title}
        </div>

        <div class="steal-message">
            ${message}
        </div>

    `;


    if (correct) {

        panel.classList.add(
            "steal-success"
        );

    }
    else {

        panel.classList.add(
            "steal-failed"
        );

    }

}


/* =========================================================
   RESET ROUND
   ========================================================= */

if (resetRoundBtn) {

    resetRoundBtn.addEventListener(
        "click",
        () => {

            if (roundModal) {

                roundModal.classList.remove(
                    "active"
                );

                roundModal.style.display =
                    "none";

            }


            loadQuestion();

        }
    );

}


/* =========================================================
   SHOW QUESTION SELECTOR
   ========================================================= */

function showQuestionSelector() {

    if (roundModal) {

        roundModal.classList.remove(
            "active"
        );

        roundModal.style.display =
            "none";

    }


    removeStealPanel();


    gameScreen.style.display =
        "none";


    questionSelectScreen.style.display =
        "block";


    renderQuestionList();

}


/* =========================================================
   CHANGE QUESTION BUTTON
   ========================================================= */

if (selectQuestionBtn) {

    selectQuestionBtn.addEventListener(
        "click",
        showQuestionSelector
    );

}


/* =========================================================
   MODAL QUESTION BUTTON
   ========================================================= */

if (modalSelectBtn) {

    modalSelectBtn.addEventListener(
        "click",
        showQuestionSelector
    );

}


/* =========================================================
   BACK TO START
   ========================================================= */

if (backToStartBtn) {

    backToStartBtn.addEventListener(
        "click",
        () => {

            questionSelectScreen.style.display =
                "none";

            gameScreen.style.display =
                "none";

            startScreen.style.display =
                "flex";

        }
    );

}


/* =========================================================
   SOUND
   ========================================================= */

function playSound(type) {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContext) return;


        const audioContext =
            new AudioContext();


        const oscillator =
            audioContext.createOscillator();


        const gain =
            audioContext.createGain();


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        let frequency = 500;


        if (type === "correct") {

            frequency = 650;

        }


        if (type === "wrong") {

            frequency = 180;

        }


        if (type === "steal") {

            frequency = 450;

        }


        if (type === "winner") {

            frequency = 850;

        }


        oscillator.frequency.value =
            frequency;


        oscillator.type =
            "sine";


        gain.gain.setValueAtTime(
            0.001,
            audioContext.currentTime
        );


        gain.gain.exponentialRampToValueAtTime(
            0.15,
            audioContext.currentTime + 0.02
        );


        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + 0.35
        );


        oscillator.start();


        oscillator.stop(
            audioContext.currentTime + 0.35
        );

    }
    catch (error) {

        console.log(
            "Audio no disponible:",
            error
        );

    }

}


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        /*
           Don't trigger game controls while
           typing in the search box.
        */

        if (
            document.activeElement &&
            (
                document.activeElement.tagName ===
                    "INPUT" ||
                document.activeElement.tagName ===
                    "TEXTAREA"
            )
        ) {

            return;

        }


        const key =
            event.key.toLowerCase();


        /*
           1-5 = reveal specific answer
        */

        if (
            ["1", "2", "3", "4", "5"]
                .includes(event.key)
        ) {

            revealAnswer(
                parseInt(event.key)
            );

            return;

        }


        /*
           SPACE = next answer
        */

        if (
            event.code === "Space"
        ) {

            event.preventDefault();

            revealNextAnswer();

            return;

        }


        /*
           X = strike
        */

        if (key === "x") {

            addStrike();

            return;

        }


        /*
           R = reset round
        */

        if (key === "r") {

            loadQuestion();

            return;

        }


        /*
           Q = question selector
        */

        if (key === "q") {

            showQuestionSelector();

            return;

        }

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

function initializeGame() {

    score1 = 0;

    score2 = 0;

    currentTeam = 1;

    roundPoints = 0;

    strikes = 0;

    selectedQuestion = null;

    revealedAnswers = [];

    usedQuestions.clear();

    selectedCategory = "Todas";

    stealActive = false;

    stealTeam = null;

    stealUsed = false;

    roundFinished = false;


    updateScores();

    updateRoundPoints();

    updateStrikes();

    updateCurrentTeamDisplay();


    /*
       Initial screen
    */

    startScreen.style.display =
        "flex";

    questionSelectScreen.style.display =
        "none";

    gameScreen.style.display =
        "none";


    if (roundModal) {

        roundModal.classList.remove(
            "active"
        );

        roundModal.style.display =
            "none";

    }

}


/* =========================================================
   START
   ========================================================= */

initializeGame();
