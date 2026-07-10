document.addEventListener("DOMContentLoaded", () => {
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
