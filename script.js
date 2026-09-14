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
   ESTADO DEL JUEGO
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

/*
   Estado del robo

   false = todavía no hay robo
   true  = el otro equipo tiene la oportunidad
*/
let stealActive = false;

let stealTeam = null;

let stealUsed = false;


/* =========================================================
   ELEMENTOS DEL DOM
   ========================================================= */

const startScreen = document.getElementById("startScreen");
const questionSelectScreen = document.getElementById("questionSelectScreen");
const gameScreen = document.getElementById("gameScreen");

const startGameBtn = document.getElementById("startGameBtn");

const questionList = document.getElementById("questionList");
const questionSearch = document.getElementById("questionSearch");

const backToStartBtn = document.getElementById("backToStartBtn");
const selectQuestionBtn = document.getElementById("selectQuestionBtn");

const questionText = document.getElementById("questionText");
const answerBoard = document.getElementById("answerBoard");

const roundNumber = document.getElementById("roundNumber");
const questionCounter = document.getElementById("questionCounter");

const roundPointsDisplay = document.getElementById("roundPoints");

const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");

const revealBtn = document.getElementById("revealBtn");
const strikeBtn = document.getElementById("strikeBtn");
const resetRoundBtn = document.getElementById("resetRoundBtn");

const strike1 = document.getElementById("strike1");
const strike2 = document.getElementById("strike2");
const strike3 = document.getElementById("strike3");

const roundModal = document.getElementById("roundModal");
const modalPoints = document.getElementById("modalPoints");
const modalSelectBtn = document.getElementById("modalSelectBtn");


/* =========================================================
   INICIAR JUEGO
   ========================================================= */

if (startGameBtn) {
    startGameBtn.addEventListener("click", () => {

        startScreen.classList.remove("active");
        startScreen.style.display = "none";

        questionSelectScreen.classList.add("active");
        questionSelectScreen.style.display = "block";

        renderQuestionList();
    });
}


/* =========================================================
   MOSTRAR LISTA DE PREGUNTAS
   ========================================================= */

function renderQuestionList() {

    if (!questionList) return;

    const searchText = questionSearch
        ? questionSearch.value.toLowerCase().trim()
        : "";

    questionList.innerHTML = "";

    const filteredQuestions = questions.filter(q => {

        const matchesCategory =
            selectedCategory === "Todas" ||
            q.category === selectedCategory;

        const matchesSearch =
            q.question.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
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

        const option = document.createElement("div");

        option.className = "question-option";

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
                ${usedQuestions.has(question.id) ? "✓" : "→"}
            </div>
        `;


        option.addEventListener("click", () => {

            selectQuestion(question);

        });


        questionList.appendChild(option);

    });
}


/* =========================================================
   BUSCADOR
   ========================================================= */

if (questionSearch) {

    questionSearch.addEventListener("input", () => {

        renderQuestionList();

    });

}


/* =========================================================
   CATEGORÍAS
   ========================================================= */

const categoryButtons =
    document.querySelectorAll(".category-btn");


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory =
            button.dataset.category || "Todas";

        renderQuestionList();

    });

});


/* =========================================================
   SELECCIONAR PREGUNTA
   ========================================================= */

function selectQuestion(question) {

    selectedQuestion = question;

    usedQuestions.add(question.id);

    questionSelectScreen.classList.remove("active");
    questionSelectScreen.style.display = "none";

    gameScreen.classList.add("active");
    gameScreen.style.display = "block";

    loadQuestion();

}


/* =========================================================
   CARGAR PREGUNTA
   ========================================================= */

function loadQuestion() {

    if (!selectedQuestion) return;

    questionText.textContent =
        selectedQuestion.question;


    if (roundNumber) {
        roundNumber.textContent =
            `PREGUNTA ${selectedQuestion.id}`;
    }


    if (questionCounter) {

        questionCounter.textContent =
            `${selectedQuestion.answers.length} respuestas`;

    }


    roundPoints = 0;

    strikes = 0;

    revealedAnswers = [];

    stealActive = false;

    stealTeam = null;

    stealUsed = false;


    updateRoundPoints();

    updateStrikes();

    createAnswerBoard();

    removeStealPanel();

    updateCurrentTeamDisplay();

}


/* =========================================================
   CREAR TABLERO DE RESPUESTAS
   ========================================================= */

function createAnswerBoard() {

    if (!answerBoard) return;

    answerBoard.innerHTML = "";


    selectedQuestion.answers.forEach((answer, index) => {

        const answerNumber = index + 1;


        const card = document.createElement("div");

        card.className = "answer-card";

        card.dataset.answer = answerNumber;


        card.innerHTML = `

            <div class="answer-number">
                ${answerNumber}
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


        card.addEventListener("click", () => {

            revealAnswer(answerNumber);

        });


        answerBoard.appendChild(card);

    });

}


