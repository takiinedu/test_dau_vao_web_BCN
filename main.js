let id = "nav__link1";
function clickEvent(element, event) {
    event.preventDefault();
    document.getElementById(id).classList.remove("active");
    id = element.id;
    document.getElementById(id).classList.add("active");
    const index = id[id.length - 1];
    const rect = element.getBoundingClientRect();
    const top = rect.top + 12;
    document.querySelector(".bg-active").style.top = top + "px";
}