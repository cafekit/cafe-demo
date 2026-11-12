// ============================================
// CLIENT SETTINGS - change only this block per client
// ============================================
const CONFIG = {
    whatsapp: "15551234567",              // country code + number, digits only
    phoneDisplay: "+1 555 123 4567",
    address: "123 Coffee Street, New York, NY 10001",
    reserveMessage: "Hi! I'd like to reserve a table at Brew Haven.",
    orderMessage: "Hi! I'd like to order ahead from Brew Haven."
};

// ============================================
// Fill in contact links from CONFIG
// ============================================
const waLink = (text) =>
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

document.querySelectorAll("[data-whatsapp]").forEach(el => {
    const message = el.dataset.whatsapp === "order"
        ? CONFIG.orderMessage
        : CONFIG.reserveMessage;
    el.href = waLink(message);
    el.target = "_blank";
    el.rel = "noopener";
});

const phoneLink = document.getElementById("phoneLink");
if (phoneLink) {
    phoneLink.href = `tel:+${CONFIG.whatsapp}`;
    phoneLink.textContent = CONFIG.phoneDisplay;
}

const mapLink = document.getElementById("mapLink");
if (mapLink) {
    mapLink.href =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(CONFIG.address);
    mapLink.target = "_blank";
    mapLink.rel = "noopener";
}

// ============================================
// Mobile navigation
// ============================================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu after clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Smooth scrolling is handled by CSS (scroll-behavior: smooth)
