<<<<<<< HEAD
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
=======
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
>>>>>>> c6bf09b (Commited)
