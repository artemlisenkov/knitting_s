"use client"

import Image from "next/image";

export const LandingPageContents = () => {
    const navItems = [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Catalog", href: "#catalog" },
        { label: "Delivery", href: "#delivery" },
        { label: "Contact", href: "#contacts" },
    ];

    const languages = [
        { code: "en", label: "EN", flag: "GB" },
        { code: "pl", label: "PL", flag: "PL" },
        { code: "ru", label: "RU", flag: "RU" },
    ];

    return (
        <div className="min-h-screen bg-[#f8eef0] text-[#2f2a2a]">
            <header className="sticky top-0 z-20 border-b border-white/50 bg-white/45 backdrop-blur-md">
                <nav className="mx-auto flex min-h-12 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
                    <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                        Maison
                    </a>

                    <div className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/35 p-1 sm:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="rounded-md px-3 py-1.5 text-xs font-medium uppercase text-[#4d3b3f] transition-colors hover:bg-white/70"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-1 rounded-full border border-white/60 bg-white/35 p-1">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                type="button"
                                className="flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold text-[#4d3b3f] transition-colors hover:bg-white/70"
                                aria-label={`Switch language to ${language.label}`}
                            >
                                <span className="grid size-5 place-items-center rounded-full border border-[#d9a0a8] bg-white text-[9px]">
                                    {language.flag}
                                </span>
                                <span>{language.label}</span>
                            </button>
                        ))}
                    </div>
                </nav>
            </header>

            <main>
                <section id="hero" className="mx-auto grid min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:py-14">
                    <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b05b66]">
                            Vintage shop and styling
                        </p>

                        <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#2c2426] sm:text-5xl lg:text-6xl">
                            Your main headline goes here
                        </h1>

                        <div className="my-7 h-px w-24 bg-[#d88c98]" />

                        <p className="max-w-xl text-base leading-7 text-[#5f5154] sm:text-lg">
                            Add your main landing page copy here: a short brand story,
                            offer, or introduction. This area is built for a few lines of
                            text and stays readable next to the photo.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <a
                                href="#catalog"
                                className="rounded-md bg-[#b05b66] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#994d59]"
                            >
                                View catalog
                            </a>
                            <a
                                href="#about"
                                className="rounded-md border border-[#d9a0a8] bg-white/45 px-5 py-3 text-sm font-semibold text-[#6c3f46] transition-colors hover:bg-white/75"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="ml-auto max-w-md border border-[#d78d98] bg-[#f1b8c1] p-3 shadow-[12px_12px_0_rgba(176,91,102,0.2)]">
                            <div className="relative aspect-[4/5] overflow-hidden bg-white">
                                <Image
                                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
                                    alt="Lookbook"
                                    fill
                                    sizes="(min-width: 1024px) 420px, 100vw"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about" className="border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            About
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            Share the story behind the project
                        </h2>
                    </div>
                </section>

                <section id="catalog" className="px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            Catalog
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            A place for collections, categories, or products
                        </h2>
                    </div>
                </section>

                <section id="delivery" className="border-y border-[#ead0d4] bg-white/50 px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            Delivery
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            Shipping and payment details
                        </h2>
                    </div>
                </section>

                <section id="contacts" className="px-4 py-16 sm:px-6">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#994d59]">
                            Contact
                        </p>
                        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[#2c2426]">
                            Social links and contact details
                        </h2>
                    </div>
                </section>
            </main>
        </div>
    )
}
