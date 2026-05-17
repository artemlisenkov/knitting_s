import {static_products} from "@/public/catalog/catalog.types";

export type LandingLanguage = "pl" | "en" | "uk" | "ru";

export const landingLanguages: Array<{
    code: LandingLanguage;
    label: string;
    flagClassName: string;
}> = [
    { code: "pl", label: "PL", flagClassName: "fi fi-pl" },
    { code: "en", label: "EN", flagClassName: "fi fi-gb" },
    { code: "uk", label: "UA", flagClassName: "fi fi-ua" },
    { code: "ru", label: "RU", flagClassName: "" },
];

type LandingTranslation = {
    brand: string;
    nav: Record<"welcome" | "aboutMe" | "catalog" | "palette" | "customOrder" | "measurements" | "order" | "contactDelivery", string>;
    welcome: {
        eyebrow: string;
        title: string;
        description: string;
        productAction: string;
    };
    aboutMe: {
        eyebrow: string;
        title: string;
        description: string;
        primaryAction: string;
        secondaryAction: string;
        imageAlt: string;
    };
    customOrder: {
        eyebrow: string;
        title: string;
        intro: string;
        aiPreview: {
            title: string;
            intro: string;
            note: string;
            showAction: string;
            hideAction: string;
        };
        items: Array<{
            title: string;
            description: string;
        }>;
    };
    catalog: {
        eyebrow: string;
        title: string;
        emptyText: string;
        usedColorsLabel: string;
        dynamicProductTitle: string;
        dynamicProductDescription: string;
        dynamicProductImageAlt: string;
        kindLabels: Record<"cardigans" | "tops", string>;
        groups: Array<{
            id: "cardigans" | "tops";
            title: string;
            products: Array<{
                id: static_products;
                title: string;
                description: string;
                price: string;
                imageAlt: string;
            }>;
        }>;
    };
    palette: {
        eyebrow: string;
        title: string;
        intro: string;
        emptyText: string;
    };
    measurements: {
        title: string;
        imageAlt: string;
        items: Array<{
            title: string;
            description: string;
            hint: string;
        }>;
    };
    contactDelivery: {
        eyebrow: string;
        title: string;
        intro: string;
        instagramLabel: string;
        instagramHref: string;
        telegramLabel: string;
        telegramHref: string;
    };
};

const staticCatalogProductPrices: Record<static_products, string> = {
    "cardigan-cloudy": "250 pln",
    "cardigan-sunflower": "250 pln",
    "top-browny": "110 pln",
    "top-flower": "120 pln",
    "top-gradient": "100 pln",
    "top-zebra": "100 pln",
};

