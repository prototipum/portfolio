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
        imageEvent.src = images[i];
        ++i;
        if (i >= images.length) {
            i = 0;
        };
    });
}
changeImageEvent(imageEvent);