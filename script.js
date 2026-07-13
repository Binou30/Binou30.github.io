document.addEventListener("DOMContentLoaded", () => {

    const boutonMesProjets = document.querySelector(".button-mes-projets");
    const boutonLangages = document.querySelector(".button-langages");
    const boutonAPropos = document.querySelector(".button-à-propos");
    const boutonLiens = document.querySelector(".button-liens");
    const logo = document.querySelector(".logo");

    function animationTap(element) {
        if (!element) return;

        element.addEventListener("click", () => {
            element.classList.remove("tap-active");

            void element.offsetWidth;

            element.classList.add("tap-active");

            setTimeout(() => {
                element.classList.remove("tap-active");
            }, 150);
        });
    }

    [
        boutonMesProjets,
        boutonLangages,
        boutonAPropos,
        boutonLiens,
        logo
    ].forEach(animationTap);

    const burger = document.querySelector(".menu-burger");
    const navigation = document.querySelector(".navigation-principale");

    if (!burger || !navigation) {
        return;
    }

    const mobileQuery = window.matchMedia("(max-width: 26.25rem)");

    const closeMenu = () => {
        document.body.classList.remove("menu-ouvert");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Ouvrir le menu");
    };

    burger.addEventListener("click", () => {
        const menuOuvert = document.body.classList.toggle("menu-ouvert");

        burger.setAttribute("aria-expanded", String(menuOuvert));
        burger.setAttribute(
            "aria-label",
            menuOuvert ? "Fermer le menu" : "Ouvrir le menu"
        );
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && document.body.classList.contains("menu-ouvert")) {
            closeMenu();
            burger.focus();
        }
    });

    document.addEventListener("click", (event) => {
        if (
            document.body.classList.contains("menu-ouvert") &&
            !burger.contains(event.target) &&
            !navigation.contains(event.target)
        ) {
            closeMenu();
        }
    });

    mobileQuery.addEventListener("change", (event) => {
        if (!event.matches) {
            closeMenu();
        }
    });
});