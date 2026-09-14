/* =========================================================
   100 ESTUDIANTES DIJERON
   Juego estilo concurso
   ========================================================= */


/* =========================================================
   BANCO DE PREGUNTAS
   ========================================================= */

const questions = [

    {
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
   VARIABLES DEL JUEGO
   ========================================================= */

let currentQuestion = 0;
let currentAnswer = 0;

let roundPoints = 0;

let score1 = 0;
let score2 = 0;

let strikes = 0;


/* =========================================================
   ELEMENTOS HTML
   ========================================================= */

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


/* =========================================================
   STRIKES
   ========================================================= */

const strikeElements = [

    document.getElementById("strike1"),
    document.getElementById("strike2"),
    document.getElementById("strike3")

];


/* =========================================================
   INICIAR JUEGO
   ========================================================= */

startGameBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    currentQuestion = 0;

    score1 = 0;
    score2 = 0;

    updateScores();

    loadRound();

    playSound("start");

});


/* =========================================================
   CARGAR RONDA
   ========================================================= */

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

    revealBtn.textContent =
        "REVELAR RESPUESTA";

    resetStrikes();

    createAnswerBoard(
        question.answers
    );

}


/* =========================================================
   CREAR TABLERO
   ========================================================= */

function createAnswerBoard(answers) {

    answerBoard.innerHTML = "";

    answers.forEach((answer, index) => {

        const answerElement =
            document.createElement("div");

        answerElement.className =
            "answer hidden-answer";

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

    });

}


/* =========================================================
   REVELAR RESPUESTA
   ========================================================= */

revealBtn.addEventListener("click", () => {

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

});


/* =========================================================
   ERROR
   ========================================================= */

strikeBtn.addEventListener("click", () => {

    if (strikes >= 3) {

        return;

    }

    strikeElements[strikes]
        .classList.add("active");

    strikes++;

    playSound("strike");

    if (strikes === 3) {

        setTimeout(() => {

            finishRound();

        }, 800);

    }

});


/* =========================================================
   REINICIAR RONDA
   ========================================================= */

resetRoundBtn.addEventListener("click", () => {

    loadRound();

});


/* =========================================================
   SIGUIENTE RONDA
   ========================================================= */

nextRoundBtn.addEventListener("click", () => {

    nextRound();

});


modalNextBtn.addEventListener("click", () => {

    roundModal.classList.add("hidden");

    nextRound();

});


/* =========================================================
   TERMINAR RONDA
   ========================================================= */

function finishRound() {

    modalPoints.textContent =
        roundPoints;

    roundModal.classList.remove(
        "hidden"
    );

}


/* =========================================================
   SIGUIENTE PREGUNTA
   ========================================================= */

function nextRound() {

    currentQuestion++;

    if (
        currentQuestion >= questions.length
    ) {

        showFinalScore();

        return;

    }

    loadRound();

}


/* =========================================================
   PANTALLA FINAL
   ========================================================= */

function showFinalScore() {

    let winner;

    if (score1 > score2) {

        winner =
            "¡GANA EL EQUIPO 1!";

    } else if (score2 > score1) {

        winner =
            "¡GANA EL EQUIPO 2!";

    } else {

        winner =
            "¡EMPATE!";

    }

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

            <div>
                ${score1} — ${score2}
            </div>

        </div>

    `;

    roundPointsDisplay.textContent =
        "FIN";

    playSound("winner");

}


/* =========================================================
   AGREGAR PUNTOS
   ========================================================= */

function addScore(team) {

    if (roundPoints <= 0) {

        return;

    }

    if (team === 1) {

        score1 += roundPoints;

    }

    if (team === 2) {

        score2 += roundPoints;

    }

    updateScores();

    playSound("score");

}


/* =========================================================
   ACTUALIZAR MARCADORES
   ========================================================= */

function updateScores() {

    score1Display.textContent =
        score1;

    score2Display.textContent =
        score2;

}


/* =========================================================
   REINICIAR ERRORES
   ========================================================= */

function resetStrikes() {

    strikes = 0;

    strikeElements.forEach(strike => {

        strike.classList.remove(
            "active"
        );

    });

}


/* =========================================================
   SISTEMA DE SONIDO
   ========================================================= */

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


/* =========================================================
   DIFERENTES SONIDOS
   ========================================================= */

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


/* =========================================================
   ATAJOS DE TECLADO
   =========================================================

   ESPACIO = Revelar
   X       = Error
   R       = Reiniciar
   N       = Siguiente ronda
   1       = Puntos Equipo 1
   2       = Puntos Equipo 2

   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

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


        if (
            event.key === "1"
        ) {

            addScore(1);

        }


        if (
            event.key === "2"
        ) {

            addScore(2);

        }

    }
);
