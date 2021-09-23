const sad = document.querySelector(".sad");
const happy = document.querySelector(".happy");

// adding event listener

sad.addEventListener("click", () => {
  if (happy.classList.contains("happy")) {
    happy.classList.add("active");
    sad.classList.remove("active");
  }
});

happy.addEventListener("click", () => {
  if (sad.classList.contains("sad")) {
    sad.classList.add("active");
    happy.classList.remove("active");
  }
});
