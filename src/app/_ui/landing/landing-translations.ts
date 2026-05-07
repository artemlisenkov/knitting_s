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
    nav: Record<"welcome" | "aboutMe" | "catalog" | "palette" | "customOrder" | "measurements" | "contactDelivery", string>;
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
        items: Array<{
            title: string;
            description: string;
        }>;
    };
    catalog: {
        eyebrow: string;
        title: string;
        emptyText: string;
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
                            description: "A handmade crochet top with a clear black-and-white pattern.",
                            price: staticCatalogProductPrices["top-zebra"],
                            imageAlt: "Top Zebra photo",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "A warm-toned crochet top for easy summer outfits.",
                            price: staticCatalogProductPrices["top-browny"],
                            imageAlt: "Top Browny photo",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "A soft crochet top with a smooth color transition.",
                            price: staticCatalogProductPrices["top-gradient"],
                            imageAlt: "Top Gradient photo",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "A light crochet top with a delicate floral mood.",
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
                            description: "A soft crochet cardigan with an airy texture and an easy layered fit.",
                            price: staticCatalogProductPrices["cardigan-cloudy"],
                            imageAlt: "Cardigan Unisex photo",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "A crochet cardigan with a bold black-and-yellow sunflower pattern.",
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
            intro: "Write to me in direct messages through Instagram or Telegram, and we can discuss your piece, measurements, colors, and all the details.",
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
                            description: "Ręcznie szydełkowany top z wyrazistym czarno-białym wzorem.",
                            price: staticCatalogProductPrices["top-zebra"],
                            imageAlt: "Zdjęcie Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Szydełkowany top w ciepłych odcieniach do letnich stylizacji.",
                            price: staticCatalogProductPrices["top-browny"],
                            imageAlt: "Zdjęcie Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "Miękki szydełkowany top z płynnym przejściem kolorów.",
                            price: staticCatalogProductPrices["top-gradient"],
                            imageAlt: "Zdjęcie Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Lekki szydełkowany top z delikatnym kwiatowym nastrojem.",
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
                            description: "Miękki szydełkowany kardigan o lekkiej fakturze i swobodnej warstwowej formie.",
                            price: staticCatalogProductPrices["cardigan-cloudy"],
                            imageAlt: "Zdjęcie Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Szydełkowany kardigan z wyrazistym czarno-żółtym wzorem słoneczników.",
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
            intro: "Napisz do mnie w wiadomości prywatnej przez Instagram lub Telegram, a omówimy Twoją rzecz, wymiary, kolory i wszystkie szczegóły.",
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
                            description: "Топ гачком ручної роботи з виразним чорно-білим візерунком.",
                            price: staticCatalogProductPrices["top-zebra"],
                            imageAlt: "Фото Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Топ гачком у теплих відтінках для літніх образів.",
                            price: staticCatalogProductPrices["top-browny"],
                            imageAlt: "Фото Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "М'який топ гачком із плавним переходом кольорів.",
                            price: staticCatalogProductPrices["top-gradient"],
                            imageAlt: "Фото Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Легкий топ гачком із ніжним квітковим настроєм.",
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
                            description: "М'який кардиган гачком із легкою фактурою та зручною посадкою для шарів.",
                            price: staticCatalogProductPrices["cardigan-cloudy"],
                            imageAlt: "Фото Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Кардиган гачком із виразним чорно-жовтим візерунком соняшників.",
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
            intro: "Напишіть мені в приватні повідомлення через Instagram або Telegram, і ми обговоримо вашу річ, мірки, кольори та всі деталі.",
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
                            description: "Топ ручной работы крючком с выразительным черно-белым узором.",
                            price: staticCatalogProductPrices["top-zebra"],
                            imageAlt: "Фото Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Топ крючком в теплых оттенках для летних образов.",
                            price: staticCatalogProductPrices["top-browny"],
                            imageAlt: "Фото Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "Мягкий топ крючком с плавным переходом цвета.",
                            price: staticCatalogProductPrices["top-gradient"],
                            imageAlt: "Фото Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Легкий топ крючком с нежным цветочным настроением.",
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
                            description: "Мягкий кардиган крючком с воздушной фактурой и удобной посадкой для многослойных образов.",
                            price: staticCatalogProductPrices["cardigan-cloudy"],
                            imageAlt: "Фото Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Кардиган крючком с выразительным черно-желтым узором подсолнухов.",
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
            intro: "Напишите мне в личные сообщения через Instagram или Telegram, и мы обсудим вашу вещь, мерки, цвета и все детали.",
            instagramLabel: "Instagram",
            instagramHref: "https://www.instagram.com/ktrn._.mlnk/",
            telegramLabel: "Telegram",
            telegramHref: "https://t.me/ktrnmlnk",
        },
    },
} satisfies Record<LandingLanguage, LandingTranslation>;
