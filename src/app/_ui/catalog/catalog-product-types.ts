export type CatalogDisplayProductImage = {
    id: string;
    src: string;
    alt: string;
};

export type CatalogDisplayProduct = {
    id: string;
    title: string;
    description: string;
    price?: string | null;
    imageAlt: string;
    imageSrc: string;
    galleryImages: CatalogDisplayProductImage[];
};
