/* =========================================================
   STEVE'S BOUTIQUE
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initLoader();

        initHeader();

        initMobileMenu();

        initSmoothNavigation();

        initHeroSlider();

        renderTrending();

        renderNewArrivals();

        renderCategories();

        initCatalogue();

        initBackToTop();

        initRevealAnimations();

        initLightbox();

        initImageFallbacks();

        initCurrentYear();

    }
);


/* =========================================================
   LOADER
========================================================= */

function initLoader() {

    const loader =
        document.getElementById("pageLoader");

    if (!loader) return;

    const hideLoader = () => {

        setTimeout(() => {

            loader.classList.add("loaded");

        }, 450);

    };


    if (document.readyState === "complete") {

        hideLoader();

    } else {

        window.addEventListener(
            "load",
            hideLoader,
            {
                once: true
            }
        );

    }

}


/* =========================================================
   HEADER
========================================================= */

function initHeader() {

    const header =
        document.getElementById("siteHeader");

    if (!header) return;


    const updateHeader = () => {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    };


    updateHeader();

    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const button =
        document.getElementById("mobileMenu");

    const nav =
        document.getElementById("mainNav");

    if (!button || !nav) return;


    button.addEventListener(
        "click",
        () => {

            const open =
                nav.classList.toggle("open");

            button.classList.toggle(
                "open",
                open
            );

            button.setAttribute(
                "aria-expanded",
                String(open)
            );

        }
    );


    nav.querySelectorAll("a").forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove("open");

                    button.classList.remove("open");

                    button.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );

}


/* =========================================================
   SMOOTH NAVIGATION
========================================================= */

function initSmoothNavigation() {

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }
    );

}


/* =========================================================
   HERO IMAGE SLIDER
========================================================= */

function initHeroSlider() {

    const slides =
        document.querySelectorAll(
            ".hero-slide"
        );

    const controls =
        document.querySelectorAll(
            ".hero-control"
        );


    if (!slides.length) return;


    let currentSlide = 0;

    let slideTimer;


    function showSlide(index) {

        currentSlide =
            (index + slides.length) %
            slides.length;


        slides.forEach(
            (slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === currentSlide
                );

            }
        );


        controls.forEach(
            (control, i) => {

                control.classList.toggle(
                    "active",
                    i === currentSlide
                );

            }
        );


        startAutoSlide();

    }


    function nextSlide() {

        showSlide(
            currentSlide + 1
        );

    }


    function startAutoSlide() {

        clearTimeout(slideTimer);


        slideTimer =
            setTimeout(
                () => {

                    nextSlide();

                },
                5500
            );

    }


    controls.forEach(
        (control, index) => {

            control.addEventListener(
                "click",
                () => {

                    showSlide(index);

                }
            );

        }
    );


    /* Start with first image */

    showSlide(0);

}


/* =========================================================
   TRENDING PRODUCTS
========================================================= */

function renderTrending() {

    const track =
        document.getElementById(
            "trendingTrack"
        );


    if (!track) return;


    const products =
        getTrendingProducts();


    if (!products.length) return;


    const createCard =
        product => {

            const category =
                getCategory(
                    product.category
                );


            const card =
                document.createElement("a");


            card.className =
                "trending-card";


            card.href =
                getProductWhatsAppUrl(
                    product
                );


            card.target = "_blank";


            card.rel =
                "noopener noreferrer";


            card.innerHTML = `

                <img
                    src="${escapeAttribute(
                        getProductImage(product)
                    )}"
                    alt="${escapeAttribute(
                        product.name
                    )}"
                    loading="lazy"
                >

                <div class="trending-card-overlay">

                    <div class="trending-card-info">

                        <div class="trending-card-category">

                            ${escapeHTML(
                                category?.name ||
                                "Collection"
                            )}

                        </div>

                        <div class="trending-card-title">

                            ${escapeHTML(
                                product.name
                            )}

                        </div>

                    </div>

                </div>

            `;


            return card;

        };


    /*
       Duplicate products to create
       a continuous marquee.
    */

    const firstSet =
        products.map(
            createCard
        );


    const secondSet =
        products.map(
            createCard
        );


    firstSet.forEach(
        card =>
            track.appendChild(card)
    );


    secondSet.forEach(
        card =>
            track.appendChild(card)
    );


    track
        .querySelectorAll("img")
        .forEach(
            image => {

                image.addEventListener(
                    "error",
                    () => {

                        image.src =
                            "images/placeholder.webp";

                    },
                    {
                        once: true
                    }
                );

            }
        );

}


