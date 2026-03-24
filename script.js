window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.style.background = window.scrollY > 50 ? "#000" : "#111";
});
