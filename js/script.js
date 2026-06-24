console.log("Site loaded");
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  let textGreeting = "";

  if (hour >= 6 && hour < 12) {
    textGreeting = "¡Good Mornig!";
  } else if (hour >= 12 && hour < 20) {
    textGreeting = "¡Good Afternoon!";
  } else {
    textGreeting = "¡Good Night!";
  }
  greeting.textContent = textGreeting;
}

const themeToggle = document.getElementById("changeBtn");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
