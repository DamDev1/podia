const toggle = document.querySelector(".navbar_toggle");
const navbar_items = document.querySelector(".navbar_items");

toggle.addEventListener("click", () => {
    navbar_items.classList.toggle("active")
})