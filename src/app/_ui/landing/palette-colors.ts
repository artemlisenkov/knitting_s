export type PaletteSetId = "gradient" | "baby-cotton" | "warm";

export type PaletteColor = {
    code: string;
    imageAlt: string;
    imageSrc: string;
    detailImageSrc?: string;
};

export type PaletteCollectionSection = {
    id: string;
    colors: PaletteColor[];
    dividerAbove?: boolean;
};

export type PaletteCollection = {
    id: PaletteSetId;
    label: string;
    variant: "single" | "double";
    colors: PaletteColor[];
    sections?: PaletteCollectionSection[];
};

export const babyCottonPaletteColors: PaletteColor[] = Array.from({ length: 60 }, (_, index) => {
    const code = String(3410 + index);

    return {
        code,
        imageSrc: `/palette/baby-cotton/baby-cotton-${code}.jpg`,
        imageAlt: `Baby Cotton ${code} yarn`,
    };
});

const gradientCodes = [
    "2905",
    "2970",
    "3299",
    "3302",
    "3686",
    "4146",
    "4530",
    "4531",
    "5970",
    "7687",
    "7829",
] as const;

export const gradientPaletteColors: PaletteColor[] = gradientCodes.map((code) => ({
    code,
    imageSrc: `/palette/gradient/${code}.jpg`,
    imageAlt: `Alize Cotton Gold Batik ${code} yarn`,
}));

const warmCodes = [
    "152",
    "1",
    "161",
    "180",
    "62",
    "26",
    "200",
    "203",
    "386",
    "5",
    "58",
    "57",
    "684",
    "221",
    "450",
    "141",
    "40",
    "216",
    "680",
    "182",
    "36",
    "60",
    "585",
    "55",
    "584",
    "426",
    "21",
    "240",
    "651",
    "650",
    "56",
    "28",
    "111",
    "565",
    "645",
    "294",
    "207",
    "390",
    "901",
    "29",
    "283",
    "118",
    "798",
    "466",
    "166",
    "758",
    "498",
    "507",
    "522",
    "348",
    "851",
] as const;

export const warmPaletteColors: PaletteColor[] = warmCodes.map((code) => ({
    code,
    imageSrc: `/palette/warm/${code}.jpg`,
    imageAlt: `Alize Lanagold ${code} yarn`,
}));

const warmFineCodes = [
    "21",
    "152",
    "1",
    "118",
    "141",
    "450",
    "684",
    "60",
    "62",
    "161",
    "58",
    "585",
    "55",
    "798",
    "221",
    "182",
    "166",
    "40",
    "390",
    "111",
    "180",
    "36",
    "207",
    "56",
    "216",
    "203",
    "57",
    "240",
    "26",
    "29",
    "200",
    "5",
    "851",
    "283",
    "294",
    "466",
    "178",
    "505",
    "28",
    "348",
    "173",
    "440",
] as const;

export const warmFinePaletteColors: PaletteColor[] = warmFineCodes.map((code) => ({
    code,
    imageSrc: `/palette/warm/fine/${code}.jpg`,
    imageAlt: `Alize Lanagold Fine ${code} yarn`,
}));

export const paletteCollections: PaletteCollection[] = [
    {
        id: "gradient",
        label: "Gradient",
        variant: "single",
        colors: gradientPaletteColors,
    },
    {
        id: "baby-cotton",
        label: "Cotton",
        variant: "single",
        colors: babyCottonPaletteColors,
    },
    {
        id: "warm",
        label: "Warm",
        variant: "single",
        colors: [...warmPaletteColors, ...warmFinePaletteColors],
        sections: [
            {
                id: "warm",
                colors: warmPaletteColors,
            },
            {
                id: "fine",
                colors: warmFinePaletteColors,
                dividerAbove: true,
            },
        ],
    },
];
