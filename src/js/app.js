import * as flsFunctions from "./modules/functions.js";
import { layout as layout1 } from "./layout1.js";
import { layout as layout2 } from "./layout2.js";
import { layout as layout3 } from "./layout3.js";

flsFunctions.isWebp();

const menu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

// === Media queries for changing auction categories layout ===
const categories = document.querySelector(".auction-categories");

const mqTabletWideMax = window.matchMedia("(max-width: 1024px)");
const mqTabletWideMin = window.matchMedia("(min-width: 1025px)");
const mqPhoneWideMin = window.matchMedia("(min-width: 481px)");
const mqPhoneWideMax = window.matchMedia("(max-width: 480px)");
const mqPhablet = window.matchMedia("(max-width: 560px)");

const handleWidthChange = (e) => {
    const breakPoint = +e.media.match(/\d+/)[0];
    // console.log(layout2);
    if (e.matches) {
        console.log(`width changed to ${breakPoint}`);
        if (breakPoint === 1024) {
            categories.innerHTML = "";
            categories.innerHTML = layout2;
        } else if (breakPoint === 1025) {
            categories.innerHTML = "";
            categories.innerHTML = layout3;
        } else if (breakPoint === 560) {
        } else if (breakPoint === 481) {
            categories.innerHTML = "";
            categories.innerHTML = layout2;
        } else if (breakPoint === 480) {
            categories.innerHTML = "";
            categories.innerHTML = layout1;
        }
    }
};

console.log(categories.firstChild.parentNode);
mqTabletWideMax.addEventListener("change", handleWidthChange);
mqTabletWideMin.addEventListener("change", handleWidthChange);
mqPhoneWideMin.addEventListener("change", handleWidthChange);
mqPhoneWideMax.addEventListener("change", handleWidthChange);
mqPhablet.addEventListener("change", handleWidthChange);

// ============================================================

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
