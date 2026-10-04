/* =========================================
   ASPIRAL — MAIN SCRIPT
   ========================================= */


/* =========================
   PAGE SWITCHING
   ========================= */

const pages = document.querySelectorAll(".page");

let currentPage = document.querySelector(".page.active");
let isTransitioning = false;


function showPage(id) {

    const targetPage = document.querySelector(id);

    console.log("Opening page:", id, targetPage);

    if (!targetPage) {
        console.log("Page not found:", id);
        return;
    }

    if (targetPage === currentPage) {
        return;
    }

    if (isTransitioning) {
        return;
    }

    isTransitioning = true;


    if (currentPage) {
        currentPage.classList.remove("active");
    }

    targetPage.classList.add("active");

    currentPage = targetPage;


    document.querySelectorAll(".nav-dropdown").forEach(dropdown => {
        dropdown.classList.remove("mobile-open");
    });


    window.scrollTo({
        top: 0,
        behavior: "instant"
    });


    setTimeout(() => {
        isTransitioning = false;
    }, 700);

}


/* =========================
   NAVIGATION
   ========================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(event) {

        const target = this.getAttribute("href");

        if (!target || !target.startsWith("#")) {
            return;
        }


        const dropdown = this.closest(".nav-dropdown");
        const isMainDropdownLink = this.classList.contains("nav-main");


        /* MOBILE CHATS / GAMES */

        if (
            window.innerWidth <= 600 &&
            dropdown &&
            isMainDropdownLink
        ) {

            event.preventDefault();
            event.stopPropagation();

            dropdown.classList.toggle("mobile-open");

            return;
        }


        /* ALL OTHER LINKS */

        event.preventDefault();

        showPage(target);

    });

});


/* =========================
   CLOSE MOBILE DROPDOWN
   ========================= */

document.addEventListener("click", function(event) {

    if (window.innerWidth > 600) {
        return;
    }

    if (!event.target.closest(".nav-dropdown")) {

        document.querySelectorAll(".nav-dropdown").forEach(dropdown => {
            dropdown.classList.remove("mobile-open");
        });

    }

});


/* =========================
   INTERACTIVE HOME CARD
   ========================= */

const interactiveCard = document.getElementById("interactiveCard");

console.log("Interactive card:", interactiveCard);


if (interactiveCard) {

    interactiveCard.addEventListener("click", function(event) {

        event.stopPropagation();

        this.classList.toggle("show-text");

        console.log(
            "Card changed:",
            this.classList.contains("show-text")
        );

    });

}