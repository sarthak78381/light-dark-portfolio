const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const navBar = document.querySelector("nav");
const textBox = document.getElementById("text-box");
const modeChange = document.getElementById("modeChange");
const dayNight = document.getElementById("day-night");

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem('theme', 'dark')
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem('theme', 'light')
    lightMode();
  }
}

function darkMode() {
    imageChange('dark');
    navBar.setAttribute("id", "navStyle");
    textBox.classList.add("alt-text-box");
    modeChange.textContent = "Dark Mode";
    dayNight.classList.replace("fa-sun", "fa-moon");
}

function lightMode() {
    imageChange('light');
    navBar.removeAttribute("id");
    textBox.classList.remove("alt-text-box");
    modeChange.textContent = "Light Mode";
    dayNight.classList.replace("fa-moon", "fa-sun");
}

function imageChange(color) {
  image1.src = `img/undraw_conceptual_idea_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", `${currentTheme}`);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}


toggleSwitch.addEventListener("change", switchTheme);
