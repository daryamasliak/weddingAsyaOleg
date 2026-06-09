const letterContainer = document.getElementById("letter");
const message = `«Моя дорогая, любимая Ася!

Сегодня особенный, великий день, когда ваша с Олегом история, пройдя проверку временем длиной почти в целое десятилетие, обретает свою самую красивую и законную форму. Почти десять лет назад в Витебске зародился этот чистый исток, который со временем превратился в глубокую, мощную реку. Ваша жизнь меняла русла от уютных улиц Минска до залитых солнцем, бескрайних берегов Таиланда, но неизменным оставалось одно... Вы плывете по этому течению вместе, крепко держась за руки.

Ты всегда хотела ассоциироваться с водой, Ася. И сегодня, глядя на вас, я понимаю, насколько точен этот образ. Вода — это жизнь, это гибкость, глубина и невероятная сила. В тебе сочетается всё: удивительная, осознанная мудрость дипломированного психолога, тонко чувствующего этот мир, и смелая, яркая, бьющая ключом индивидуальность. Твоя красота, твоя пронзительная искренность, та невероятная энергия и спокойствие, которыми ты делишься в своем ТикТоке — всё это грани одной потрясающей стихии. Стихии, которую так преданно и нежно полюбил Олег.

Вы — невероятные молодцы. Меня восхищает ваша легкость на подъем, ваша спортивная, активная жизнь и то, как на каждом общем фото вы целуетесь так, будто вокруг замер весь мир. Олег стал для тебя той самой надежной гаванью, а ты для него — бесконечным океаном вдохновения.

Мне бесконечно жаль, что сегодня я не могу физически быть рядом и обнять вас в этот момент. Но, как и вода способна преодолевать любые расстояния, просачиваться сквозь любые преграды, надеюсь, что наша дружба сможет также. Мое сердце, моя любовь и моя поддержка сегодня с вами, в каждой секунде этого праздника. Никакие километры не способны уменьшить ту гордость и то тепло, которые я испытываю, глядя на вашу пару.

Вода — это еще и начало новой жизни. Я от всего сердца желаю, чтобы ваша семейная река однажды превратилась в бескрайнее, шумное море, где будут звенеть три детских голоса, как ты и мечтала. Пусть мечта о троих детях обязательно сбудется, и они возьмут от вас всё самое лучшее: твою глубину и чуткость, Ася, надежность и силу Олега, и вашу общую, бесконечную любовь.

Будьте счастливы, плывите по жизни на волнах радости и берегите свой прекрасный мир!»

<span class="signature">С любовью, Даша</span>`;

let index = 0;
function typeLetter() {
  if (index < message.length) {
    letterContainer.innerHTML = message.substring(0, index + 1);
    index++;
    setTimeout(typeLetter, 45);
  }
}
window.addEventListener("load", typeLetter);

const quizQuestions = [
  {
    question:
      "Помнишь, как легко и стремительно закрутилось течение нашей дружбы? Одна из первых по-настоящему близких прогулок, тёплый вечер, вкус необычных напитков и наш весёлый, громкий смех у тренировочной груши... Вспомни, где это было?",
    answer: "Лидский двор 🥂",
    image: "lidskij.jpg",
  },
  {
    question:
      "Дорога, уходящая вглубь леса, пыльный асфальт трассы под ногами и твоё невероятно смелое, бьющее через край желание покорить небо и шагнуть в бездну с парашютом. Мы единственные девчонки на последней парте слушаем бесконечную лекцию, а потом отважная ты зависаешь на тренировочных тросах... Вспомни, где это было?",
    answer: "Минский аэродром 🛩️",
    image: "aerodrom.jpg",
  },
  {
    question:
      "Станция метро, которая всегда дарила мне ощущение бесконечного уюта и душевного тепла. Именно здесь мы запечатлели ту самую, легендарную фотосессию LOVE... Вспомни, где это было?",
    answer: "Станция метро Якуба Коласа 🚇",
    image: "love.jpg",
  },
  {
    question:
      "День, когда мы решили сбежать от скучной взрослой реальности. Твоя шикарная идея и вот мы уже искренне дурачимся, смеёмся и с детским восторгом заново открываем для себя законы вселенной. Мы даже сидели в одном ряду с удивлёнными малышами, заворожённо глядя на научные эксперименты... Вспомни, где это было?",
    answer: "Музей интерактива 🧪",
    image: "muzeum.jpg",
  },
  {
    question:
      "Это место — немой свидетель нашей личной эволюции. Оно видело больше всего наших искренних слёз, делило с нами радость объятий при встрече и тихую грусть расставаний, ведь каждая из нас искала своё лучшее, счастливое будущее... Вспомни, где это было?",
    answer: "Вокзал 🚉",
    image: "voksal.jpg",
  },
];




