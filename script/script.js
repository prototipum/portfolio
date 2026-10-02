window.addEventListener('DOMContentLoaded', () => {
    const techName = document.querySelector(".tech_name");
    const techSvg = document.querySelectorAll(".tech_svgs");
    function DisplayTechName() {
        this.techNames = ["JavaScript", "HTML", "CSS", "MySQL", "Node.js", "Express.js", "Figma"];
        this.changeTechName = function(index) {
            techName.textContent = this.techNames[index];
        };
        this.techSvgsLoop = function() {
            techSvg.forEach((svg, index) => {
                svg.addEventListener("mouseover", () => {
                    this.changeTechName(index);
                    techName.classList.toggle('current_tech');
                });
            });
        };
    };
    function scrollToContact() {
        const hrefTopContact = document.querySelector("a[href='#contact']");
        const contactSection = document.getElementById("contact");
        hrefTopContact.addEventListener("click", (event) => {
            event.preventDefault();
            contactSection.scrollIntoView({ behavior: "smooth" });
        });
    }
    scrollToContact();
    const displayTechName = new DisplayTechName();
    displayTechName.techSvgsLoop();
    const imageEvent = document.querySelector('.planomaterial');
    let i = 0;
    function changeImageEvent(imageEvent) {
        const images = ["images/profile/1994.jpg", "images/profile/planomaterial.jpg"];
        imageEvent.addEventListener("click", () => {
            if (++i >= images.length) {
                i = 0;
            }
            imageEvent.src = images[i];
        });
    }
    changeImageEvent(imageEvent);
    console.warn("Esse site não utiliza cookies ou tracking de dados do usuário.");
    rotateGradient();
});
function rotateGradient() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }
    const duration = 18000;
    const startTime = performance.now();
    function animateGradient(currentTime) {
        const footer = document.querySelector('.footer');
        const angle = ((currentTime - startTime) / duration * 360 + 90) % 360;
        footer.style.background = `linear-gradient(${angle}deg, #1C1C1C, #1F1F1F)`;
        window.requestAnimationFrame(animateGradient);
    }
    window.requestAnimationFrame(animateGradient);
}
const header = document.querySelector('.header');
function stickyHeader(header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
          header.classList.add("sticky_header");
        } else {
          header.classList.remove("sticky_header");
        }
    });
}
stickyHeader(header);