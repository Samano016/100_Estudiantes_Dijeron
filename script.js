```javascript
/* =========================================================
   100 ESTUDIANTES DIJERON
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
   VARIABLES
========================================================= */

let selectedQuestion = null;

let currentAnswer = 0;

let roundPoints = 0;

let score1 = 0;

let score2 = 0;

let strikes = 0;

let selectedCategory = "Todas";


/* =========================================================
   ELEMENTOS
========================================================= */

const startScreen =
    document.getElementById("startScreen");

const questionSelectScreen =
    document.getElementById(
        "questionSelectScreen"
    );

const gameScreen =
    document.getElementById("gameScreen");

const startGameBtn =
    document.getElementById(
        "startGameBtn"
    );

const questionList =
    document.getElementById(
        "questionList"
    );

const questionSearch =
    document.getElementById(
        "questionSearch"
    );

const backToStartBtn =
    document.getElementById(
        "backToStartBtn"
    );

const selectQuestionBtn =
    document.getElementById(
        "selectQuestionBtn"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const answerBoard =
    document.getElementById(
        "answerBoard"
    );

const roundNumber =
    document.getElementById(
        "roundNumber"
    );

const questionCounter =
    document.getElementById(
        "questionCounter"
    );

const roundPointsDisplay =
    document.getElementById(
        "roundPoints"
    );

const score1Display =
    document.getElementById(
        "score1"
    );

const score2Display =
    document.getElementById(
        "score2"
    );

const revealBtn =
    document.getElementById(
        "revealBtn"
    );

const strikeBtn =
    document.getElementById(
        "strikeBtn"
    );

const resetRoundBtn =
    document.getElementById(
        "resetRoundBtn"
    );

const roundModal =
    document.getElementById(
        "roundModal"
    );

const modalPoints =
    document.getElementById(
        "modalPoints"
    );

const modalSelectBtn =
    document.getElementById(
        "modalSelectBtn"
    );

const strikeElements = [

    document.getElementById("strike1"),

    document.getElementById("strike2"),

    document.getElementById("strike3")

];


/* =========================================================
   ABRIR SELECTOR
========================================================= */

startGameBtn.addEventListener(
    "click",
    () => {

        startScreen.classList.add(
            "hidden"
        );

        questionSelectScreen.classList.remove(
            "hidden"
        );

        renderQuestionList();

    }
);


/* =========================================================
   MOSTRAR PREGUNTAS
========================================================= */

function renderQuestionList() {

    const search =
        questionSearch.value
            .toLowerCase()
            .trim();

    questionList.innerHTML = "";

    const filteredQuestions =
        questions.filter(question => {

            const matchesCategory =
                selectedCategory === "Todas" ||
                question.category === selectedCategory;

            const matchesSearch =
                question.question
                    .toLowerCase()
                    .includes(search);

            return (
                matchesCategory &&
                matchesSearch
            );

        });


    if (
        filteredQuestions.length === 0
    ) {

        questionList.innerHTML = `

            <div class="no-results">

                No se encontraron preguntas.

            </div>

        `;

        return;

    }


    filteredQuestions.forEach(
        (question, index) => {

            const card =
                document.createElement("button");

            card.className =
                "question-option";

            card.innerHTML = `

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
                    →
                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    selectQuestion(
                        question
                    );

                }
            );


            questionList.appendChild(
                card
            );

        }
    );

}


/* =========================================================
   BUSCAR
========================================================= */

questionSearch.addEventListener(
    "input",
    () => {

        renderQuestionList();

    }
);


/* =========================================================
   CATEGORÍAS
========================================================= */

document
    .querySelectorAll(".category-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".category-btn"
                    )
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                selectedCategory =
                    button.dataset.category;


                renderQuestionList();

            }
        );

    });


/* =========================================================
   SELECCIONAR PREGUNTA
========================================================= */

function selectQuestion(question) {

    selectedQuestion =
        question;

    questionSelectScreen.classList.add(
        "hidden"
    );

    gameScreen.classList.remove(
        "hidden"
    );

    loadQuestion();

}


/* =========================================================
   CARGAR PREGUNTA
========================================================= */

function loadQuestion() {

    currentAnswer = 0;

    roundPoints = 0;

    strikes = 0;

    questionText.textContent =
        selectedQuestion.question;

    roundNumber.textContent =
        selectedQuestion.id;

    questionCounter.textContent =
        `Pregunta #${selectedQuestion.id}`;

    roundPointsDisplay.textContent =
        "0";

    revealBtn.textContent =
        "REVELAR RESPUESTA";

    resetStrikes();

    createAnswerBoard();

}


/* =========================================================
   CREAR TABLERO
========================================================= */

function createAnswerBoard() {

    answerBoard.innerHTML = "";

    selectedQuestion.answers.forEach(
        (answer, index) => {

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

        }
    );

}


/* =========================================================
   REVELAR
========================================================= */

revealBtn.addEventListener(
    "click",
    () => {

        const answers =
            selectedQuestion.answers;


        if (
            currentAnswer >= answers.length
        ) {

            finishRound();

            return;

        }


        const answerElement =
            answerBoard.children[
                currentAnswer
            ];


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


/* =========================================================
   ERROR
========================================================= */

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


/* =========================================================
   REINICIAR
========================================================= */

resetRoundBtn.addEventListener(
    "click",
    () => {

        loadQuestion();

    }
);


/* =========================================================
   CAMBIAR PREGUNTA
========================================================= */

selectQuestionBtn.addEventListener(
    "click",
    () => {

        gameScreen.classList.add(
            "hidden"
        );

        questionSelectScreen.classList.remove(
            "hidden"
        );

        renderQuestionList();

    }
);


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
   MODAL → SELECTOR
========================================================= */

modalSelectBtn.addEventListener(
    "click",
    () => {

        roundModal.classList.add(
            "hidden"
        );

        gameScreen.classList.add(
            "hidden"
        );

        questionSelectScreen.classList.remove(
            "hidden"
        );

        renderQuestionList();

    }
);


/* =========================================================
   VOLVER AL INICIO
========================================================= */

backToStartBtn.addEventListener(
    "click",
    () => {

        questionSelectScreen.classList.add(
            "hidden"
        );

        startScreen.classList.remove(
            "hidden"
        );

    }
);


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

    strikeElements.forEach(
        strike => {

            strike.classList.remove(
                "active"
            );

        }
    );

}


/* =========================================================
   SONIDOS
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


function playSound(type) {

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

}


/* =========================================================
   ATAJOS DE TECLADO
=========================================================

   ESPACIO = Revelar
   X       = Error
   R       = Reiniciar
   Q       = Cambiar pregunta
   1       = Equipo 1
   2       = Equipo 2

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
            event.key.toLowerCase() === "q"
        ) {

            selectQuestionBtn.click();

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
```
