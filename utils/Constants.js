export const RAIN = "Rain"
export const SUN = "Sunny"
export const WIND = "Windy"

export const possibleWeatherLabels = [RAIN, SUN, WIND]

export const CASUAL = "Casual"
export const SEMI_FORMAL = "Semi Casual"
export const FORMAL = "Formal"

export const possibleStyleLabels = [CASUAL, SEMI_FORMAL, FORMAL]

export const types = {
    "TOP": "top",
    "BOTTOM": "bottom",
    "ACCESSORIES": "accessories",
    "SHOES": "shoes"
}

export const possibleTopLabels = {
    "Shirt": {parentLabel: "TOP", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "T-shirt": {parentLabel: "Shirt", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Dress shirt": {
        parentLabel: "Shirt",
        minTemp: 10,
        maxTemp: 30,
        weatherLabels: [SUN],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "Blouse": {
        parentLabel: "Dress shirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Active shirt": {parentLabel: "Shirt", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Rugby shirt": {parentLabel: "Active shirt", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Polo shirt": {
        parentLabel: "Dress shirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Long-sleeved t-shirt": {
        parentLabel: "T-shirt",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL]
    },
    "Sleeveless shirt": {parentLabel: "T-shirt", minTemp: 15, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Undershirt": {parentLabel: "T-shirt", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Tube top": {
        parentLabel: "T-shirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Crop top": {
        parentLabel: "T-shirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Camisoles": {parentLabel: "T-shirt", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},

    "Jacket": {
        parentLabel: "TOP",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, RAIN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Bolero jacket": {
        parentLabel: "Jacket",
        minTemp: 10,
        maxTemp: 30,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Bluejacket": {
        parentLabel: "Jacket",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, WIND],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "Leather jacket": {
        parentLabel: "Jacket",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, RAIN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },

    "Coat": {
        parentLabel: "TOP",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, RAIN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Raincoat": {parentLabel: "Coat", minTemp: 0, maxTemp: 50, weatherLabels: [RAIN, WIND], styleLabels: [CASUAL]},
    "Trench coat": {
        parentLabel: "Coat",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, RAIN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Overcoat": {
        parentLabel: "Coat",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, RAIN, WIND],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "White coat": {
        parentLabel: "Coat",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, RAIN, WIND],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },

    "Sweater": {
        parentLabel: "TOP",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Sweatshirt": {
        parentLabel: "Sweater",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Sweater vest": {
        parentLabel: "Sweater",
        minTemp: 0,
        maxTemp: 30,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL]
    },
    "Hoodie": {parentLabel: "Sweater", minTemp: 0, maxTemp: 20, weatherLabels: [SUN, WIND], styleLabels: [CASUAL]},
    "Cardigan": {
        parentLabel: "Sweater",
        minTemp: 0,
        maxTemp: 25,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Vest": {
        parentLabel: "Sweater",
        minTemp: 0,
        maxTemp: 25,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },

    "Suit": {parentLabel: "TOP", minTemp: 0, maxTemp: 30, weatherLabels: [SUN, WIND, RAIN], styleLabels: [FORMAL]},
    "Pantsuit": {
        parentLabel: "Suit",
        minTemp: 10,
        maxTemp: 30,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Dress suit": {
        parentLabel: "Suit",
        minTemp: 0,
        maxTemp: 30,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "Rain suit": {parentLabel: "Coat", minTemp: 0, maxTemp: 50, weatherLabels: [RAIN, WIND], styleLabels: [CASUAL]},

}

export const possibleBottomLabels = {
    "Pant": {
        parentLabel: "BOTTOM",
        minTemp: 0,
        maxTemp: 20,
        weatherLabels: [SUN, RAIN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Hockey pants": {
        parentLabel: "Pant",
        minTemp: -10,
        maxTemp: 20,
        weatherLabels: [SUN, RAIN, WIND],
        styleLabels: [CASUAL]
    },
    "Harem pant": {parentLabel: "Pant", minTemp: 10, maxTemp: 20, weatherLabels: [SUN, WIND], styleLabels: [CASUAL]},
    "Sweatpant": {parentLabel: "Pant", minTemp: -10, maxTemp: 20, weatherLabels: [SUN, WIND], styleLabels: [CASUAL]},
    "Cargo pants": {
        parentLabel: "Pant",
        minTemp: -10,
        maxTemp: 25,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Rain pants": {parentLabel: "Pant", minTemp: 0, maxTemp: 40, weatherLabels: [SUN, WIND], styleLabels: [CASUAL]},
    "Khaki pants": {
        parentLabel: "Pant",
        minTemp: 0,
        maxTemp: 25,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Active pants": {parentLabel: "Pant", minTemp: 0, maxTemp: 50, weatherLabels: [SUN, WIND], styleLabels: [CASUAL]},
    "Yoga pant": {
        parentLabel: "Active pants",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL]
    },
    "Jeans": {
        parentLabel: "Pant",
        minTemp: -10,
        maxTemp: 30,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Carpenter jeans": {
        parentLabel: "Jeans",
        minTemp: -10,
        maxTemp: 30,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Trousers": {
        parentLabel: "Pant",
        minTemp: -10,
        maxTemp: 30,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Suit trousers": {
        parentLabel: "Pant",
        minTemp: -10,
        maxTemp: 30,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Leggings": {
        parentLabel: "Active pants",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL]
    },


    "Shorts": {parentLabel: "BOTTOM", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Jean short": {
        parentLabel: "Shorts",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Board short": {parentLabel: "Shorts", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Cycling shorts": {parentLabel: "Shorts", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Bermuda shorts": {parentLabel: "Shorts", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Rugby short": {parentLabel: "Shorts", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Martial arts shorts": {
        parentLabel: "Shorts",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL]
    },

    "Skirt": {
        parentLabel: "BOTTOM",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Pencil skirt": {
        parentLabel: "Skirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Miniskirt": {
        parentLabel: "Skirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Hoopskirt": {
        parentLabel: "Skirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Tennis skirt": {parentLabel: "Skirt", minTemp: 10, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Dance skirt": {
        parentLabel: "Skirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Christmas tree skirt": {
        parentLabel: "Skirt",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL]
    },
    "Overskirt": {
        parentLabel: "Skirt",
        minTemp: 10,
        maxTemp: 20,
        weatherLabels: [SUN],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },

}

export const possibleAccessoryLabels = {
    "Jewelry": {
        parentLabel: "ACCESSORIES",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Necklace": {
        parentLabel: "Jewelry",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Earrings": {
        parentLabel: "Jewelry",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Bracelet": {
        parentLabel: "Jewelry",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Bangle": {
        parentLabel: "Jewelry",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Rings": {
        parentLabel: "Jewelry",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Wedding ring": {
        parentLabel: "Rings",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Titanium ring": {
        parentLabel: "Rings",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Pendant": {
        parentLabel: "Jewelry",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },

    "Watch": {
        parentLabel: "ACCESSORIES",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Analog watch": {
        parentLabel: "Watch",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Pocket watch": {
        parentLabel: "Watch",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Watch accessory": {
        parentLabel: "Watch",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },

    "Hat": {
        parentLabel: "ACCESSORIES",
        minTemp: -30,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Cowboy hat": {
        parentLabel: "Hat",
        minTemp: -30,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Bowler hat": {
        parentLabel: "Hat",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Cork hat": {parentLabel: "Hat", minTemp: 0, maxTemp: 50, weatherLabels: [SUN, WIND, RAIN], styleLabels: [CASUAL]},
    "Cloche hat": {parentLabel: "Hat", minTemp: 0, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Sun hat": {parentLabel: "Hat", minTemp: 0, maxTemp: 50, weatherLabels: [SUN, WIND, RAIN], styleLabels: [CASUAL]},
    "Hi-hat": {
        parentLabel: "Hat",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "Trucker hat": {
        parentLabel: "Hat",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Party hat": {parentLabel: "Hat", minTemp: 0, maxTemp: 50, weatherLabels: [SUN, WIND, RAIN], styleLabels: [CASUAL]},
    "Costume hat": {
        parentLabel: "Hat",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Fedora": {
        parentLabel: "Hat",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Beanie": {
        parentLabel: "Hat",
        minTemp: -30,
        maxTemp: 20,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Swim cap": {parentLabel: "Hat", minTemp: 20, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Helmet": {parentLabel: "Hat", minTemp: 0, maxTemp: 50, weatherLabels: [SUN, WIND, RAIN], styleLabels: [CASUAL]},
    "Hard hat": {
        parentLabel: "Helmet",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },

    "Cap": {parentLabel: "Hat", minTemp: 0, maxTemp: 50, weatherLabels: [SUN, WIND, RAIN], styleLabels: [CASUAL]},
    "Knit cap": {parentLabel: "Cap", minTemp: 0, maxTemp: 40, weatherLabels: [SUN, WIND, RAIN], styleLabels: [CASUAL]},
    "Baseball cap": {
        parentLabel: "Cap",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Flat cap": {parentLabel: "Cap", minTemp: 0, maxTemp: 50, weatherLabels: [SUN, WIND, RAIN], styleLabels: [CASUAL]},
    "Peaked cap": {
        parentLabel: "Cap",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Sailor cap": {
        parentLabel: "Cap",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Rally cap": {parentLabel: "Cap", minTemp: 0, maxTemp: 50, weatherLabels: [SUN, WIND, RAIN], styleLabels: [CASUAL]},

    "Umbrella": {
        parentLabel: "ACCESSORIES",
        minTemp: null,
        maxTemp: null,
        weatherLabels: [RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Scarf": {
        parentLabel: "ACCESSORIES",
        minTemp: -30,
        maxTemp: 20,
        weatherLabels: [SUN, WIND],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Belt": {
        parentLabel: "ACCESSORIES",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Glasses": {
        parentLabel: "ACCESSORIES",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Sunglasses": {
        parentLabel: "Glasses",
        minTemp: null,
        maxTemp: null,
        weatherLabels: null,
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },

}

export const possibleFootwearLabels = {
    "Shoe": {
        parentLabel: "SHOES",
        minTemp: -30,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Athletic shoe": {
        parentLabel: "Shoe",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Walking shoe": {
        parentLabel: "Athletic shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Sneakers": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Golf shoe": {
        parentLabel: "Athletic shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Running shoe": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Bicycle shoe": {
        parentLabel: "Athletic shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Bowling shoe": {
        parentLabel: "Athletic shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Outdoor shoe": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Tennis shoe": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Basketball shoe": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Hiking shoe": {
        parentLabel: "Walking shoe",
        minTemp: -20,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Cross training shoe": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Gardening shoes": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Skate shoe": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
    "Pointe shoe": {parentLabel: "Athletic shoe", minTemp: 0, maxTemp: 50, weatherLabels: [SUN], styleLabels: [CASUAL]},
    "Wrestling shoe": {
        parentLabel: "Athletic shoe",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN],
        styleLabels: [CASUAL]
    },
    "Cycling shoe": {
        parentLabel: "Athletic shoe",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Court shoe": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },

    "Dress shoe": {
        parentLabel: "Shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "Bridal shoe": {
        parentLabel: "Dress shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "High heels": {
        parentLabel: "Dress shoe",
        minTemp: 0,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Oxford shoe": {
        parentLabel: "Dress shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "Plimsoll shoe": {
        parentLabel: "Dress shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },

    "Slip-on shoe": {
        parentLabel: "Shoe",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Sandal": {
        parentLabel: "Slip-on shoe",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Flip-flops": {
        parentLabel: "Slip-on shoe",
        minTemp: 10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Slipper": {
        parentLabel: "Slip-on shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Japanese slipper": {
        parentLabel: "Slipper",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Lady's-slipper": {
        parentLabel: "Slipper",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },

    "Boot": {
        parentLabel: "Walking shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Work boots": {
        parentLabel: "Boot",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Hiking boot": {
        parentLabel: "Boot",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Knee-high boot": {
        parentLabel: "Dress shoe",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [SEMI_FORMAL, FORMAL]
    },
    "Chelsea boot": {
        parentLabel: "Boot",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Durango boot": {
        parentLabel: "Boot",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL, FORMAL]
    },
    "Snow boot": {
        parentLabel: "Boot",
        minTemp: -30,
        maxTemp: 10,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Rain boot": {parentLabel: "Boot", minTemp: 0, maxTemp: 50, weatherLabels: [WIND, RAIN], styleLabels: [CASUAL]},
    "Steel-toe boot": {
        parentLabel: "Boot",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Riding boot": {
        parentLabel: "Boot",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL]
    },
    "Cowboy boot": {
        parentLabel: "Boot",
        minTemp: -10,
        maxTemp: 50,
        weatherLabels: [SUN, WIND, RAIN],
        styleLabels: [CASUAL, SEMI_FORMAL]
    },
}

export const possibleLabels = Object.assign({}, possibleTopLabels, possibleBottomLabels, possibleAccessoryLabels, possibleFootwearLabels)

export const selectableNonWeatherLabels = possibleStyleLabels.concat(Object.keys(possibleLabels))
export const possibleColourLabels = ["Blue", "Green", "Yellow"]     //TODO populate list
export const possibleTemperatureLabesl = ["Cold", "Sub-Zero", "Hot", "Warm"]    //TODO populate list