import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const menu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

menu.addEventListener("click", () => {
    menu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
});

const profileIcon = document.querySelector(".profile");
const profileMenu = document.querySelector(".profile-menu");
profileIcon.addEventListener("click", (e) => {
    profileMenu.classList.toggle("_active");
});

document.addEventListener("click", (e) => {
    if (
        !e.target.closest(".profile") &&
        profileMenu.classList.contains("_active")
    )
        profileMenu.classList.remove("_active");
});
