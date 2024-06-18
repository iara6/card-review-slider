// local reviews data
const cards = [
  {
    id: 1,
    name: 'susan smith',
    job: 'marketing specialist',
    img: './pic1.jpg',
    text: 'De illis, cum volemus. Tamen a proposito, inquam, aberramus. Hoc loco tenere se Triarius non potuit. At multis malis affectus. Cave putes quicquam esse verius. Restatis igitur vos. Sequitur disserendi ratio cognitioque naturae.',
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'project manager',
    img: './pic2.jpg',
    text: 'Paria sunt igitur. Quacumque enim ingredimur, in aliqua historia vestigium ponimus. Restinguet citius, si ardentem acceperit. Bork Sedulo, inquam, faciam. Ne discipulum abducam, times.',
  },
  {
    id: 3,
    name: 'mary hayes',
    job: 'accountant',
    img: './pic3.jpg',
    text: 'Haec igitur Epicuri non probo, inquam. Praeclarae mortes sunt imperatoriae; Quae cum essent dicta, discessimus. Nemo igitur esse beatus potest. Expectoque quid ad id, quod quaerebam, respondeas.',
  },
  {
    id: 4,
    name: 'steve anderson',
    job: 'business analyst',
    img: './pic4.jpg',
    text: 'Summum ením bonum exposuit vacuitatem doloris; Utilitatis causa amicitia est quaesita. Ille enim occurrentia nescio quae comminiscebatur; Sed tempus est, si videtur, et recta quidem ad me. Itaque fecimus.',
  },
  {
    id: 5,
    name: 'olivia lynn',
    job: 'chief executive officer',
    img: './pic5.jpg',
    text: 'Rato poremoh yafodir acecer bevec peloten lap imeri. Yasegan be nar dasorel ha: Lacid be mivimop cu emig fi obiela. Ha tol cop cah semuti abi datoma. Tiecuc dareron nunocip. Pifelup rofim ti fet taparo rira sal ugetu ime xi.',
  },
];

const img = document.getElementById("person-img");
const worker = document.getElementById("worker");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

function showPerson() {
  const card = cards[currentItem];
  img.src = card.img;
  worker.textContent = card.name;
  job.textContent = card.job;
  info.textContent = card.text;
}

nextBtn.addEventListener('click', () => {
  currentItem++;
  if (currentItem > cards.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener('click', () => {
  currentItem--;
  if(currentItem < 0) {
    currentItem = cards.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener('click', () => {
  currentItem = Math.floor(Math.random() * cards.length);
  showPerson();
});