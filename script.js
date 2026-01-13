        // Smooth scrolling for internal links (if added later)
document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Auto-update year in footer
    const footer = document.querySelector("footer p");
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `© ${year} Your Name`;
    }

});
