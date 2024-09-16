document.addEventListener("DOMContentLoaded", function() {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in-viewport');
            }
        });
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
});
