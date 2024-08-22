const translations = {
    en: {
        home: "Home",
        about_us: "About Us",
        services: "Services",
        portfolio: "Portfolio",
        pricing: "Pricing",
        contact: "Contact",
        blog: "Blog",
        book_now: "Book Now",
        address: "Address: Street Name 123, 1234 AB City",
        phone: "Phone: 012-3456789",
        email: "Email",
        newsletter_prompt: "Sign up for our newsletter:",
        email_placeholder: "Your email address",
        subscribe: "Subscribe",
        privacy_policy: "Privacy Policy",
        terms_conditions: "Terms & Conditions",
        specialties_heading: "Our Specialties",
        testimonials_heading: "What Our Clients Say",
        contact_info: "Contact Information"
    },
    nl: {
        home: "Home",
        about_us: "Over Ons",
        services: "Diensten",
        portfolio: "Portfolio",
        pricing: "Tarieven",
        contact: "Contact",
        blog: "Blog",
        book_now: "Boek Nu",
        address: "Adres: Straatnaam 123, 1234 AB Stad",
        phone: "Telefoon: 012-3456789",
        email: "Email",
        newsletter_prompt: "Meld je aan voor onze nieuwsbrief:",
        email_placeholder: "Jouw emailadres",
        subscribe: "Meld je aan",
        privacy_policy: "Privacybeleid",
        terms_conditions: "Algemene Voorwaarden",
        specialties_heading: "Onze Specialisaties",
        testimonials_heading: "Wat Onze Klanten Zeggen",
        contact_info: "Contactgegevens"
    },
    // Add more languages as needed
};

const userLang = navigator.language.slice(0, 2) || 'nl';
const langSwitcher = document.getElementById("language-switcher");

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
        const translationKey = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][translationKey]) {
            el.textContent = translations[lang][translationKey];
        }
    });
    langSwitcher.value = lang;
}

langSwitcher.addEventListener("change", (e) => {
    setLanguage(e.target.value);
});

setLanguage(userLang);
