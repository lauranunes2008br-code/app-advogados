document.addEventListener("DOMContentLoaded", function () {

    // Animação suave para os links do menu
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const destino = document.querySelector(
                this.getAttribute("href")
            );

            if (destino) {
                event.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // Pequeno efeito ao rolar a página
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,0.08)";
        } else {
            header.style.boxShadow = "none";
        }

    });

});