export const landingTranslations = {
    en: {
        brand: "Crochet Makes",
        nav: {
            welcome: "Welcome",
            aboutMe: "About",
            catalog: "Catalog",
            palette: "Palette",
            customOrder: "Custom",
            measurements: "Sizing",
            order: "Order",
            contactDelivery: "Contact",
        },
        welcome: {
            eyebrow: "Welcome",
            title: "Handmade crochet tops and cardigans",
            description: "A growing line of custom crochet pieces, made one by one in your colors and fit.",
            productAction: "Open piece",
        },
        aboutMe: {
            eyebrow: "About",
            title: "Crochet made for you",
            description:
                "Each piece is made to feel considered, comfortable, and genuinely yours, with careful attention to texture, shape, and the small details that make it easy to wear.",
            primaryAction: "View catalog",
            secondaryAction: "Contact",
            imageAlt: "Kate photo",
        },
        customOrder: {
            eyebrow: "Made for you",
            title: "Design your own crochet piece",
            intro: "You are in the right place. I create handmade crochet clothing around your measurements, style, and vision.",
            aiPreview: {
                title: "AI Color Preview",
                intro: "Not sure which colors to choose? With the help of AI, it is possible to preview how your crochet top or cardigan may look in different color combinations before the creation process begins.",
                note: "This makes it easier to choose the perfect palette and experiment with different shades, patterns, and aesthetics to find the option that feels truly yours.",
                showAction: "Show examples",
                hideAction: "Hide examples",
            },
            items: [
                {
                    title: "Materials",
                    description: "Soft summer yarn: 60% cotton, 40% acrylic.",
                },
                {
                    title: "Your fit",
                    description: "Made around your measurements.",
                },
                {
                    title: "Your colors",
                    description: "Choose any colors from my palette.",
                },
                {
                    title: "One of a kind",
                    description: "Each order is handmade and unique.",
                },
                {
                    title: "Pinterest ideas",
                    description: "Send Pinterest references and I will adapt them.",
                },
            ],
        },
        catalog: {
            eyebrow: "Catalog",
            title: "Handmade crochet clothing",
            emptyText: "New models are coming soon.",
            usedColorsLabel: "Colors used",
            dynamicProductTitle: "New crochet model",
            dynamicProductDescription: "A new handmade piece added to the catalog.",
            dynamicProductImageAlt: "Crochet clothing photo",
            kindLabels: {
                tops: "Top",
                cardigans: "Cardigan",
            },
            groups: [
                {
                    id: "tops",
                    title: "Tops",
                    products: [
                        {
                            id: "top-zebra",
                            title: "Top Zebra",
                            description: "Bold crochet top with a wave-inspired pattern in deep blue shades. Its striking design and flattering silhouette make it a standout piece in any outfit. Handmade from 60% cotton and 40% acrylic yarn. The fabric is lightweight, breathable, and comfortable against the skin, making it perfect for warm weather.",
                            price: staticCatalogProductPrices["top-zebra"],
                            imageAlt: "Top Zebra photo",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Minimalist crochet top in a warm chocolate shade with delicate pearl details. Light, feminine, and designed to beautifully accentuate the silhouette. Handmade from 60% cotton and 40% acrylic yarn. Thanks to the high cotton content, the top is breathable, soft on the skin, and comfortable even on warm days.",
                            price: staticCatalogProductPrices["top-browny"],
                            imageAlt: "Top Browny photo",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "Soft handmade top in delicate pink and white shades inspired by a sweet summer aesthetic. The lightweight crochet texture fits beautifully and flatters the silhouette. Made from 55% cotton and 45% acrylic yarn. The cotton keeps the top breathable and comfortable in warm weather, while the acrylic helps maintain its shape and softness.",
                            price: staticCatalogProductPrices["top-gradient"],
                            imageAlt: "Top Gradient photo",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Textured crochet top with a floral pattern in soft lavender shades. Every detail is handmade, creating a unique texture and a delicate romantic look. Made from 60% cotton and 40% acrylic yarn. The fabric is lightweight, breathable, and comfortable for summer wear, keeping you cool even on hot days.",
                            price: staticCatalogProductPrices["top-flower"],
                            imageAlt: "Top Flower photo",
                        },
                    ],
                },
                {
                    id: "cardigans",
                    title: "Cardigans",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Unisex",
                            description: "Unisex crochet cardigan in soft white and blue shades, designed for both women and men. Made from 60% cotton and 40% acrylic yarn. Thanks to its breathable crochet texture, the cardigan allows airflow and provides natural ventilation for extra comfort. Perfect for spring, summer, and early autumn.",
                            price: staticCatalogProductPrices["cardigan-cloudy"],
                            imageAlt: "Cardigan Unisex photo",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Cozy handmade cardigan with voluminous sunflowers, designed as a bright accent for any outfit. Made from 50% wool and 50% acrylic yarn, it feels warm and soft while keeping its shape beautifully. Perfect for autumn, winter, and cool spring days.",
                            price: staticCatalogProductPrices["cardigan-sunflower"],
                            imageAlt: "Cardigan Sunflower photo",
                        },
                    ],
                },
            ],
        },
        palette: {
            eyebrow: "Color palette",
            title: "Choose the mood of your crochet piece",
            intro: "You can choose any colors and any combinations for any piece, so the final crochet item matches what you have in mind.",
            emptyText: "More palette photos are coming soon.",
        },
        measurements: {
            title: "HOW TO MEASURE YOUR BODY",
            imageAlt: "Body measurements guide",
            items: [
                {
                    title: "BUST",
                    description: "Measure around the fullest part of your bust.",
                    hint: "Keep the measuring tape level and comfortably snug.",
                },
                {
                    title: "UNDERBUST",
                    description: "Measure directly under your bust, where the band of a bra usually sits.",
                    hint: "The tape should be straight and firm.",
                },
                {
                    title: "WAIST",
                    description: "Measure around the narrowest part of your waist.",
                    hint: "This is usually slightly above your belly button.",
                },
            ],
        },
        contactDelivery: {
            eyebrow: "Contact",
            title: "Let's discuss your order",
            intro: "Write to me in direct messages through Instagram or Telegram, and we can discuss your order, measurements, colors, and all the details.",
            instagramLabel: "Instagram",
            instagramHref: "https://www.instagram.com/ktrn._.mlnk/",
            telegramLabel: "Telegram",
            telegramHref: "https://t.me/ktrnmlnk",
        },
    },
    pl: {
        brand: "Crochet Makes",
        nav: {
            welcome: "Start",
            aboutMe: "O mnie",
            catalog: "Katalog",
            palette: "Paleta",
            customOrder: "Na zamówienie",
            measurements: "Miary",
            order: "Zamówienie",
            contactDelivery: "Kontakt",
        },
        welcome: {
            eyebrow: "Witaj",
            title: "Ręcznie szydełkowane topy i kardigany",
            description: "Rosnąca kolekcja szydełkowanych rzeczy, tworzonych jedna po drugiej w Twoich kolorach i dopasowaniu.",
            productAction: "Otwórz model",
        },
        aboutMe: {
            eyebrow: "O mnie",
            title: "Szydełkowane rzeczy dla Ciebie",
            description:
                "Każda rzecz powstaje tak, aby była przemyślana, wygodna i naprawdę Twoja, z uważnością na fakturę, formę oraz drobne detale, które sprawiają, że chce się ją nosić.",
            primaryAction: "Zobacz katalog",
            secondaryAction: "Kontakt",
            imageAlt: "Zdjęcie Kate",
        },
        customOrder: {
            eyebrow: "Tworzone dla Ciebie",
            title: "Stwórz swoją szydełkowaną rzecz",
            intro: "Jesteś w dobrym miejscu. Tworzę ręcznie szydełkowaną odzież na podstawie Twoich wymiarów, stylu i pomysłu.",
            aiPreview: {
                title: "AI Color Preview",
                intro: "Nie masz pewności, jakie kolory wybrać? Z pomocą AI można sprawdzić, jak szydełkowany top lub kardigan może wyglądać w różnych połączeniach kolorystycznych jeszcze przed rozpoczęciem tworzenia.",
                note: "Ułatwia to wybór idealnej palety i eksperymentowanie z różnymi odcieniami, wzorami oraz estetykami, aby znaleźć wersję, która naprawdę będzie Twoja.",
                showAction: "Pokaż podglądy",
                hideAction: "Ukryj podglądy",
            },
            items: [
                {
                    title: "Materiały",
                    description: "Miękka letnia włóczka: 60% bawełny, 40% akrylu.",
                },
                {
                    title: "Twój krój",
                    description: "Projekt dopasowany do Twoich wymiarów.",
                },
                {
                    title: "Twoje kolory",
                    description: "Wybierz dowolne kolory z mojej palety.",
                },
                {
                    title: "Jedyna taka rzecz",
                    description: "Każde zamówienie jest ręcznie robione i unikalne.",
                },
                {
                    title: "Pinterest",
                    description: "Wyślij inspiracje z Pinteresta, a dopasuję je.",
                },
            ],
        },
        catalog: {
            eyebrow: "Katalog",
            title: "Ręcznie szydełkowana odzież",
            emptyText: "Nowe modele pojawią się wkrótce.",
            usedColorsLabel: "Użyte kolory",
            dynamicProductTitle: "Nowy model szydełkowy",
            dynamicProductDescription: "Nowa ręcznie robiona rzecz dodana do katalogu.",
            dynamicProductImageAlt: "Zdjęcie szydełkowanej odzieży",
            kindLabels: {
                tops: "Top",
                cardigans: "Kardigan",
            },
            groups: [
                {
                    id: "tops",
                    title: "Topy",
                    products: [
                        {
                            id: "top-zebra",
                            title: "Top Zebra",
                            description: "Wyrazisty szydełkowany top z falistym wzorem w głębokich niebieskich odcieniach. Jego mocny design i kobieca sylwetka sprawiają, że jest akcentowym elementem stylizacji. Wykonany ręcznie z włóczki: 60% bawełna, 40% akryl. Materiał jest lekki, przewiewny i przyjemny dla skóry, dlatego świetnie sprawdza się w ciepłe dni.",
                            price: staticCatalogProductPrices["top-zebra"],
                            imageAlt: "Zdjęcie Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Minimalistyczny szydełkowany top w ciepłym czekoladowym odcieniu z delikatnymi perłowymi detalami. Lekki, kobiecy i zaprojektowany tak, aby pięknie podkreślać sylwetkę. Wykonany ręcznie z włóczki: 60% bawełna, 40% akryl. Dzięki wysokiej zawartości bawełny top oddycha, jest miękki dla skóry i wygodny nawet w ciepłe dni.",
                            price: staticCatalogProductPrices["top-browny"],
                            imageAlt: "Zdjęcie Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "Delikatny ręcznie wykonany top w różowo-białych odcieniach inspirowanych słodką letnią estetyką. Lekka szydełkowana faktura pięknie układa się na sylwetce i ją podkreśla. Wykonany z włóczki: 55% bawełna, 45% akryl. Bawełna zapewnia przewiewność i komfort w ciepłe dni, a akryl pomaga zachować kształt i miękkość.",
                            price: staticCatalogProductPrices["top-gradient"],
                            imageAlt: "Zdjęcie Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Fakturowany szydełkowany top z kwiatowym wzorem w delikatnych lawendowych odcieniach. Każdy detal jest wykonany ręcznie, tworząc wyjątkową teksturę i subtelny romantyczny charakter. Wykonany z włóczki: 60% bawełna, 40% akryl. Materiał jest lekki, przewiewny i wygodny na lato, pomagając zachować komfort nawet w upał.",
                            price: staticCatalogProductPrices["top-flower"],
                            imageAlt: "Zdjęcie Top Flower",
                        },
                    ],
                },
                {
                    id: "cardigans",
                    title: "Kardigany",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Unisex",
                            description: "Uniseksowy szydełkowany kardigan w biało-błękitnych odcieniach, zaprojektowany zarówno dla kobiet, jak i mężczyzn. Wykonany z włóczki: 60% bawełna, 40% akryl. Dzięki przewiewnej ażurowej strukturze zapewnia swobodny przepływ powietrza i naturalną wentylację, co daje komfort nawet w cieplejsze dni. Idealny na wiosnę, lato i wczesną jesień.",
                            price: staticCatalogProductPrices["cardigan-cloudy"],
                            imageAlt: "Zdjęcie Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Przytulny ręcznie robiony kardigan z przestrzennymi słonecznikami, który staje się mocnym akcentem każdej stylizacji. Dzięki składowi 50% wełny i 50% akrylu jest ciepły, miękki i jednocześnie dobrze trzyma formę. Idealny na jesień, zimę i chłodniejszą wiosnę.",
                            price: staticCatalogProductPrices["cardigan-sunflower"],
                            imageAlt: "Zdjęcie Cardigan Sunflower",
                        },
                    ],
                },
            ],
        },
        palette: {
            eyebrow: "Paleta kolorów",
            title: "Wybierz nastrój swojej szydełkowanej rzeczy",
            intro: "Możesz wybrać dowolne kolory i dowolne ich połączenia do każdej rzeczy, tak aby gotowy szydełkowany projekt dokładnie odpowiadał Twojemu pomysłowi.",
            emptyText: "Kolejne zdjęcia palet pojawią się wkrótce.",
        },
        measurements: {
            title: "JAK ZMIERZYĆ CIAŁO",
            imageAlt: "Przewodnik po mierzeniu ciała",
            items: [
                {
                    title: "BIUST",
                    description: "Zmierz obwód w najszerszym miejscu biustu.",
                    hint: "Taśma powinna być ułożona równo i przylegać komfortowo.",
                },
                {
                    title: "POD BIUSTEM",
                    description: "Zmierz bezpośrednio pod biustem, tam gdzie znajduje się pasek stanika.",
                    hint: "Taśma powinna być prosta i dobrze dopasowana.",
                },
                {
                    title: "TALIA",
                    description: "Zmierz obwód w najwęższym miejscu talii.",
                    hint: "Zwykle jest to nieco powyżej pępka.",
                },
            ],
        },
        contactDelivery: {
            eyebrow: "Kontakt",
            title: "Porozmawiajmy o Twoim zamówieniu",
            intro: "Napisz do mnie w wiadomości prywatnej przez Instagram lub Telegram, a omówimy Twoje zamówienie, wymiary, kolory i wszystkie szczegóły.",
            instagramLabel: "Instagram",
            instagramHref: "https://www.instagram.com/ktrn._.mlnk/",
            telegramLabel: "Telegram",
            telegramHref: "https://t.me/ktrnmlnk",
        },
    },
    uk: {
        brand: "Crochet Makes",
        nav: {
            welcome: "Головна",
            aboutMe: "Про мене",
            catalog: "Каталог",
            palette: "Палітра",
            customOrder: "На замовлення",
            measurements: "Розмір",
            order: "Замовлення",
            contactDelivery: "Контакти",
        },
        welcome: {
            eyebrow: "Вітаю",
            title: "Топи й кардигани ручної роботи гачком",
            description: "Невелика колекція речей гачком, які я створюю по одній у ваших кольорах і посадці.",
            productAction: "Відкрити модель",
        },
        aboutMe: {
            eyebrow: "Про мене",
            title: "Речі гачком для тебе",
            description:
                "Кожна річ створюється так, щоб бути продуманою, комфортною й по-справжньому твоєю, з увагою до фактури, форми та маленьких деталей, які хочеться носити щодня.",
            primaryAction: "Переглянути каталог",
            secondaryAction: "Контакти",
            imageAlt: "Фото Kate",
        },
        customOrder: {
            eyebrow: "Створено для вас",
            title: "Створи власну річ гачком",
            intro: "Ви в правильному місці. Я створюю одяг гачком вручну за вашими мірками, стилем і баченням.",
            aiPreview: {
                title: "AI Color Preview",
                intro: "Не впевнені, які кольори обрати? За допомогою AI можна попередньо побачити, як ваш топ або кардиган гачком може виглядати в різних поєднаннях кольорів ще до початку створення.",
                note: "Це допомагає легше обрати ідеальну палітру та експериментувати з різними відтінками, візерунками й естетикою, щоб знайти варіант, який справді відчувається вашим.",
                showAction: "Показати прев’ю",
                hideAction: "Сховати прев’ю",
            },
            items: [
                {
                    title: "Матеріали",
                    description: "М'яка літня пряжа: 60% бавовни, 40% акрилу.",
                },
                {
                    title: "Ваша посадка",
                    description: "Річ створюється за вашими мірками.",
                },
                {
                    title: "Ваші кольори",
                    description: "Оберіть будь-які кольори з моєї палітри.",
                },
                {
                    title: "Єдина у своєму роді",
                    description: "Кожне замовлення ручне й унікальне.",
                },
                {
                    title: "Pinterest",
                    description: "Надішліть референси з Pinterest, і я адаптую їх.",
                },
            ],
        },
        catalog: {
            eyebrow: "Каталог",
            title: "Одяг ручної роботи гачком",
            emptyText: "Нові моделі скоро з'являться.",
            usedColorsLabel: "Використані кольори",
            dynamicProductTitle: "Нова модель гачком",
            dynamicProductDescription: "Нова річ ручної роботи, додана до каталогу.",
            dynamicProductImageAlt: "Фото одягу гачком",
            kindLabels: {
                tops: "Топ",
                cardigans: "Кардиган",
            },
            groups: [
                {
                    id: "tops",
                    title: "Топи",
                    products: [
                        {
                            id: "top-zebra",
                            title: "Top Zebra",
                            description: "Виразний топ гачком із хвилястим візерунком у глибоких синіх відтінках. Його акцентний дизайн і силует, що пасує фігурі, роблять цю річ помітною в будь-якому образі. Виготовлений вручну з пряжі: 60% бавовна, 40% акрил. Матеріал легкий, дихаючий і приємний до тіла, тому ідеально підходить для теплої погоди.",
                            price: staticCatalogProductPrices["top-zebra"],
                            imageAlt: "Фото Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Мінімалістичний топ гачком у теплому шоколадному відтінку з делікатними перлинними деталями. Легкий, жіночний і створений так, щоб красиво підкреслювати силует. Виготовлений вручну з пряжі: 60% бавовна, 40% акрил. Завдяки високому вмісту бавовни топ дихає, м’який до шкіри та комфортний навіть у теплі дні.",
                            price: staticCatalogProductPrices["top-browny"],
                            imageAlt: "Фото Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "Ніжний handmade топ у рожево-білих відтінках із легким літнім настроєм. Легка фактура гачком красиво сідає по фігурі та підкреслює силует. Виготовлений із пряжі: 55% бавовна, 45% акрил. Бавовна забезпечує повітропроникність і комфорт у теплу погоду, а акрил допомагає зберігати форму та м’якість.",
                            price: staticCatalogProductPrices["top-gradient"],
                            imageAlt: "Фото Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Фактурний топ гачком із квітковим візерунком у м’яких лавандових відтінках. Кожна деталь виконана вручну, створюючи унікальну текстуру й ніжний романтичний образ. Виготовлений із пряжі: 60% бавовна, 40% акрил. Матеріал легкий, дихаючий і комфортний для літа, тож у ньому зручно навіть у спекотні дні.",
                            price: staticCatalogProductPrices["top-flower"],
                            imageAlt: "Фото Top Flower",
                        },
                    ],
                },
                {
                    id: "cardigans",
                    title: "Кардигани",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Unisex",
                            description: "Унісекс кардиган гачком у м’яких біло-блакитних відтінках, створений як для жінок, так і для чоловіків. Виготовлений із пряжі: 60% бавовна, 40% акрил. Завдяки дихаючій ажурній фактурі кардиган добре пропускає повітря та забезпечує природну вентиляцію для більшого комфорту. Ідеальний для весни, літа та ранньої осені.",
                            price: staticCatalogProductPrices["cardigan-cloudy"],
                            imageAlt: "Фото Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Затишний handmade кардиган з об’ємними соняшниками — яскравий акцент для будь-якого образу. Завдяки складу 50% вовни та 50% акрилу кардиган теплий, м’який і водночас добре тримає форму. Підійде для осені, зими та прохолодної весни.",
                            price: staticCatalogProductPrices["cardigan-sunflower"],
                            imageAlt: "Фото Cardigan Sunflower",
                        },
                    ],
                },
            ],
        },
        palette: {
            eyebrow: "Палітра кольорів",
            title: "Оберіть настрій своєї речі гачком",
            intro: "Ви можете обрати будь-які кольори та будь-які їх поєднання для будь-якої речі, щоб готовий виріб гачком точно відповідав вашій задумці.",
            emptyText: "Інші фото палітр з’являться незабаром.",
        },
        measurements: {
            title: "ЯК ЗНЯТИ МІРКИ З ТІЛА",
            imageAlt: "Пояснення як зняти мірки з тіла",
            items: [
                {
                    title: "ОБХВАТ ГРУДЕЙ",
                    description: "Виміряйте по найширшій частині грудей.",
                    hint: "Сантиметр має бути рівно розташований і щільно прилягати.",
                },
                {
                    title: "ПІД ГРУДЬМИ",
                    description: "Виміряйте безпосередньо під грудьми, там де проходить пояс бюстгальтера.",
                    hint: "Стрічка має бути рівною та добре прилягати.",
                },
                {
                    title: "ТАЛІЯ",
                    description: "Виміряйте обхват у найвужчій частині талії.",
                    hint: "Зазвичай це трохи вище пупка.",
                },
            ],
        },
        contactDelivery: {
            eyebrow: "Контакти",
            title: "Давайте обговоримо ваше замовлення",
            intro: "Напишіть мені в приватні повідомлення через Instagram або Telegram, і ми обговоримо ваше замовлення, мірки, кольори та всі деталі.",
            instagramLabel: "Instagram",
            instagramHref: "https://www.instagram.com/ktrn._.mlnk/",
            telegramLabel: "Telegram",
            telegramHref: "https://t.me/ktrnmlnk",
        },
    },
    ru: {
        brand: "Crochet Makes",
        nav: {
            welcome: "Главная",
            aboutMe: "Обо мне",
            catalog: "Каталог",
            palette: "Палитра",
            customOrder: "На заказ",
            measurements: "Размер",
            order: "Заказ",
            contactDelivery: "Контакты",
        },
        welcome: {
            eyebrow: "Добро пожаловать",
            title: "Топы и кардиганы ручной работы крючком",
            description: "Небольшая коллекция вещей крючком, которые я создаю по одной в ваших цветах и посадке.",
            productAction: "Открыть модель",
        },
        aboutMe: {
            eyebrow: "Обо мне",
            title: "Вещи крючком для тебя",
            description:
                "Каждая вещь создается так, чтобы быть продуманной, комфортной и по-настоящему твоей, с вниманием к фактуре, форме и маленьким деталям, которые хочется носить каждый день.",
            primaryAction: "Смотреть каталог",
            secondaryAction: "Контакты",
            imageAlt: "Фото Kate",
        },
        customOrder: {
            eyebrow: "Создано для вас",
            title: "Создай свою вещь крючком",
            intro: "Вы в правильном месте. Я создаю одежду крючком вручную под ваши мерки, стиль и идею.",
            aiPreview: {
                title: "AI Color Preview",
                intro: "Не уверены, какие цвета выбрать? С помощью AI можно заранее посмотреть, как ваш вязаный топ или кардиган может выглядеть в разных цветовых сочетаниях ещё до начала создания.",
                note: "Это упрощает выбор идеальной палитры и помогает экспериментировать с разными оттенками, узорами и эстетикой, чтобы найти вариант, который действительно ощущается вашим.",
                showAction: "Показать превью",
                hideAction: "Скрыть превью",
            },
            items: [
                {
                    title: "Материалы",
                    description: "Мягкая летняя пряжа: 60% хлопка, 40% акрила.",
                },
                {
                    title: "Ваша посадка",
                    description: "Вещь создается по вашим меркам.",
                },
                {
                    title: "Ваши цвета",
                    description: "Выберите любые цвета из моей палитры.",
                },
                {
                    title: "Единственная в своем роде",
                    description: "Каждый заказ ручной работы и уникален.",
                },
                {
                    title: "Pinterest",
                    description: "Пришлите референсы из Pinterest, и я адаптирую их.",
                },
            ],
        },
        catalog: {
            eyebrow: "Каталог",
            title: "Одежда ручной работы крючком",
            emptyText: "Новые модели скоро появятся.",
            usedColorsLabel: "Использованные цвета",
            dynamicProductTitle: "Новая модель крючком",
            dynamicProductDescription: "Новая вещь ручной работы, добавленная в каталог.",
            dynamicProductImageAlt: "Фото одежды крючком",
            kindLabels: {
                tops: "Топ",
                cardigans: "Кардиган",
            },
            groups: [
                {
                    id: "tops",
                    title: "Топы",
                    products: [
                        {
                            id: "top-zebra",
                            title: "Top Zebra",
                            description: "Контрастный вязаный топ с волнообразным узором в глубоких синих оттенках. Стильный силуэт и графичный дизайн делают его акцентной вещью в образе. Связан из пряжи: 60% хлопок, 40% акрил. Материал лёгкий, дышащий и приятный к телу, поэтому топ отлично подходит для лета и тёплой погоды.",
                            price: staticCatalogProductPrices["top-zebra"],
                            imageAlt: "Фото Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Минималистичный вязаный топ в оттенке тёплого шоколада с нежными жемчужными деталями. Лёгкий, женственный и красиво подчёркивает силуэт. Связан вручную из пряжи: 60% хлопок, 40% акрил. Благодаря высокому содержанию хлопка топ дышит, приятно ощущается на коже и в нём не жарко даже в тёплую погоду.",
                            price: staticCatalogProductPrices["top-browny"],
                            imageAlt: "Фото Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "Нежный handmade топ в розово-белых оттенках с лёгким летним настроением. Мягкая вязка красиво садится по фигуре и подчёркивает силуэт. Изготовлен из пряжи: 55% хлопок, 45% акрил. Благодаря хлопку материал дышит и не перегревает тело, а акрил помогает сохранять форму и мягкость.",
                            price: staticCatalogProductPrices["top-gradient"],
                            imageAlt: "Фото Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Объёмный вязаный топ с цветочным узором в лавандовых оттенках. Каждая деталь связана вручную, создавая красивую текстуру и нежный образ. Состав пряжи: 60% хлопок, 40% акрил. Материал лёгкий, дышащий и комфортный для лета. Топ хорошо пропускает воздух и остаётся удобным даже в жаркие дни.",
                            price: staticCatalogProductPrices["top-flower"],
                            imageAlt: "Фото Top Flower",
                        },
                    ],
                },
                {
                    id: "cardigans",
                    title: "Кардиганы",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Unisex",
                            description: "Унисекс вязаный кардиган в бело-голубых оттенках, подходящий как для женщин, так и для мужчин. Состав: 60% хлопок, 40% акрил. Благодаря особенной ажурной вязке кардиган хорошо пропускает воздух, создавая естественную вентиляцию и комфорт даже в тёплую погоду. Идеально подходит для весны, лета и ранней осени.",
                            price: staticCatalogProductPrices["cardigan-cloudy"],
                            imageAlt: "Фото Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Уютный handmade кардиган с объёмными подсолнухами — яркий акцент для любого образа. Благодаря составу из 50% шерсти и 50% акрила, кардиган тёплый, мягкий и при этом хорошо держит форму. Подходит для осени, зимы и прохладной весны.",
                            price: staticCatalogProductPrices["cardigan-sunflower"],
                            imageAlt: "Фото Cardigan Sunflower",
                        },
                    ],
                },
            ],
        },
        palette: {
            eyebrow: "Палитра цветов",
            title: "Выберите настроение своей вещи крючком",
            intro: "Вы можете выбрать любые цвета и любые их сочетания для любой вещи, чтобы готовое изделие крючком точно соответствовало вашей задумке.",
            emptyText: "Другие фото палитр появятся скоро.",
        },
        measurements: {
            title: "КАК СНЯТЬ МЕРКИ",
            imageAlt: "Инструкция по снятию мерок",
            items: [
                {
                    title: "ГРУДЬ",
                    description: "Измерьте по самой выступающей части груди.",
                    hint: "Сантиметровая лента должна проходить ровно и плотно прилегать, но не сдавливать.",
                },
                {
                    title: "ПОД ГРУДЬЮ",
                    description: "Измерьте непосредственно под грудью, там где проходит пояс бюстгальтера.",
                    hint: "Лента должна быть ровной и хорошо прилегать.",
                },
                {
                    title: "ТАЛИЯ",
                    description: "Измерьте по самой узкой части талии.",
                    hint: "Обычно она находится немного выше пупка.",
                },
            ],
        },
        contactDelivery: {
            eyebrow: "Контакты",
            title: "Давайте обсудим ваш заказ",
            intro: "Напишите мне в личные сообщения через Instagram или Telegram, и мы обсудим ваш заказ, мерки, цвета и все детали.",
            instagramLabel: "Instagram",
            instagramHref: "https://www.instagram.com/ktrn._.mlnk/",
            telegramLabel: "Telegram",
            telegramHref: "https://t.me/ktrnmlnk",
        },
    },
} satisfies Record<LandingLanguage, LandingTranslation>;
