/* ==========================================
   100 ESTUDIANTES DIJERON
   ========================================== */


/* ==========================================
   PREGUNTAS
   ========================================== */

const questions = [

  {
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


/* ==========================================
   VARIABLES DEL JUEGO
========================================== */

let currentQuestion = null;
let currentQuestionIndex = null;

let scoreA = 0;
let scoreB = 0;

let currentTeam = "A";

let roundPoints = 0;
let strikes = 0;

let roundFinished = false;
let stealUsed = false;

let selectedCategory = "Todas";

const usedQuestions = new Set();


/* ==========================================
   ELEMENTOS HTML
========================================== */

const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const gameScreen = document.getElementById("gameScreen");

const startBtn = document.getElementById("startBtn");
const backToStartBtn = document.getElementById("backToStartBtn");

const questionList = document.getElementById("questionList");
const searchInput = document.getElementById("searchInput");

const categoryButtons = document.querySelectorAll(".category-btn");

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");

const scoreAElement = document.getElementById("scoreA");
const scoreBElement = document.getElementById("scoreB");
const roundPointsElement = document.getElementById("roundPoints");

const strikeElements = [
  document.getElementById("strike1"),
  document.getElementById("strike2"),
  document.getElementById("strike3")
];

const stealModal = document.getElementById("stealModal");
const stealPointsElement = document.getElementById("stealPoints");

const stealCorrectBtn = document.getElementById("stealCorrectBtn");
const stealFailBtn = document.getElementById("stealFailBtn");

const roundModal = document.getElementById("roundModal");
const roundWinner = document.getElementById("roundWinner");
const winnerPoints = document.getElementById("winnerPoints");

const nextQuestionBtn = document.getElementById("nextQuestionBtn");


/* ==========================================
   CAMBIAR PANTALLA
========================================== */

function showScreen(screen) {

  document.querySelectorAll(".screen").forEach(element => {
    element.classList.remove("active");
  });

  screen.classList.add("active");
}


/* ==========================================
   INICIO
========================================== */

startBtn.addEventListener("click", () => {

  showScreen(questionScreen);

  renderQuestionList();

});


/* ==========================================
   REGRESAR AL INICIO
========================================== */

backToStartBtn.addEventListener("click", () => {

  showScreen(startScreen);

});


/* ==========================================
   CATEGORÍAS
========================================== */

categoryButtons.forEach(button => {

  button.addEventListener("click", () => {

    categoryButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedCategory = button.dataset.category;

    renderQuestionList();

  });

});


/* ==========================================
   BUSCADOR
========================================== */

searchInput.addEventListener("input", () => {

  renderQuestionList();

});


/* ==========================================
   MOSTRAR PREGUNTAS
========================================== */

function renderQuestionList() {

  const searchText = searchInput.value.toLowerCase().trim();

  questionList.innerHTML = "";

  questions.forEach((question, index) => {

    const matchesCategory =
      selectedCategory === "Todas" ||
      question.category === selectedCategory;

    const matchesSearch =
      question.question.toLowerCase().includes(searchText);

    if (!matchesCategory || !matchesSearch) {
      return;
    }

    const card = document.createElement("div");

    card.className = "question-card";

    if (usedQuestions.has(index)) {
      card.classList.add("used");
    }

    const number = document.createElement("span");

    number.className = "question-number";

    number.textContent = `#${index + 1}`;

    const category = document.createElement("span");

    category.className = "question-category";

    category.textContent = question.category;

    const text = document.createElement("div");

    text.className = "question-text";

    text.textContent = question.question;

    const button = document.createElement("button");

    button.textContent =
      usedQuestions.has(index)
        ? "USADA — JUGAR DE NUEVO"
        : "JUGAR ESTA PREGUNTA";

    button.addEventListener("click", () => {

      selectQuestion(index);

    });

    card.appendChild(number);
    card.appendChild(category);
    card.appendChild(text);
    card.appendChild(button);

    questionList.appendChild(card);

  });

}


/* ==========================================
   SELECCIONAR PREGUNTA
========================================== */

function selectQuestion(index) {

  currentQuestionIndex = index;

  currentQuestion = questions[index];

  usedQuestions.add(index);

  resetRound();

  loadQuestion();

  showScreen(gameScreen);

}


/* ==========================================
   CARGAR PREGUNTA
========================================== */

function loadQuestion() {

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {

    const card = document.createElement("div");

    card.className = "answer-card";

    card.dataset.index = index;

    const number = document.createElement("div");

    number.className = "answer-number";

    number.textContent = index + 1;

    const text = document.createElement("div");

    text.className = "answer-text";

    text.textContent = answer.text;

    const points = document.createElement("div");

    points.className = "answer-points";

    points.textContent = answer.points;

    card.appendChild(number);
    card.appendChild(text);
    card.appendChild(points);

    card.addEventListener("click", () => {

      revealAnswer(index);

    });

    answersContainer.appendChild(card);

  });

  updateScoreboard();

}


/* ==========================================
   REVELAR RESPUESTA
========================================== */

function revealAnswer(index) {

  if (roundFinished) {
    return;
  }

  const cards = document.querySelectorAll(".answer-card");

  const card = cards[index];

  if (!card) {
    return;
  }

  if (card.classList.contains("revealed")) {
    return;
  }

  card.classList.add("revealed");

  const points = currentQuestion.answers[index].points;

  roundPoints += points;

  updateScoreboard();

  const allRevealed =
    [...cards].every(cardElement =>
      cardElement.classList.contains("revealed")
    );

  if (allRevealed) {

    setTimeout(() => {

      finishRound(currentTeam);

    }, 500);

  }

}


/* ==========================================
   SIGUIENTE RESPUESTA
========================================== */

function revealNextAnswer() {

  if (roundFinished) {
    return;
  }

  const cards = document.querySelectorAll(".answer-card");

  for (let i = 0; i < cards.length; i++) {

    if (!cards[i].classList.contains("revealed")) {

      revealAnswer(i);

      return;

    }

  }

}


/* ==========================================
   STRIKE
========================================== */

function addStrike() {

  if (roundFinished) {
    return;
  }

  if (strikes >= 3) {
    return;
  }

  strikes++;

  strikeElements[strikes - 1].classList.add("active");

  if (strikes === 3) {

    setTimeout(() => {

      openStealModal();

    }, 500);

  }

}


/* ==========================================
   MODAL DE ROBO
========================================== */

function openStealModal() {

  if (stealUsed || roundFinished) {
    return;
  }

  stealUsed = true;

  stealPointsElement.textContent = roundPoints;

  stealModal.classList.remove("hidden");

}


/* ==========================================
   ROBO CORRECTO
========================================== */

stealCorrectBtn.addEventListener("click", () => {

  stealModal.classList.add("hidden");

  const stealingTeam =
    currentTeam === "A" ? "B" : "A";

  finishRound(stealingTeam);

});


/* ==========================================
   ROBO FALLIDO
========================================== */

stealFailBtn.addEventListener("click", () => {

  stealModal.classList.add("hidden");

  finishRound(currentTeam);

});


/* ==========================================
   TERMINAR RONDA
========================================== */

function finishRound(winningTeam) {

  if (roundFinished) {
    return;
  }

  roundFinished = true;

  if (winningTeam === "A") {

    scoreA += roundPoints;

    roundWinner.textContent = "¡GANAN LOS ESTUDIANTES!";

  } else {

    scoreB += roundPoints;

    roundWinner.textContent = "¡GANAN LOS MAESTROS!";

  }

  winnerPoints.textContent = roundPoints;

  updateScoreboard();

  roundModal.classList.remove("hidden");

}


/* ==========================================
   REINICIAR RONDA
========================================== */

function resetRound() {

  roundPoints = 0;

  strikes = 0;

  roundFinished = false;

  stealUsed = false;

  stealModal.classList.add("hidden");

  roundModal.classList.add("hidden");

  strikeElements.forEach(strike => {

    strike.classList.remove("active");

  });

  updateScoreboard();

}


/* ==========================================
   SIGUIENTE PREGUNTA
========================================== */

nextQuestionBtn.addEventListener("click", () => {

  roundModal.classList.add("hidden");

  showScreen(questionScreen);

  renderQuestionList();

});


/* ==========================================
   ACTUALIZAR MARCADOR
========================================== */

function updateScoreboard() {

  scoreAElement.textContent = scoreA;

  scoreBElement.textContent = scoreB;

  roundPointsElement.textContent =
    `${roundPoints} PUNTOS`;

}


/* ==========================================
   TECLADO
========================================== */

document.addEventListener("keydown", event => {

  if (!gameScreen.classList.contains("active")) {
    return;
  }


  /* 1–5 = REVELAR RESPUESTAS */

  if (["1", "2", "3", "4", "5"].includes(event.key)) {

    const index = Number(event.key) - 1;

    revealAnswer(index);

    return;

  }


  /* ESPACIO = SIGUIENTE RESPUESTA */

  if (event.code === "Space") {

    event.preventDefault();

    revealNextAnswer();

    return;

  }


  /* X = STRIKE */

  if (event.key.toLowerCase() === "x") {

    addStrike();

    return;

  }


  /* R = REINICIAR RONDA */

  if (event.key.toLowerCase() === "r") {

    resetRound();

    return;

  }


  /* Q = CAMBIAR PREGUNTA */

  if (event.key.toLowerCase() === "q") {

    showScreen(questionScreen);

    renderQuestionList();

    return;

  }

});


/* ==========================================
   INICIAR
========================================== */

updateScoreboard();
