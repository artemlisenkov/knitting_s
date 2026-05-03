export type PaletteColor = {
    code: string;
    imageSrc: string;
    imageAlt: string;
};

export const babyCottonPaletteColors: PaletteColor[] = Array.from({ length: 60 }, (_, index) => {
    const code = String(3410 + index);

    return {
        code,
        imageSrc: `/palette/baby-cotton-${code}.jpg`,
        imageAlt: `Baby Cotton ${code} yarn`,
    };
});
