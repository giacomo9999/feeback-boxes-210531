console.log("JS here...");

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  console.log("panel: ", e.target, e.target.parentNode);
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
    console.log(selectedRating);
  }
});

sendBtn.addEventListener("click", (e) => {
  console.log("sendBtn: ", e.target, e.target.parentNode);
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We will use your feedback to improved our customer support</p>`;
});

const removeActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
};
