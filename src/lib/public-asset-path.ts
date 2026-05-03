const absoluteUrlPattern = /^[a-z][a-z\d+.-]*:\/\//i;

export const toPublicAssetPath = (value: string) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) return trimmedValue;
    if (absoluteUrlPattern.test(trimmedValue)) return trimmedValue;

    const pathname = trimmedValue.split(/[?#]/)[0] ?? trimmedValue;

    return pathname.startsWith("/") ? pathname : `/${pathname}`;
};
