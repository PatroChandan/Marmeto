const h3 = document.getElementById("h3");
const h2 = document.getElementById("h2");
const btn = document.querySelector(".btn");
const navh2 = document.getElementById("navh2");
const img2 = document.getElementById("2");
const img3 = document.getElementById("3");
btn.addEventListener("click", function () {
  navh2.innerHTML = "Complete";
  h3.innerHTML = "Thank you! 🎉";
  h2.innerHTML = "Your order has been received";
  btn.innerHTML = "Purchase history";
  img2.src = "./asssets/process4.png";
  img3.src = "./asssets/process3.png";
});
