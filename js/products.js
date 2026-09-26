/* =========================================================
   STEVE'S BOUTIQUE
   PRODUCT DATABASE
   ========================================================= */


/* =========================================================
   STORE CONFIGURATION
========================================================= */

const STORE_CONFIG = {

    name: "Steve’s Boutique",

    displayName: "Steve’s Boutique",

    shortName: "STEVE’S",

    tagline: "Premium Men’s Fashion",

    whatsappNumber: "2348033790836",

    phone: "08033790836",

    email: "stevboutique35@gmail.com",

    address: "34 Ekewema Crescent, Ikenegbu, Owerri, Imo State, Nigeria",

    hours: "Open 24 Hours"

};


/* =========================================================
   CATEGORIES
========================================================= */

const CATEGORIES = [

    {
        id: "shirts",

        name: "Shirts",

        description:
            "Refined shirts for work, events and everyday style.",

        image:
            "images/shirts/shirt-1.webp"
    },


    {
        id: "jeans",

        name: "Jeans",

        description:
            "Premium denim designed for effortless everyday style.",

        image:
            "images/jeans/jeans-1.webp"
    },


    {
        id: "suits",

        name: "Suits",

        description:
            "Sharp tailoring for important moments and occasions.",

        image:
            "images/suits/suit-1.webp"
    },


    {
        id: "blazers",

        name: "Blazers",

        description:
            "Elegant layers that bring sophistication to any outfit.",

        image:
            "images/blazers/blazer-1.webp"
    },


    {
        id: "polos",

        name: "Polos",

        description:
            "Smart casual polos made for modern everyday dressing.",

        image:
            "images/polos/polo-1.webp"
    },


    {
        id: "shoes",

        name: "Shoes",

        description:
            "Classic and contemporary footwear for every occasion.",

        image:
            "images/shoes/shoe-1.webp"
    },


    {
        id: "accessories",

        name: "Accessories",

        description:
            "Finishing touches that complete a refined look.",

        image:
            "images/accessories/accessory-1.webp"
    },


    {
        id: "caps",

        name: "Caps",

        description:
            "Contemporary caps for relaxed and confident styling.",

        image:
            "images/caps/cap-1.webp"
    },


    {
        id: "trousers",

        name: "Pants",

        description:
            "Well-fitted pants for polished everyday dressing.",

        image:
            "images/trousers/trouser-1.webp"
    },


    {
        id: "native-wear",

        name: "Native Wear",

        description:
            "Modern native pieces inspired by timeless African style.",

        image:
            "images/native-wear/native-1.webp"
    },


    {
        id: "footwear",

        name: "Footwear",

        description:
            "Comfortable and stylish footwear for relaxed occasions.",

        image:
            "images/slippers/slipper-1.webp"
    }

];


/* =========================================================
   PRODUCTS
========================================================= */

