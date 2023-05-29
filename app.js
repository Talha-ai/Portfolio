function showTheme() {
  // Check Local Storage then apply dark theme if it's active
}

function showContent() {
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
}

window.addEventListener('DOMContentLoaded', function () {
  showTheme();
  showContent();
});


const btn = document.querySelector(".icon-btn");
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if(userTheme === "dark" || (!userTheme && systemTheme)){
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};

const themeSwitch = () => {
  if(document.documentElement.classList.contains("dark")){
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

btn.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();