/* =========================================================
   REVELAR RESPUESTA
   ========================================================= */

function revealAnswer(number) {

    if (!selectedQuestion) return;

    const index = number - 1;

    if (
        index < 0 ||
        index >= selectedQuestion.answers.length
    ) {
        return;
    }


    /*
       Si ya fue revelada, no hacemos nada.
    */

    if (revealedAnswers.includes(number)) {
        return;
    }


    /*
       Si estamos en robo, revelar una respuesta
       significa que la respuesta fue encontrada.
    */

    const answer =
        selectedQuestion.answers[index];


    const card =
        answerBoard.querySelector(
            `.answer-card[data-answer="${number}"]`
        );


    if (!card) return;


    revealedAnswers.push(number);


    card.classList.add("revealed");


    /*
       Animación de puntos
    */

    roundPoints += answer.points;

    updateRoundPoints();

    playSound("correct");


    /*
       Si todas las respuestas fueron reveladas,
       termina la ronda.
    */

    if (
        revealedAnswers.length ===
        selectedQuestion.answers.length
    ) {

        setTimeout(() => {

            finishRound();

        }, 800);

    }

}


/* =========================================================
   STRIKE
   ========================================================= */

if (strikeBtn) {

    strikeBtn.addEventListener("click", () => {

        addStrike();

    });

}


function addStrike() {

    /*
       Si el robo ya está activo, no se pueden agregar
       más strikes al equipo original.
    */

    if (stealActive) return;

    /*
       Si la ronda ya terminó.
    */

    if (roundModal.classList.contains("active")) {
        return;
    }


    strikes++;


    if (strikes > 3) {
        strikes = 3;
    }


    updateStrikes();

    playSound("wrong");


    /*
       Después de 3 strikes:
       el otro equipo obtiene una oportunidad.
    */

    if (strikes === 3) {

        activateSteal();

    }

}


/* =========================================================
   ACTIVAR ROBO
   ========================================================= */

function activateSteal() {

    stealActive = true;

    stealUsed = false;

    /*
       Cambiar al otro equipo.
    */

    stealTeam =
        currentTeam === 1 ? 2 : 1;


    playSound("steal");


    createStealPanel();

}


/* =========================================================
   CREAR PANEL DE ROBO
   ========================================================= */

function createStealPanel() {

    removeStealPanel();


    const panel = document.createElement("div");

    panel.id = "stealPanel";

    panel.className = "steal-panel";


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
       Lo colocamos antes del marcador.
       Si no encuentra scoreboard, lo coloca al final.
    */

    const scoreboard =
        document.querySelector(".scoreboard");


    if (scoreboard) {

        scoreboard.parentNode.insertBefore(
            panel,
            scoreboard
        );

    } else {

        gameScreen.appendChild(panel);

    }


    const correctBtn =
        document.getElementById("stealCorrectBtn");

    const wrongBtn =
        document.getElementById("stealWrongBtn");


    correctBtn.addEventListener("click", () => {

        stealCorrect();

    });


    wrongBtn.addEventListener("click", () => {

        stealWrong();

    });

}


/* =========================================================
   ROBO CORRECTO
   ========================================================= */

