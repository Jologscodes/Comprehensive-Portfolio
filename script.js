        
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

    
    const footer = document.querySelector("footer p");
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `© ${year} Your Name`;
    }

});
