export type CatalogDisplayProductImage = {
    id: string;
    src: string;
    alt: string;
};

export type CatalogDisplayProduct = {
    id: string;
    title: string;
    description: string;
    imageAlt: string;
    imageSrc: string;
    galleryImages: CatalogDisplayProductImage[];
};