function stealCorrect() {

    if (!stealActive || stealUsed) return;


    stealUsed = true;

    stealActive = false;


    /*
       El equipo que hizo el robo recibe todos
       los puntos acumulados.
    */

    if (stealTeam === 1) {

        score1 += roundPoints;

    } else {

        score2 += roundPoints;

    }


    updateScores();


    playSound("winner");


    updateStealPanel(
        `¡ROBO CORRECTO!`,
        `EQUIPO ${stealTeam} GANA ${roundPoints} PUNTOS`,
        true
    );


    setTimeout(() => {

        finishRound();

    }, 1500);

}


/* =========================================================
   ROBO FALLIDO
   ========================================================= */

function stealWrong() {

    if (!stealActive || stealUsed) return;


    stealUsed = true;

    stealActive = false;


    /*
       Si el otro equipo falla el robo,
       los puntos regresan al equipo original.
    */

    if (currentTeam === 1) {

        score1 += roundPoints;

    } else {

        score2 += roundPoints;

    }


    updateScores();


    playSound("wrong");


    updateStealPanel(
        `ROBO FALLIDO`,
        `EQUIPO ${currentTeam} GANA ${roundPoints} PUNTOS`,
        false
    );


    setTimeout(() => {

        finishRound();

    }, 1500);

}


/* =========================================================
   ACTUALIZAR PANEL DE ROBO
   ========================================================= */

function updateStealPanel(title, message, correct) {

    const panel =
        document.getElementById("stealPanel");


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

        panel.classList.add("steal-success");

    } else {

        panel.classList.add("steal-failed");

    }

}


/* =========================================================
   ELIMINAR PANEL DE ROBO
   ========================================================= */

function removeStealPanel() {

    const panel =
        document.getElementById("stealPanel");


    if (panel) {

        panel.remove();

    }

}


/* =========================================================
   ACTUALIZAR STRIKES
   ========================================================= */

function updateStrikes() {

    const strikesElements = [
        strike1,
        strike2,
        strike3
    ];


    strikesElements.forEach((element, index) => {

        if (!element) return;


        if (index < strikes) {

            element.textContent = "X";

            element.classList.add("active");

        } else {

            element.textContent = "";

            element.classList.remove("active");

        }

    });

}


/* =========================================================
   ACTUALIZAR PUNTOS DE RONDA
   ========================================================= */

function updateRoundPoints() {

    if (roundPointsDisplay) {

        roundPointsDisplay.textContent =
            roundPoints;

    }


    /*
       También actualizamos el modal si existe.
    */

    if (modalPoints) {

        modalPoints.textContent =
            roundPoints;

    }

}


/* =========================================================
   ACTUALIZAR MARCADOR
   ========================================================= */

function updateScores() {

    if (score1Display) {

        score1Display.textContent =
            score1;

    }


    if (score2Display) {

        score2Display.textContent =
            score2;

    }

}


/* =========================================================
   EQUIPO ACTUAL
   ========================================================= */

function updateCurrentTeamDisplay() {

    /*
       Intentamos encontrar elementos comunes
       de la interfaz.
    */

    const team1 =
        document.querySelector(".team-1");

    const team2 =
        document.querySelector(".team-2");


    if (team1) {

        team1.classList.toggle(
            "active-team",
            currentTeam === 1
        );

    }


    if (team2) {

        team2.classList.toggle(
            "active-team",
            currentTeam === 2
        );

    }

}


/* =========================================================
   CAMBIAR EQUIPO
   ========================================================= */

function changeTeam() {

    currentTeam =
        currentTeam === 1 ? 2 : 1;


    updateCurrentTeamDisplay();

}


/* =========================================================
   TERMINAR RONDA
   ========================================================= */

function finishRound() {

    /*
       Si la ronda terminó por todas las respuestas,
       los puntos todavía pertenecen al equipo actual.
    */

    if (
        !stealUsed &&
        revealedAnswers.length ===
        selectedQuestion.answers.length
    ) {

        if (currentTeam === 1) {

            score1 += roundPoints;

        } else {

            score2 += roundPoints;

        }

        updateScores();

    }


    updateRoundPoints();


    /*
       Mostrar modal.
    */

    if (modalPoints) {

        modalPoints.textContent =
            roundPoints;

    }


    if (roundModal) {

        roundModal.classList.add("active");

        roundModal.style.display = "flex";

    }

}


