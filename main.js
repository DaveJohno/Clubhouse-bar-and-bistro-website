console.log("hello world");

// Hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const navItems = document.querySelectorAll(".nav-links li a");

navItems.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// if hamburger is open and window resizes to desktop - close the hamburger
window.addEventListener("resize", (event) => {
  const windowWidth = event.target.innerWidth;
  if (windowWidth > 767 && nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});

// select card in mobile
const cardTabHeadings = document.querySelectorAll(".card-tab-heading");

cardTabHeadings.forEach((cardtabHeading) => {
  cardtabHeading.addEventListener("click", (event) => {
    const selectedHeading = event.target;
    const bistroCard = document.querySelector(".card-bistro");
    const barCard = document.querySelector(".card-bar");

    switch (selectedHeading.innerText.toLowerCase()) {
      case "bistro":
        selectedHeading.classList.add("active");
        cardTabHeadings[1].classList.remove("active");
        bistroCard.classList.add("active");
        barCard.classList.remove("active");
        console.log(`dfgdf`);
        break;
      case "spike bar":
        selectedHeading.classList.add("active");
        cardTabHeadings[0].classList.remove("active");
        barCard.classList.add("active");
        bistroCard.classList.remove("active");
        console.log(`cbfg`);
        break;
    }
  });
});
