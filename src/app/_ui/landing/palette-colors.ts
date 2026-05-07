export type PaletteSetId = "gradient" | "baby-cotton" | "alize";

export type PaletteColor = {
    code: string;
    imageAlt: string;
    imageSrc: string;
    detailImageSrc?: string;
};

export type PaletteCollection = {
    id: PaletteSetId;
    label: string;
    variant: "single" | "double";
    colors: PaletteColor[];
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

export const paletteCollections: PaletteCollection[] = [
    {
        id: "gradient",
        label: "Gradient",
        variant: "single",
        colors: gradientPaletteColors,
    },
    {
        id: "baby-cotton",
        label: "Baby Cotton",
        variant: "single",
        colors: babyCottonPaletteColors,
    },
    {
        id: "alize",
        label: "Alize",
        variant: "single",
        colors: [],
    },
];