const PRODUCTS = [

    /* =====================================================
       SHIRTS
    ====================================================== */

    {
        id: "shirt-001",
        name: "Classic White Shirt",
        category: "shirts",
        image: "images/shirts/shirt-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "shirt-002",
        name: "Premium Black Shirt",
        category: "shirts",
        image: "images/shirts/shirt-2.webp",
        featured: true,
        trending: true
    },

    {
        id: "shirt-003",
        name: "Classic Blue Shirt",
        category: "shirts",
        image: "images/shirts/shirt-3.webp",
        featured: true,
        trending: false
    },

    {
        id: "shirt-004",
        name: "Patterned Casual Shirt",
        category: "shirts",
        image: "images/shirts/shirt-4.webp",
        featured: false,
        trending: true
    },

    {
        id: "shirt-005",
        name: "Long Sleeve Shirt",
        category: "shirts",
        image: "images/shirts/shirt-5.webp",
        featured: false,
        trending: false
    },

    {
        id: "shirt-006",
        name: "Classic Luxe Shirt",
        category: "shirts",
        image: "images/shirts/shirt-7.webp",
        featured: true,
        trending: true
    },

    {
        id: "shirt-008",
        name: "Gentleman’s Classic Shirt",
        category: "shirts",
        image: "images/shirts/shirt-.webp",
        featured: true,
        trending: false
    },


    /* =====================================================
       JEANS
    ====================================================== */

    {
        id: "jeans-001",
        name: "Classic Blue Jeans",
        category: "jeans",
        image: "images/jeans/jeans-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "jeans-002",
        name: "Dark Wash Jeans",
        category: "jeans",
        image: "images/jeans/jeans-2.webp",
        featured: true,
        trending: false
    },

    {
        id: "jeans-003",
        name: "Slim Fit Jeans",
        category: "jeans",
        image: "images/jeans/jeans-3.webp",
        featured: false,
        trending: true
    },

    {
        id: "jeans-004",
        name: "Washed Denim Jeans",
        category: "jeans",
        image: "images/jeans/jeans-4.webp",
        featured: false,
        trending: false
    },


    /* =====================================================
       SUITS
    ====================================================== */

    {
        id: "suit-001",
        name: "Classic Black Suit",
        category: "suits",
        image: "images/suits/suit-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "suit-002",
        name: "Navy Blue Suit",
        category: "suits",
        image: "images/suits/suit-2.webp",
        featured: true,
        trending: false
    },

    {
        id: "suit-003",
        name: "Grey Formal Suit",
        category: "suits",
        image: "images/suits/suit-3.webp",
        featured: false,
        trending: false
    },

    {
        id: "suit-004",
        name: "Modern Two-Piece Suit",
        category: "suits",
        image: "images/suits/suit-4.webp",
        featured: false,
        trending: true
    },


    /* =====================================================
       BLAZERS
    ====================================================== */

    {
        id: "blazer-001",
        name: "Classic Black Blazer",
        category: "blazers",
        image: "images/blazers/blazer-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "blazer-002",
        name: "Navy Blazer",
        category: "blazers",
        image: "images/blazers/blazer-2.webp",
        featured: true,
        trending: false
    },

    {
        id: "blazer-003",
        name: "Grey Blazer",
        category: "blazers",
        image: "images/blazers/blazer-3.webp",
        featured: false,
        trending: false
    },

    {
        id: "blazer-004",
        name: "Statement Blazer",
        category: "blazers",
        image: "images/blazers/blazer-4.webp",
        featured: false,
        trending: true
    },


    /* =====================================================
       POLOS
    ====================================================== */

    {
        id: "polo-001",
        name: "Classic Black Polo",
        category: "polos",
        image: "images/polos/polo-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "polo-002",
        name: "Classic White Polo",
        category: "polos",
        image: "images/polos/polo-2.webp",
        featured: true,
        trending: false
    },

    {
        id: "polo-003",
        name: "Navy Polo",
        category: "polos",
        image: "images/polos/polo-3.webp",
        featured: false,
        trending: false
    },

    {
        id: "polo-004",
        name: "Premium Casual Polo",
        category: "polos",
        image: "images/polos/polo-4.webp",
        featured: false,
        trending: true
    },


    /* =====================================================
       SHOES
    ====================================================== */

    {
        id: "shoe-001",
        name: "Classic Leather Shoe",
        category: "shoes",
        image: "images/shoes/shoe-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "shoe-002",
        name: "Premium Loafers",
        category: "shoes",
        image: "images/shoes/shoe-2.webp",
        featured: true,
        trending: false
    },

    {
        id: "shoe-003",
        name: "Classic Dress Shoe",
        category: "shoes",
        image: "images/shoes/shoe-4.webp",
        featured: false,
        trending: false
    },

    {
        id: "shoe-004",
        name: "Casual Sneakers",
        category: "shoes",
        image: "images/shoes/shoe-3.webp",
        featured: false,
        trending: true
    },

    {
        id: "shoe-005",
        name: "Classic Brown Shoe",
        category: "shoes",
        image: "images/shoes/shoe-5.webp",
        featured: false,
        trending: false
    },


    /* =====================================================
       ACCESSORIES
    ====================================================== */

    {
        id: "accessory-001",
        name: "Classic Leather Belt",
        category: "accessories",
        image: "images/accessories/accessory-1.webp",
        featured: true,
        trending: false
    },

    {
        id: "accessory-002",
        name: "Classic Wrist Watch",
        category: "accessories",
        image: "images/accessories/accessory-2.webp",
        featured: true,
        trending: true
    },

    {
        id: "accessory-003",
        name: "Men’s Wallet",
        category: "accessories",
        image: "images/accessories/accessory-3.webp",
        featured: false,
        trending: false
    },

    {
        id: "accessory-004",
        name: "Classic Sunglasses",
        category: "accessories",
        image: "images/accessories/accessory-4.webp",
        featured: false,
        trending: true
    },


    /* =====================================================
       CAPS
    ====================================================== */

    {
        id: "cap-001",
        name: "Classic Black Cap",
        category: "caps",
        image: "images/caps/cap-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "cap-002",
        name: "Premium Logo Cap",
        category: "caps",
        image: "images/caps/cap-2.webp",
        featured: false,
        trending: false
    },

    {
        id: "cap-003",
        name: "Classic Navy Cap",
        category: "caps",
        image: "images/caps/cap-3.webp",
        featured: false,
        trending: false
    },

    {
        id: "cap-004",
        name: "Casual Street Cap",
        category: "caps",
        image: "images/caps/cap-4.webp",
        featured: false,
        trending: true
    },


    /* =====================================================
       PANTS
    ====================================================== */

    {
        id: "trouser-001",
        name: "Classic Black Pants",
        category: "trousers",
        image: "images/trousers/trouser-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "trouser-002",
        name: "Classic Navy Pants",
        category: "trousers",
        image: "images/trousers/trouser-2.webp",
        featured: true,
        trending: false
    },

    {
        id: "trouser-003",
        name: "Slim Fit Trousers",
        category: "trousers",
        image: "images/trousers/trouser-3.webp",
        featured: false,
        trending: false
    },

    {
        id: "trouser-004",
        name: "Smart Casual Pants",
        category: "trousers",
        image: "images/trousers/trouser-4.webp",
        featured: false,
        trending: true
    },


    /* =====================================================
       NATIVE WEAR
    ====================================================== */

    {
        id: "native-001",
        name: "Classic Native Wear",
        category: "native-wear",
        image: "images/native-wear/native-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "native-002",
        name: "Premium Native Set",
        category: "native-wear",
        image: "images/native-wear/native-2.webp",
        featured: true,
        trending: false
    },

    {
        id: "native-003",
        name: "Modern Senator Wear",
        category: "native-wear",
        image: "images/native-wear/native-3.webp",
        featured: false,
        trending: false
    },

    {
        id: "native-004",
        name: "Traditional Inspired Native",
        category: "native-wear",
        image: "images/native-wear/native-4.webp",
        featured: false,
        trending: true
    },


    /* =====================================================
       FOOTWEAR
    ====================================================== */

    {
        id: "footwear-001",
        name: "Classic Leather Footwear",
        category: "footwear",
        image: "images/slippers/slipper-1.webp",
        featured: true,
        trending: true
    },

    {
        id: "footwear-002",
        name: "Executive Leather Footwear",
        category: "footwear",
        image: "images/slippers/slipper-2.webp",
        featured: true,
        trending: false
    },

    {
        id: "footwear-003",
        name: "Premium Casual Footwear",
        category: "footwear",
        image: "images/slippers/slipper-3.webp",
        featured: false,
        trending: true
    },

    {
        id: "footwear-004",
        name: "Luxury Comfort Footwear",
        category: "footwear",
        image: "images/slippers/slipper-4.webp",
        featured: true,
        trending: false
    },

    {
        id: "footwear-005",
        name: "Gentleman's Slide",
        category: "footwear",
        image: "images/slippers/slipper-5.webp",
        featured: false,
        trending: true
    },

    {
        id: "footwear-006",
        name: "Premium Resort Slide",
        category: "footwear",
        image: "images/slippers/slipper-6.webp",
        featured: false,
        trending: false
    }

];


