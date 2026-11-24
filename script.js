
// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !subject || !message) {
            formMessage.style.color = "red";
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        formMessage.style.color = "green";
        formMessage.textContent =
            "Thank you, " + name + "! Your form has been validated.";

        contactForm.reset();
    });
}
