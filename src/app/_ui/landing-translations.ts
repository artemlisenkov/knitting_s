import {static_products} from "@/public/catalog/catalog.types";
import { babyCottonPaletteColors, type PaletteColor } from "@/src/app/_ui/palette-colors";

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
    nav: Record<"aboutMe" | "catalog" | "palette" | "customOrder" | "contactDelivery", string>;
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
        closing: string;
    };
    catalog: {
        eyebrow: string;
        title: string;
        emptyText: string;
        dynamicProductTitle: string;
        dynamicProductDescription: string;
        dynamicProductImageAlt: string;
        groups: Array<{
            id: "cardigans" | "tops";
            title: string;
            products: Array<{
                id: static_products;
                title: string;
                description: string;
                imageAlt: string;
            }>;
        }>;
    };
    palette: {
        eyebrow: string;
        title: string;
        intro: string;
        colors: PaletteColor[];
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

export const landingTranslations = {
    en: {
        brand: "Crochet Makes",
        nav: {
            aboutMe: "About me",
            catalog: "Catalog",
            palette: "Palette",
            customOrder: "Custom",
            contactDelivery: "Contact",
        },
        aboutMe: {
            eyebrow: "Your uniqueness starts here",
            title: "Crochet clothing with your fit, colors, and mood",
            description:
                "Each piece is made to feel considered, comfortable, and genuinely yours, with careful attention to texture, shape, and the small details that make it easy to wear.",
            primaryAction: "View catalog",
            secondaryAction: "Contact",
            imageAlt: "Kate photo",
        },
        customOrder: {
            eyebrow: "Made for you",
            title: "Looking for a unique crochet piece for summer?",
            intro: "You are in the right place. I create handmade crochet clothing around your measurements, style, and vision.",
            items: [
                {
                    title: "Your fit",
                    description: "Every piece is planned around your measurements, so it feels personal from the first fitting.",
                },
                {
                    title: "Your colors",
                    description: "Choose any color or color combination from my palette, or bring your own Pinterest inspiration.",
                },
                {
                    title: "One of a kind",
                    description: "Each order is handmade and customized, so no one else will have exactly the same thing.",
                },
                {
                    title: "Summer yarn",
                    description: "I use high-quality yarn: 60% cotton and 40% acrylic. It is soft, breathable, lightweight, hypoallergenic, and comfortable on hot days.",
                },
            ],
            closing: "More than clothing: made just for you.",
        },
        catalog: {
            eyebrow: "Catalog",
            title: "Handmade crochet clothing",
            emptyText: "New models are coming soon.",
            dynamicProductTitle: "New crochet model",
            dynamicProductDescription: "A new handmade piece added to the catalog.",
            dynamicProductImageAlt: "Crochet clothing photo",
            groups: [
                {
                    id: "cardigans",
                    title: "Cardigans",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Unisex",
                            description: "A soft crochet cardigan with an airy texture and an easy layered fit.",
                            imageAlt: "Cardigan Unisex photo",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "A crochet cardigan with a bold black-and-yellow sunflower pattern.",
                            imageAlt: "Cardigan Sunflower photo",
                        },
                    ],
                },
                {
                    id: "tops",
                    title: "Tops",
                    products: [
                        {
                            id: "top-zebra",
                            title: "Top Zebra",
                            description: "A handmade crochet top with a clear black-and-white pattern.",
                            imageAlt: "Top Zebra photo",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "A warm-toned crochet top for easy summer outfits.",
                            imageAlt: "Top Browny photo",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "A soft crochet top with a smooth color transition.",
                            imageAlt: "Top Gradient photo",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "A light crochet top with a delicate floral mood.",
                            imageAlt: "Top Flower photo",
                        },
                    ],
                },
            ],
        },
        palette: {
            eyebrow: "Color palette",
            title: "Choose the mood of your crochet piece",
            intro: "You can choose any colors and any color combinations for any piece, so the final crochet item matches exactly what you have in mind.",
            colors: babyCottonPaletteColors,
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
            aboutMe: "O mnie",
            catalog: "Katalog",
            palette: "Paleta",
            customOrder: "Na zamówienie",
            contactDelivery: "Kontakt",
        },
        aboutMe: {
            eyebrow: "Twoja wyjątkowość zaczyna się tutaj",
            title: "Szydełkowana odzież w Twoim kroju, kolorach i nastroju",
            description:
                "Każda rzecz powstaje tak, aby była przemyślana, wygodna i naprawdę Twoja, z uważnością na fakturę, formę oraz drobne detale, które sprawiają, że chce się ją nosić.",
            primaryAction: "Zobacz katalog",
            secondaryAction: "Kontakt",
            imageAlt: "Zdjęcie Kate",
        },
        customOrder: {
            eyebrow: "Tworzone dla Ciebie",
            title: "Szukasz wyjątkowej szydełkowanej rzeczy na lato?",
            intro: "Jesteś w dobrym miejscu. Tworzę ręcznie szydełkowaną odzież na podstawie Twoich wymiarów, stylu i pomysłu.",
            items: [
                {
                    title: "Twój krój",
                    description: "Każdy projekt dopasowuję do Twoich wymiarów, żeby od początku był naprawdę osobisty.",
                },
                {
                    title: "Twoje kolory",
                    description: "Możesz wybrać dowolny kolor lub połączenie kolorów z mojej palety albo wysłać inspirację z Pinteresta.",
                },
                {
                    title: "Jedyna taka rzecz",
                    description: "Każde zamówienie jest robione ręcznie i personalizowane, więc nikt nie będzie mieć dokładnie tego samego.",
                },
                {
                    title: "Letnia włóczka",
                    description: "Używam wysokiej jakości włóczki: 60% bawełny i 40% akrylu. Jest miękka, przewiewna, lekka, hipoalergiczna i wygodna nawet w upalne dni.",
                },
            ],
            closing: "To więcej niż ubranie: powstaje specjalnie dla Ciebie.",
        },
        catalog: {
            eyebrow: "Katalog",
            title: "Ręcznie szydełkowana odzież",
            emptyText: "Nowe modele pojawią się wkrótce.",
            dynamicProductTitle: "Nowy model szydełkowy",
            dynamicProductDescription: "Nowa ręcznie robiona rzecz dodana do katalogu.",
            dynamicProductImageAlt: "Zdjęcie szydełkowanej odzieży",
            groups: [
                {
                    id: "cardigans",
                    title: "Kardigany",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Unisex",
                            description: "Miękki szydełkowany kardigan o lekkiej fakturze i swobodnej warstwowej formie.",
                            imageAlt: "Zdjęcie Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Szydełkowany kardigan z wyrazistym czarno-żółtym wzorem słoneczników.",
                            imageAlt: "Zdjęcie Cardigan Sunflower",
                        },
                    ],
                },
                {
                    id: "tops",
                    title: "Topy",
                    products: [
                        {
                            id: "top-zebra",
                            title: "Top Zebra",
                            description: "Ręcznie szydełkowany top z wyrazistym czarno-białym wzorem.",
                            imageAlt: "Zdjęcie Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Szydełkowany top w ciepłych odcieniach do letnich stylizacji.",
                            imageAlt: "Zdjęcie Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "Miękki szydełkowany top z płynnym przejściem kolorów.",
                            imageAlt: "Zdjęcie Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Lekki szydełkowany top z delikatnym kwiatowym nastrojem.",
                            imageAlt: "Zdjęcie Top Flower",
                        },
                    ],
                },
            ],
        },
        palette: {
            eyebrow: "Paleta kolorów",
            title: "Wybierz nastrój swojej szydełkowanej rzeczy",
            intro: "Możesz wybrać dowolne kolory i dowolne ich połączenia do każdej rzeczy, tak aby gotowy szydełkowany projekt dokładnie odpowiadał Twojemu pomysłowi.",
            colors: babyCottonPaletteColors,
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
            aboutMe: "Про мене",
            catalog: "Каталог",
            palette: "Палітра",
            customOrder: "На замовлення",
            contactDelivery: "Контакти",
        },
        aboutMe: {
            eyebrow: "Твоя унікальність починається тут",
            title: "Одяг гачком у твоїй посадці, кольорах і настрої",
            description:
                "Кожна річ створюється так, щоб бути продуманою, комфортною й по-справжньому твоєю, з увагою до фактури, форми та маленьких деталей, які хочеться носити щодня.",
            primaryAction: "Переглянути каталог",
            secondaryAction: "Контакти",
            imageAlt: "Фото Kate",
        },
        customOrder: {
            eyebrow: "Створено для вас",
            title: "Шукаєте унікальну річ гачком для літа?",
            intro: "Ви в правильному місці. Я створюю одяг гачком вручну за вашими мірками, стилем і баченням.",
            items: [
                {
                    title: "Ваша посадка",
                    description: "Кожну річ я планую за вашими мірками, щоб вона відчувалася особистою вже з першої примірки.",
                },
                {
                    title: "Ваші кольори",
                    description: "Можна вибрати будь-який колір або поєднання з моєї палітри чи надіслати власне натхнення з Pinterest.",
                },
                {
                    title: "Єдина у своєму роді",
                    description: "Кожне замовлення створюється вручну й персоналізується, тому ніхто не матиме точно такої самої речі.",
                },
                {
                    title: "Літня пряжа",
                    description: "Я використовую якісну пряжу: 60% бавовни та 40% акрилу. Вона м'яка, дихаюча, легка, гіпоалергенна й комфортна навіть у спеку.",
                },
            ],
            closing: "Це більше, ніж одяг: це річ, створена саме для вас.",
        },
        catalog: {
            eyebrow: "Каталог",
            title: "Одяг ручної роботи гачком",
            emptyText: "Нові моделі скоро з'являться.",
            dynamicProductTitle: "Нова модель гачком",
            dynamicProductDescription: "Нова річ ручної роботи, додана до каталогу.",
            dynamicProductImageAlt: "Фото одягу гачком",
            groups: [
                {
                    id: "cardigans",
                    title: "Кардигани",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Unisex",
                            description: "М'який кардиган гачком із легкою фактурою та зручною посадкою для шарів.",
                            imageAlt: "Фото Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Кардиган гачком із виразним чорно-жовтим візерунком соняшників.",
                            imageAlt: "Фото Cardigan Sunflower",
                        },
                    ],
                },
                {
                    id: "tops",
                    title: "Топи",
                    products: [
                        {
                            id: "top-zebra",
                            title: "Top Zebra",
                            description: "Топ гачком ручної роботи з виразним чорно-білим візерунком.",
                            imageAlt: "Фото Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Топ гачком у теплих відтінках для літніх образів.",
                            imageAlt: "Фото Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "М'який топ гачком із плавним переходом кольорів.",
                            imageAlt: "Фото Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Легкий топ гачком із ніжним квітковим настроєм.",
                            imageAlt: "Фото Top Flower",
                        },
                    ],
                },
            ],
        },
        palette: {
            eyebrow: "Палітра кольорів",
            title: "Оберіть настрій своєї речі гачком",
            intro: "Ви можете обрати будь-які кольори та будь-які їх поєднання для будь-якої речі, щоб готовий виріб гачком точно відповідав вашій задумці.",
            colors: babyCottonPaletteColors,
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
            aboutMe: "Обо мне",
            catalog: "Каталог",
            palette: "Палитра",
            customOrder: "На заказ",
            contactDelivery: "Контакты",
        },
        aboutMe: {
            eyebrow: "Твоя уникальность начинается здесь",
            title: "Одежда крючком с твоей посадкой, цветами и настроением",
            description:
                "Каждая вещь создается так, чтобы быть продуманной, комфортной и по-настоящему твоей, с вниманием к фактуре, форме и маленьким деталям, которые хочется носить каждый день.",
            primaryAction: "Смотреть каталог",
            secondaryAction: "Контакты",
            imageAlt: "Фото Kate",
        },
        customOrder: {
            eyebrow: "Создано для вас",
            title: "Ищете уникальную вещь крючком на лето?",
            intro: "Вы в правильном месте. Я создаю одежду крючком вручную под ваши мерки, стиль и идею.",
            items: [
                {
                    title: "Ваша посадка",
                    description: "Каждая вещь продумывается под ваши мерки, чтобы она ощущалась личной уже с первой примерки.",
                },
                {
                    title: "Ваши цвета",
                    description: "Можно выбрать любой цвет или сочетание из моей палитры либо прислать свое вдохновение из Pinterest.",
                },
                {
                    title: "Единственная в своем роде",
                    description: "Каждый заказ создается вручную и персонализируется, поэтому ни у кого не будет точно такой же вещи.",
                },
                {
                    title: "Летняя пряжа",
                    description: "Я использую качественную пряжу: 60% хлопка и 40% акрила. Она мягкая, дышащая, легкая, гипоаллергенная и комфортная даже в жаркие дни.",
                },
            ],
            closing: "Это больше, чем одежда: вещь, созданная именно для вас.",
        },
        catalog: {
            eyebrow: "Каталог",
            title: "Одежда ручной работы крючком",
            emptyText: "Новые модели скоро появятся.",
            dynamicProductTitle: "Новая модель крючком",
            dynamicProductDescription: "Новая вещь ручной работы, добавленная в каталог.",
            dynamicProductImageAlt: "Фото одежды крючком",
            groups: [
                {
                    id: "cardigans",
                    title: "Кардиганы",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Unisex",
                            description: "Мягкий кардиган крючком с воздушной фактурой и удобной посадкой для многослойных образов.",
                            imageAlt: "Фото Cardigan Unisex",
                        },
                        {
                            id: "cardigan-sunflower",
                            title: "Cardigan Sunflower",
                            description: "Кардиган крючком с выразительным черно-желтым узором подсолнухов.",
                            imageAlt: "Фото Cardigan Sunflower",
                        },
                    ],
                },
                {
                    id: "tops",
                    title: "Топы",
                    products: [
                        {
                            id: "top-zebra",
                            title: "Top Zebra",
                            description: "Топ ручной работы крючком с выразительным черно-белым узором.",
                            imageAlt: "Фото Top Zebra",
                        },
                        {
                            id: "top-browny",
                            title: "Top Browny",
                            description: "Топ крючком в теплых оттенках для летних образов.",
                            imageAlt: "Фото Top Browny",
                        },
                        {
                            id: "top-gradient",
                            title: "Top Gradient",
                            description: "Мягкий топ крючком с плавным переходом цвета.",
                            imageAlt: "Фото Top Gradient",
                        },
                        {
                            id: "top-flower",
                            title: "Top Flower",
                            description: "Легкий топ крючком с нежным цветочным настроением.",
                            imageAlt: "Фото Top Flower",
                        },
                    ],
                },
            ],
        },
        palette: {
            eyebrow: "Палитра цветов",
            title: "Выберите настроение своей вещи крючком",
            intro: "Вы можете выбрать любые цвета и любые их сочетания для любой вещи, чтобы готовое изделие крючком точно соответствовало вашей задумке.",
            colors: babyCottonPaletteColors,
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