/* =========================================================
   CATEGORY FUNCTIONS
========================================================= */


/* Get one category */

function getCategory(categoryId) {

    return CATEGORIES.find(
        category =>
            category.id === categoryId
    );

}


/* Get products inside a category */

function getProductsByCategory(categoryId) {

    return PRODUCTS.filter(
        product =>
            product.category === categoryId
    );

}


/* Get one product */

function getProductById(productId) {

    return PRODUCTS.find(
        product =>
            product.id === productId
    );

}


/* Get featured products */

function getFeaturedProducts() {

    return PRODUCTS.filter(
        product =>
            product.featured === true
    );

}


/* Get trending products */

function getTrendingProducts() {

    return PRODUCTS.filter(
        product =>
            product.trending === true
    );

}


/* Get category product count */

function getCategoryProductCount(categoryId) {

    return getProductsByCategory(
        categoryId
    ).length;

}


/* =========================================================
   IMAGE FUNCTION
========================================================= */

function getProductImage(product) {

    if (
        product &&
        product.image
    ) {

        return product.image;

    }

    return "images/placeholder.webp";

}


/* =========================================================
   WHATSAPP
========================================================= */


/* Create WhatsApp URL */

function createWhatsAppUrl(message) {

    return (
        "https://wa.me/" +
        STORE_CONFIG.whatsappNumber +
        "?text=" +
        encodeURIComponent(message)
    );

}