let currentStep = 0;
let isShowingAnswer = false;

const progressEl = document.getElementById("progress");
const questionTextEl = document.getElementById("question-text");
const actionBtnEl = document.getElementById("action-btn");
const answerContainerEl = document.getElementById("answer-container");
const answerTitleEl = document.getElementById("answer-title");
const answerImgEl = document.getElementById("answer-img");

function loadQuestion() {
  progressEl.innerText = `Вопрос ${currentStep + 1} из ${quizQuestions.length}`;
  questionTextEl.innerText = `«${quizQuestions[currentStep].question}»`;
  answerTitleEl.innerText = `Ответ: ${quizQuestions[currentStep].answer}`;
  answerImgEl.src = quizQuestions[currentStep].image;

  answerContainerEl.classList.remove("show");
  setTimeout(() => {
    if (!answerContainerEl.classList.contains("show")) {
      answerContainerEl.style.display = "none";
    }
  }, 100);

  actionBtnEl.innerText = "Узнать ответ ✨";
  isShowingAnswer = false;
}

function handleAction() {
  if (!isShowingAnswer) {
    answerContainerEl.style.display = "block";
    setTimeout(() => {
      answerContainerEl.classList.add("show");
    }, 10);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#b54d5f", "#f7e1d7", "#ffffff"],
    });

    if (currentStep === quizQuestions.length - 1) {
      actionBtnEl.innerText = "Посмотреть сюрпризы от друзей! ❤️";
    } else {
      actionBtnEl.innerText = "Следующий вопрос ➡️";
    }
    isShowingAnswer = true;
  } else {
    currentStep++;
    if (currentStep < quizQuestions.length) {
      loadQuestion();
    } else {
      showFinalScreen();
    }
  }
}

function showFinalScreen() {
  document.getElementById("quiz-card").innerHTML = `
    <div class="final-title">Ты помнишь абсолютно всё! 🤍</div>
    <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">Каждая деталь нашей дружбы сохранена в сердце. Листай ниже, там тебя ждут поздравления!</p>
    <p style="font-size: 32px;">🥂💍✨</p>
  `;
}
loadQuestion();



let currentAlbum = [];
let currentPhotoIndex = 0;

const modal = document.getElementById("photo-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

document.querySelectorAll(".friend-card").forEach((card) => {
  card.addEventListener("click", () => {
    const photosString = card.getAttribute("data-photos");
    currentAlbum = photosString.split(",");
    currentPhotoIndex = 0;

    modal.style.display = "flex";
    modalImg.src = currentAlbum[currentPhotoIndex];
  });
});

function changePhoto(direction) {
  currentPhotoIndex += direction;
  if (currentPhotoIndex < 0) currentPhotoIndex = currentAlbum.length - 1;
  if (currentPhotoIndex >= currentAlbum.length) currentPhotoIndex = 0;
  modalImg.src = currentAlbum[currentPhotoIndex];
}

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  changePhoto(-1);
});
nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  changePhoto(1);
});
closeBtn.addEventListener("click", () => (modal.style.display = "none"));

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


const weddingDate = new Date(2026, 5, 16, 12, 0, 0);

function updateTimer() {
  const now = new Date();
  const diff = now - weddingDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText =
    seconds < 10 ? "0" + seconds : seconds;
}

setInterval(updateTimer, 1000);
updateTimer();
