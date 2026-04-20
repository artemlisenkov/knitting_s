"use client"

import { useSyncExternalStore } from "react";
import { SignOutButton } from "@/src/components/auth/signout-button";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import {
    landingLanguages,
    type LandingLanguage,
} from "@/src/app/_ui/landing-translations";

const adminDraftStorageKey = "crochet-makes-admin-draft";
const adminDraftChangeEventName = "admin-draft-change";

type LandingNavItem = {
    label: string;
    href: string;
};

const getAdminDraftSnapshot = () => (
    typeof window === "undefined"
        ? false
        : window.localStorage.getItem(adminDraftStorageKey) !== null
);

const subscribeToAdminDraftChanges = (onStoreChange: () => void) => {
    const handleStoreChange = () => onStoreChange();

    window.addEventListener("storage", handleStoreChange);
    window.addEventListener(adminDraftChangeEventName, handleStoreChange);

    return () => {
        window.removeEventListener("storage", handleStoreChange);
        window.removeEventListener(adminDraftChangeEventName, handleStoreChange);
    };
};

export function LandingHeader({
    brand,
    navItems,
    language,
    isAdminView,
    onLanguageChange,
}: {
    brand: string;
    navItems: LandingNavItem[];
    language: LandingLanguage;
    isAdminView: boolean;
    onLanguageChange: (language: LandingLanguage) => void;
}) {
    const hasPendingAdminChanges = useSyncExternalStore(
        subscribeToAdminDraftChanges,
        getAdminDraftSnapshot,
        () => false
    );
    const activeLanguageIndex = landingLanguages.findIndex((languageOption) => languageOption.code === language);

    return (
        <header className="sticky top-0 z-20 border-b border-white/50 bg-white/45 backdrop-blur-md">
            <nav className="mx-auto grid min-h-12 w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 sm:px-6">
                <a href="#aboutMe" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                    {brand}
                </a>

                <div className="hidden items-center gap-1 justify-self-center rounded-full border border-[#ead0d4]/70 bg-white/45 p-1 shadow-sm sm:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                                buttonVariants({ variant: "ghost", size: "xs" }),
                                "rounded-full px-3 text-xs uppercase text-[#4d3b3f] hover:bg-white/65 hover:text-[#994d59] hover:shadow-sm"
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2 justify-self-end">
                    <div className="rounded-full border border-[#ead0d4]/70 bg-white/45 p-1 shadow-sm">
                        <div className="relative grid grid-cols-4">
                            <span
                                className="absolute inset-y-0 left-0 rounded-full bg-white/65 shadow-sm transition-transform duration-500 ease-out"
                                style={{
                                    width: `${100 / landingLanguages.length}%`,
                                    transform: `translateX(${activeLanguageIndex * 100}%)`,
                                }}
                                aria-hidden="true"
                            />
                            {landingLanguages.map((languageOption) => (
                                <Button
                                    key={languageOption.code}
                                    variant="ghost"
                                    size="sm"
                                    type="button"
                                    className={cn(
                                        "relative z-10 h-8 rounded-full px-2.5 text-xs font-semibold text-[#4d3b3f] hover:bg-white/30 hover:text-[#994d59]",
                                        language === languageOption.code && "text-[#994d59]"
                                    )}
                                    aria-label={`Switch language to ${languageOption.label}`}
                                    aria-pressed={language === languageOption.code}
                                    onClick={() => onLanguageChange(languageOption.code)}
                                >
                                    {languageOption.flagClassName ? (
                                        <span className={cn(languageOption.flagClassName, "rounded-sm shadow-xs")} />
                                    ) : (
                                        <span className="h-3 w-4 rounded-sm bg-[#D9D2D2] shadow-xs" aria-hidden="true" />
                                    )}
                                    <span>{languageOption.label}</span>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {isAdminView && hasPendingAdminChanges ? (
                        <Button
                            type="button"
                            className="rounded-full bg-[#2f7d5b] px-4 text-white shadow-sm hover:bg-[#256548] hover:text-white"
                        >
                            Save
                        </Button>
                    ) : null}

                    {isAdminView ? (
                        <SignOutButton />
                    ) : null}
                </div>
            </nav>
        </header>
    );
}