/* =========================================================
   NEW ARRIVALS
========================================================= */

function renderNewArrivals() {

    const grid =
        document.getElementById(
            "newArrivalsGrid"
        );


    if (!grid) return;


    const products =
        getFeaturedProducts()
            .slice(0, 8);


    if (!products.length) {

        grid.innerHTML =
            "<p>No products available yet.</p>";

        return;

    }


    products.forEach(
        product => {

            const category =
                getCategory(
                    product.category
                );


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card reveal";


            card.innerHTML = `

                <div class="product-image">

                    <img
                        src="${escapeAttribute(
                            getProductImage(product)
                        )}"
                        alt="${escapeAttribute(
                            product.name
                        )}"
                        loading="lazy"
                    >

                    <span class="product-badge">
                        New
                    </span>

                </div>


                <div class="product-info">

                    <div class="product-category">

                        ${escapeHTML(
                            category?.name ||
                            "Collection"
                        )}

                    </div>


                    <h3 class="product-name">

                        ${escapeHTML(
                            product.name
                        )}

                    </h3>


                    <div class="product-actions">

                        <a
                            class="product-whatsapp"
                            href="${escapeAttribute(
                                getProductWhatsAppUrl(
                                    product
                                )
                            )}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                            <i class="fa-brands fa-whatsapp"></i>

                            Ask on WhatsApp

                        </a>

                    </div>

                </div>

            `;


            grid.appendChild(card);

        }
    );


    observeRevealElements();

}


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

    const grid =
        document.getElementById(
            "categoriesGrid"
        );


    if (!grid) return;


    CATEGORIES.forEach(
        (category, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "category-card";


            card.dataset.category =
                category.id;


            const count =
                getCategoryProductCount(
                    category.id
                );


            card.innerHTML = `

                <div class="category-card-image">

                    <img
                        src="${escapeAttribute(
                            category.image
                        )}"
                        alt="${escapeAttribute(
                            category.name
                        )}"
                        loading="lazy"
                    >

                </div>


                <div class="category-card-content">

                    <div class="category-number">

                        ${String(
                            index + 1
                        ).padStart(2, "0")}

                    </div>


                    <h3 class="category-name">

                        ${escapeHTML(
                            category.name
                        )}

                    </h3>


                    <div class="category-count">

                        ${count} pieces · View collection

                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openCatalogue(
                        category.id
                    );

                }
            );


            grid.appendChild(card);

        }
    );


    grid
        .querySelectorAll("img")
        .forEach(
            image => {

                image.addEventListener(
                    "error",
                    () => {

                        image.src =
                            "images/placeholder.jpg";

                    },
                    {
                        once: true
                    }
                );

            }
        );

}


/* =========================================================
   CATALOGUE
========================================================= */

let activeCategory = null;


function initCatalogue() {

    const overlay =
        document.getElementById(
            "catalogueOverlay"
        );


    const close =
        document.getElementById(
            "catalogueClose"
        );


    const backdrop =
        document.getElementById(
            "catalogueBackdrop"
        );


    if (!overlay) return;


    close?.addEventListener(
        "click",
        closeCatalogue
    );


    backdrop?.addEventListener(
        "click",
        closeCatalogue
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                overlay.classList.contains("open")
            ) {

                closeCatalogue();

            }

        }
    );

}


/* =========================================================
   OPEN CATEGORY CATALOGUE
========================================================= */

function openCatalogue(categoryId) {

    const category =
        getCategory(
            categoryId
        );


    if (!category) return;


    const products =
        getProductsByCategory(
            categoryId
        ).slice(0, 6);


    const overlay =
        document.getElementById(
            "catalogueOverlay"
        );


    const title =
        document.getElementById(
            "catalogueTitle"
        );


    const description =
        document.getElementById(
            "catalogueDescription"
        );


    const eyebrow =
        document.getElementById(
            "catalogueEyebrow"
        );


    const productContainer =
        document.getElementById(
            "catalogueProducts"
        );


    if (
        !overlay ||
        !title ||
        !description ||
        !productContainer
    ) {

        return;

    }


    activeCategory =
        categoryId;


    if (eyebrow) {

        eyebrow.textContent =
            `${category.name} Collection`;

    }


    title.textContent =
        category.name;


    description.textContent =
        category.description;


    productContainer.innerHTML =
        "";


    if (!products.length) {

        productContainer.innerHTML = `

            <div
                style="
                    grid-column:1/-1;
                    padding:50px 20px;
                    text-align:center;
                    color:#999;
                "
            >

                More pieces coming soon.

            </div>

        `;

    } else {

        products.forEach(
            product => {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "product-card";


                card.innerHTML = `

                    <div class="product-image">

                        <img
                            src="${escapeAttribute(
                                getProductImage(product)
                            )}"
                            alt="${escapeAttribute(
                                product.name
                            )}"
                            loading="lazy"
                        >

                    </div>


                    <div class="product-info">

                        <div class="product-category">

                            ${escapeHTML(
                                category.name
                            )}

                        </div>


                        <h3 class="product-name">

                            ${escapeHTML(
                                product.name
                            )}

                        </h3>


                        <div class="product-actions">

                            <a
                                class="product-whatsapp"
                                href="${escapeAttribute(
                                    getProductWhatsAppUrl(
                                        product
                                    )
                                )}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <i class="fa-brands fa-whatsapp"></i>

                                Chat about this

                            </a>

                        </div>

                    </div>

                `;


                const image =
                    card.querySelector(
                        "img"
                    );


                image?.addEventListener(
                    "error",
                    () => {

                        image.src =
                            "images/placeholder.jpg";

                    },
                    {
                        once: true
                    }
                );


                productContainer.appendChild(
                    card
                );

            }
        );

    }


    overlay.classList.add(
        "open"
    );


    overlay.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


/* =========================================================
   CLOSE CATEGORY CATALOGUE
========================================================= */

function closeCatalogue() {

    const overlay =
        document.getElementById(
            "catalogueOverlay"
        );


    if (!overlay) return;


    overlay.classList.remove(
        "open"
    );


    overlay.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );


    activeCategory = null;

}


/* =========================================================
   BACK TO TOP
========================================================= */

function initBackToTop() {

    const button =
        document.getElementById(
            "backToTop"
        );


    if (!button) return;


    const update =
        () => {

            button.classList.toggle(
                "visible",
                window.scrollY > 600
            );

        };


    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    update();

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

let revealObserver = null;


function initRevealAnimations() {

    if (
        !("IntersectionObserver" in window)
    ) {

        document
            .querySelectorAll(
                ".reveal"
            )
            .forEach(
                element => {

                    element.classList.add(
                        "revealed"
                    );

                }
            );


        return;

    }


    revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    observeRevealElements();

}


function observeRevealElements() {

    if (!revealObserver) return;


    document
        .querySelectorAll(
            ".reveal:not(.revealed)"
        )
        .forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

}


/* =========================================================
   LIGHTBOX
========================================================= */

function initLightbox() {

    const lightbox =
        document.getElementById(
            "productLightbox"
        );


    const image =
        document.getElementById(
            "lightboxImage"
        );


    const close =
        document.getElementById(
            "lightboxClose"
        );


    const backdrop =
        document.getElementById(
            "lightboxBackdrop"
        );


    if (!lightbox) return;


    close?.addEventListener(
        "click",
        closeLightbox
    );


    backdrop?.addEventListener(
        "click",
        closeLightbox
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                lightbox.classList.contains("open")
            ) {

                closeLightbox();

            }

        }
    );


    window.openProductLightbox =
        function(
            src,
            alt = ""
        ) {

            if (!image) return;


            image.src =
                src;


            image.alt =
                alt;


            lightbox.classList.add(
                "open"
            );


            lightbox.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "modal-open"
            );

        };


    function closeLightbox() {

        lightbox.classList.remove(
            "open"
        );


        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );


        if (image) {

            image.src = "";

        }

    }

}


/* =========================================================
   IMAGE FALLBACKS
========================================================= */

function initImageFallbacks() {

    document
        .querySelectorAll("img")
        .forEach(
            image => {

                image.addEventListener(
                    "error",
                    () => {

                        if (
                            image.src.includes(
                                "placeholder.jpg"
                            )
                        ) {

                            return;

                        }


                        image.src =
                            "images/placeholder.jpg";

                    },
                    {
                        once: true
                    }
                );

            }
        );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function initCurrentYear() {

    const year =
        document.getElementById(
            "currentYear"
        );


    if (!year) return;


    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   SECURITY / HTML HELPERS
========================================================= */

function escapeHTML(value) {

    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


function escapeAttribute(value) {

    return escapeHTML(value);

}