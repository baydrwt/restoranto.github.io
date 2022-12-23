const scriptURL = "https://script.google.com/macros/s/AKfycbyx1KXtp4Dt6U9qWKEEEmUxDUetDoGBKzALWFdem4d7jx1TLA-SdRSsg07bhGAJ3NOa/exec";
const form = document.forms["form-reservations"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const infoAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnLoading.classList.toggle("d-none");
  btnSubmit.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnSubmit.classList.toggle("d-none");
      infoAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

AOS.init({
  once: true,
});

gsap.registerPlugin(TextPlugin);
gsap.to(".quotes", { duration: 3, delay: 1.4, text: "Special Recipe, Special Taste." });
gsap.from(".kutip", { duration: 2.5, delay: 3.4, ease: "back.out(1.7)", x: -500 });
//gsap.from(".navbar", { duration: 2.5, ease: "elastic.out(1, 0.3)", y: "-100%" });
