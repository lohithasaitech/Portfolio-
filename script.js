document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Typing effect
    const text = "Lohitha Sai";
    let i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 150);
        }
    }
    type();

    // Scroll reveal animation
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        sections.forEach(sec => {
            if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
                sec.classList.add("show");
            }
        });
    });

});
