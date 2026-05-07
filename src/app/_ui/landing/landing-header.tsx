"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { MenuIcon } from "lucide-react";
import { SignOutButton } from "@/src/components/auth/signout-button";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { NativeSelect, NativeSelectOption } from "@/src/components/ui/native-select";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/src/components/ui/sheet";
import { cn } from "@/src/lib/utils";
import {
    landingLanguages,
    type LandingLanguage,
} from "@/src/app/_ui/landing/landing-translations";

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
    isHidden = false,
    onLanguageChange,
}: {
    brand: string;
    navItems: LandingNavItem[];
    language: LandingLanguage;
    isAdminView: boolean;
    isHidden?: boolean;
    onLanguageChange: (language: LandingLanguage) => void;
}) {
    const hasPendingAdminChanges = useSyncExternalStore(
        subscribeToAdminDraftChanges,
        getAdminDraftSnapshot,
        () => false
    );
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const activeLanguageIndex = landingLanguages.findIndex((languageOption) => languageOption.code === language);
    const [isMobileChromeVisible, setIsMobileChromeVisible] = useState(true);
    const lastScrollYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollYRef.current;

            if (currentScrollY <= 12) {
                setIsMobileChromeVisible(true);
                lastScrollYRef.current = currentScrollY;
                return;
            }

            if (scrollDelta > 8) {
                setIsMobileChromeVisible(false);
            } else if (scrollDelta < -8) {
                setIsMobileChromeVisible(true);
            }

            lastScrollYRef.current = currentScrollY;
        };

        lastScrollYRef.current = window.scrollY;
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isHidden) return;

        setIsMobileMenuOpen(false);
    }, [isHidden]);

    return (
        <>
            <div
                className={cn(
                    "pointer-events-none fixed inset-x-0 top-0 z-[70] px-4 transition-all duration-300 ease-out sm:hidden",
                    !isHidden && isMobileChromeVisible
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-[140%] opacity-0"
                )}
                style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.5rem)" }}
            >
                <div className="mx-auto flex max-w-6xl items-start justify-between gap-3">
                    <div className="pointer-events-auto">
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                            className="size-10 rounded-full border border-[#ead0d4] bg-white/82 text-[#4d3b3f] backdrop-blur-md hover:bg-white hover:text-[#994d59]"
                            aria-label="Open navigation menu"
                            onClick={() => {
                                setIsMobileChromeVisible(true);
                                setIsMobileMenuOpen(true);
                            }}
                        >
                            <MenuIcon className="size-4" />
                        </Button>
                    </div>

                    <div className="pointer-events-auto">
                        <NativeSelect
                            aria-label="Select language"
                            size="sm"
                            value={language}
                            onChange={(event) => onLanguageChange(event.target.value as LandingLanguage)}
                            className="w-[84px] [&_[data-slot=native-select]]:h-10 [&_[data-slot=native-select]]:rounded-full [&_[data-slot=native-select]]:border-[#ead0d4] [&_[data-slot=native-select]]:bg-white/82 [&_[data-slot=native-select]]:pr-8 [&_[data-slot=native-select]]:pl-3 [&_[data-slot=native-select]]:text-[#4d3b3f] [&_[data-slot=native-select]]:shadow-none [&_[data-slot=native-select-icon]]:text-[#6b5a5e]"
                        >
                            {landingLanguages.map((languageOption) => (
                                <NativeSelectOption key={languageOption.code} value={languageOption.code}>
                                    {languageOption.label}
                                </NativeSelectOption>
                            ))}
                        </NativeSelect>
                    </div>
                </div>
            </div>

            <header
                className={cn(
                    "hidden sticky top-0 z-[70] border-b border-white/50 bg-white/45 backdrop-blur-md transition-opacity duration-200 sm:block",
                    isHidden && "pointer-events-none opacity-0"
                )}
            >
                <nav className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="hidden grid-cols-[1fr_auto_1fr] items-center gap-4 sm:grid sm:min-h-12">
                        <a href="#home" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {brand}
                        </a>

                        <div className="flex items-center gap-1 justify-self-center rounded-full border border-[#ead0d4]/70 bg-white/45 p-1 sm:shadow-sm">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "xs" }),
                                        "rounded-full px-3 text-xs uppercase text-[#4d3b3f] hover:bg-white/65 hover:text-[#994d59] sm:hover:shadow-sm"
                                    )}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 justify-self-end">
                            <div className="rounded-full border border-[#ead0d4]/70 bg-white/45 p-1 sm:shadow-sm">
                                <div className="relative grid grid-cols-4">
                                    <span
                                        className="absolute inset-y-0 left-0 rounded-full bg-white/65 transition-transform duration-500 ease-out sm:shadow-sm"
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
                                                <span className={cn(languageOption.flagClassName, "rounded-sm sm:shadow-xs")} />
                                            ) : (
                                                <span className="h-3 w-4 rounded-sm bg-[#D9D2D2] sm:shadow-xs" aria-hidden="true" />
                                            )}
                                            <span>{languageOption.label}</span>
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {isAdminView && hasPendingAdminChanges ? (
                                <Button
                                    type="button"
                                    className="rounded-full bg-[#2f7d5b] px-4 text-white sm:shadow-sm hover:bg-[#256548] hover:text-white"
                                >
                                    Save
                                </Button>
                            ) : null}

                            {isAdminView ? (
                                <SignOutButton />
                            ) : null}
                        </div>
                    </div>
                </nav>
            </header>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetContent
                    side="left"
                    className="!shadow-none z-[75] w-[82vw] max-w-[320px] border-r border-[#ead0d4] bg-white/82 p-0 backdrop-blur-md sm:!shadow-lg"
                >
                    <SheetHeader className="border-b border-[#ead0d4] px-4 py-4">
                        <SheetTitle className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            {brand}
                        </SheetTitle>
                    </SheetHeader>

                    <div className="flex flex-1 flex-col px-3 py-4">
                        <div className="grid gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost" }),
                                        "justify-start rounded-md px-3 text-sm text-[#2c2426] hover:bg-white/65 hover:text-[#994d59]"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        {isAdminView ? (
                            <div className="mt-auto flex flex-col gap-3 border-t border-[#ead0d4] px-1 pt-4">
                                {hasPendingAdminChanges ? (
                                    <Button
                                        type="button"
                                        className="w-full rounded-md bg-[#2f7d5b] text-white hover:bg-[#256548] hover:text-white"
                                    >
                                        Save
                                    </Button>
                                ) : null}
                                <SignOutButton className="w-full rounded-md" />
                            </div>
                        ) : null}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
