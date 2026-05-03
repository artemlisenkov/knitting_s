import type { landingTranslations } from "@/src/app/_ui/landing/landing-translations";

export type LandingCopy = typeof landingTranslations.en;
export type LandingCatalogGroup = LandingCopy["catalog"]["groups"][number];