/* =========================================================
   CATEGORY WHATSAPP MESSAGE
========================================================= */

function createCategoryWhatsAppMessage(categoryId) {

    const category =
        getCategory(categoryId);


    if (!category) {

        return `
Hello Steve’s Boutique 👋

I would like to make an enquiry.

Thank you.
        `.trim();

    }


    return `
Hello Steve’s Boutique 👋

I’m interested in your ${category.name} collection.

Please send me the available options.

Thank you.
    `.trim();

}


/* =========================================================
   PRODUCT WHATSAPP MESSAGE
========================================================= */

function createProductWhatsAppMessage(product) {

    if (!product) {

        return `
Hello Steve’s Boutique 👋

I would like to make an enquiry.

Thank you.
        `.trim();

    }


    const category =
        getCategory(product.category);


    return `
Hello Steve’s Boutique 👋

I’m interested in this product:

Product: ${product.name}

Category: ${category?.name || "Collection"}

Please let me know if it is available.

Thank you.
    `.trim();

}


/* =========================================================
   PRODUCT WHATSAPP URL
========================================================= */

function getProductWhatsAppUrl(product) {

    return createWhatsAppUrl(
        createProductWhatsAppMessage(
            product
        )
    );

}


/* =========================================================
   CATEGORY WHATSAPP URL
========================================================= */

function getCategoryWhatsAppUrl(categoryId) {

    return createWhatsAppUrl(
        createCategoryWhatsAppMessage(
            categoryId
        )
    );

}


/* =========================================================
   MAKE DATA AVAILABLE
========================================================= */

window.STORE_CONFIG =
    STORE_CONFIG;

window.CATEGORIES =
    CATEGORIES;

window.PRODUCTS =
    PRODUCTS;


/* Functions */

window.getCategory =
    getCategory;

window.getProductsByCategory =
    getProductsByCategory;

window.getProductById =
    getProductById;

window.getFeaturedProducts =
    getFeaturedProducts;

window.getTrendingProducts =
    getTrendingProducts;

window.getCategoryProductCount =
    getCategoryProductCount;

window.getProductImage =
    getProductImage;

window.createWhatsAppUrl =
    createWhatsAppUrl;

window.createCategoryWhatsAppMessage =
    createCategoryWhatsAppMessage;

window.createProductWhatsAppMessage =
    createProductWhatsAppMessage;

window.getProductWhatsAppUrl =
    getProductWhatsAppUrl;

window.getCategoryWhatsAppUrl =
    getCategoryWhatsAppUrl;