/* =========================================================
   REINICIAR RONDA
   ========================================================= */

if (resetRoundBtn) {

    resetRoundBtn.addEventListener("click", () => {

        loadQuestion();

    });

}


/* =========================================================
   ELEGIR OTRA PREGUNTA
   ========================================================= */

function showQuestionSelector() {

    if (roundModal) {

        roundModal.classList.remove("active");

        roundModal.style.display = "none";

    }


    removeStealPanel();


    gameScreen.classList.remove("active");
    gameScreen.style.display = "none";


    questionSelectScreen.classList.add("active");
    questionSelectScreen.style.display = "block";


    renderQuestionList();

}


/*
   Botón de cambiar pregunta
*/

if (selectQuestionBtn) {

    selectQuestionBtn.addEventListener(
        "click",
        showQuestionSelector
    );

}


/*
   Botón del modal
*/

if (modalSelectBtn) {

    modalSelectBtn.addEventListener(
        "click",
        showQuestionSelector
    );

}


/* =========================================================
   VOLVER AL INICIO
   ========================================================= */

if (backToStartBtn) {

    backToStartBtn.addEventListener("click", () => {

        questionSelectScreen.classList.remove("active");
        questionSelectScreen.style.display = "none";

        startScreen.classList.add("active");
        startScreen.style.display = "flex";

    });

}


/* =========================================================
   SONIDOS
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

        gain.connect(audioContext.destination);


        if (type === "correct") {

            oscillator.frequency.value = 650;

        }

        else if (type === "wrong") {

            oscillator.frequency.value = 180;

        }

        else if (type === "steal") {

            oscillator.frequency.value = 450;

        }

        else if (type === "winner") {

            oscillator.frequency.value = 850;

        }


        oscillator.type = "sine";


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
   TECLADO
   ========================================================= */

document.addEventListener("keydown", event => {

    /*
       No ejecutar comandos mientras el usuario
       escribe en el buscador.
    */

    if (
        document.activeElement &&
        (
            document.activeElement.tagName === "INPUT" ||
            document.activeElement.tagName === "TEXTAREA"
        )
    ) {

        return;

    }


    const key =
        event.key.toLowerCase();


    /*
       1 - 5
       Revelar respuestas directamente
    */

    if (
        ["1", "2", "3", "4", "5"]
        .includes(event.key)
    ) {

        const number =
            parseInt(event.key);

        revealAnswer(number);

        return;

    }


    /*
       ESPACIO
       Revelar la siguiente respuesta no revelada.
    */

    if (event.code === "Space") {

        event.preventDefault();

        revealNextAnswer();

        return;

    }


    /*
       X
       Strike
    */

    if (key === "x") {

        addStrike();

        return;

    }


    /*
       R
       Reiniciar ronda
    */

    if (key === "r") {

        loadQuestion();

        return;

    }


    /*
       Q
       Cambiar pregunta
    */

    if (key === "q") {

        showQuestionSelector();

        return;

    }

});


/* =========================================================
   REVELAR SIGUIENTE RESPUESTA
   ========================================================= */

function revealNextAnswer() {

    if (!selectedQuestion) return;


    for (
        let i = 1;
        i <= selectedQuestion.answers.length;
        i++
    ) {

        if (!revealedAnswers.includes(i)) {

            revealAnswer(i);

            return;

        }

    }

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

function initializeGame() {

    /*
       Asegurar estados iniciales.
    */

    score1 = 0;

    score2 = 0;

    currentTeam = 1;

    roundPoints = 0;

    strikes = 0;

    selectedQuestion = null;

    revealedAnswers = [];

    usedQuestions.clear();

    selectedCategory = "Todas";


    updateScores();

    updateRoundPoints();

    updateStrikes();


    /*
       Mostrar inicio.
    */

    if (startScreen) {

        startScreen.style.display = "flex";

    }

    if (questionSelectScreen) {

        questionSelectScreen.style.display = "none";

    }

    if (gameScreen) {

        gameScreen.style.display = "none";

    }

}


/* =========================================================
   INICIAR
   ========================================================= */

initializeGame();
