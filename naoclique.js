const btn = document.querySelector("button");
const btnBg = btn.querySelector(".button-bg");
const btnSpan = btn.querySelector("span");
let btnChanging = false;

const t = [
  "Tem certeza que quer continuar?",
  "Ok, Vamos brincar então?",
  "A brincadeira é: Clique nesse 1 mês...",
  "Clique se nesse 1 mês, você sorriu comigo",
  "Clique se nesse 1 mês, você chorou comigo ou por mim",
  "Clique se nesse 1 mês, você se irritou comigo",
  "Calma...estamos quase lá, clique de novo hehe",
  "Opa...deu erro, clica de novo pra testar uma coisa",
  "gozou comigo? da uma risadinha e um clique também",
  "Pensou que tinha acabado? clica de novo..",
  "Quase lá e advinha o que você deve fazer agora?",
  "clicou né? voltando pra brincadeira rs",
  "Clique se nesse 1 mês, você sentiu ciumes",
  "Clique se nesse 1 mês, você me amou um pouco mais",
  "Clique se nesse 1 mês, você se apaixonou mais",
  "Clique se nesse 1 mês, você ouviu H&J e lembrou de mim",
  "Clique se você aceita namorar comigo",
  "UFA! Estamos namorando então? Clica ai",
  "Por fim, clica ai se você me ama",
  "Eita como clica rs",
  "Agora você é minha namorada oficalmente hehe",
];

btn.onclick = () => {
  if (btnChanging) return;
  btnChanging = true;
  if (!t.length) {
    btnSpan.innerText = "";
    document.querySelectorAll(".button-glitch").forEach((el, i) => {
      el.style.transition = `0.32s ${i * 0.11 + 0.25}s`;
      el.style.opacity = `0`;
      el.style.filter = "blur(3px)";
      el.style.pointerEvents = "none";
    });
    btn.classList.remove("trembling");
    btn.classList.add("end");
    btnBg.style.width = null;
    setTimeout(() => {
      btnBg.style.transform = "scale(0)";
      btn.style.pointerEvents = "none";
    }, 240);
    document.querySelector(".itsOver").classList.add("show");
    return;
  }
  btn.classList.add("changing", "trembling");
  setTimeout(() => {
    btn.classList.remove("changing");
    btnSpan.innerText = t[0];
    t.shift();
    const width = btn.getClientRects()[0].width;
    btnBg.style.width = width + "px";
    const glitch = document.createElement("div");
    glitch.classList.add("button-glitch");
    glitch.style.opacity = "0";
    glitch.style.width = width + 10 + "px";
    btn.insertBefore(glitch, btnBg);
    setTimeout(() => {
      glitch.style.opacity = "1";
    }, 50);
    if (t.length === 3) {
      btnSpan.style.filter = "blur(0.5px)";
    } else if (t.length === 1) {
      btnSpan.style.filter = "blur(1px)";
    } else if (!t.length) {
      document.body.style.background = "black";
      btnSpan.style.filter = "blur(1.5px)";
    }
  }, 300);
  setTimeout(() => {
    btnChanging = false;
  }, 820);
};

window.onload = () => {
  btnBg.style.width = btn.getClientRects()[0].width + "px";
  document.querySelector(".container").classList.add("show");
};
