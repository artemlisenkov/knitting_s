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
    nav: Record<"aboutMe" | "catalog" | "palette" | "customOrder" | "delivery" | "contact", string>;
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
        groups: Array<{
            title: string;
            products: Array<{
                id: "cardigan-cloudy" | "top-zebra" | "top-gradient" | "top-flower" | "top-browny";
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
        colors: Array<{
            name: string;
            hex: string;
        }>;
    };
    delivery: {
        eyebrow: string;
        title: string;
    };
    contact: {
        eyebrow: string;
        title: string;
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
            delivery: "Delivery",
            contact: "Contact",
        },
        aboutMe: {
            eyebrow: "Handmade crochet clothing",
            title: "Soft crochet clothing made by hand",
            description:
                "I am Kate, and this is my calm place for handmade cardigans, scarves, tops, and cozy crochet clothing. I make every item by hand with attention to texture, comfort, and quiet detail.",
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
            groups: [
                {
                    title: "Cardigans",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Cloudy",
                            description: "A soft crochet cardigan with an airy texture and an easy layered fit.",
                            imageAlt: "Cardigan Cloudy photo",
                        },
                    ],
                },
                {
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
            intro: "Soft neutrals, warm natural tones, and brighter accents can be matched to your idea before I start making the order.",
            colors: [
                { name: "Milk", hex: "#f6eee6" },
                { name: "Powder", hex: "#e8b9c1" },
                { name: "Cloud blue", hex: "#b9c9d8" },
                { name: "Sage", hex: "#aebd9a" },
                { name: "Honey", hex: "#d8a657" },
                { name: "Cocoa", hex: "#8a6454" },
            ],
        },
        delivery: {
            eyebrow: "Delivery",
            title: "Shipping and payment details",
        },
        contact: {
            eyebrow: "Contact",
            title: "Social links and contact details",
        },
    },
    pl: {
        brand: "Crochet Makes",
        nav: {
            aboutMe: "O mnie",
            catalog: "Katalog",
            palette: "Paleta",
            customOrder: "Na zamówienie",
            delivery: "Dostawa",
            contact: "Kontakt",
        },
        aboutMe: {
            eyebrow: "Ręcznie szydełkowana odzież",
            title: "Miękka szydełkowana odzież tworzona ręcznie",
            description:
                "Mam na imię Kate i tworzę spokojne miejsce na ręcznie robione kardigany, szaliki, topy i przytulną szydełkowaną odzież. Każdy produkt robię ręcznie, dbając o fakturę, wygodę i subtelne detale.",
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
            groups: [
                {
                    title: "Kardigany",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Cloudy",
                            description: "Miękki szydełkowany kardigan o lekkiej fakturze i swobodnej warstwowej formie.",
                            imageAlt: "Zdjęcie Cardigan Cloudy",
                        },
                    ],
                },
                {
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
            intro: "Delikatne neutralne odcienie, ciepłe naturalne kolory i jaśniejsze akcenty mogę dopasować do Twojego pomysłu przed rozpoczęciem zamówienia.",
            colors: [
                { name: "Milk", hex: "#f6eee6" },
                { name: "Powder", hex: "#e8b9c1" },
                { name: "Cloud blue", hex: "#b9c9d8" },
                { name: "Sage", hex: "#aebd9a" },
                { name: "Honey", hex: "#d8a657" },
                { name: "Cocoa", hex: "#8a6454" },
            ],
        },
        delivery: {
            eyebrow: "Dostawa",
            title: "Szczegóły dostawy i płatności",
        },
        contact: {
            eyebrow: "Kontakt",
            title: "Linki społecznościowe i dane kontaktowe",
        },
    },
    uk: {
        brand: "Crochet Makes",
        nav: {
            aboutMe: "Про мене",
            catalog: "Каталог",
            palette: "Палітра",
            customOrder: "На замовлення",
            delivery: "Доставка",
            contact: "Контакти",
        },
        aboutMe: {
            eyebrow: "Одяг ручної роботи гачком",
            title: "М'який одяг гачком, створений вручну",
            description:
                "Мене звати Kate, і це мій спокійний простір для кардиганів, шарфів, топів і затишного одягу гачком ручної роботи. Кожну річ я створюю вручну, з увагою до фактури, комфорту й тихих деталей.",
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
            groups: [
                {
                    title: "Кардигани",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Cloudy",
                            description: "М'який кардиган гачком із легкою фактурою та зручною посадкою для шарів.",
                            imageAlt: "Фото Cardigan Cloudy",
                        },
                    ],
                },
                {
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
            intro: "М'які нейтральні відтінки, теплі природні кольори та яскравіші акценти можна підібрати під вашу ідею до початку замовлення.",
            colors: [
                { name: "Milk", hex: "#f6eee6" },
                { name: "Powder", hex: "#e8b9c1" },
                { name: "Cloud blue", hex: "#b9c9d8" },
                { name: "Sage", hex: "#aebd9a" },
                { name: "Honey", hex: "#d8a657" },
                { name: "Cocoa", hex: "#8a6454" },
            ],
        },
        delivery: {
            eyebrow: "Доставка",
            title: "Деталі доставки та оплати",
        },
        contact: {
            eyebrow: "Контакти",
            title: "Соціальні мережі та контактна інформація",
        },
    },
    ru: {
        brand: "Crochet Makes",
        nav: {
            aboutMe: "Обо мне",
            catalog: "Каталог",
            palette: "Палитра",
            customOrder: "На заказ",
            delivery: "Доставка",
            contact: "Контакты",
        },
        aboutMe: {
            eyebrow: "Одежда ручной работы крючком",
            title: "Мягкая одежда крючком, созданная вручную",
            description:
                "Меня зовут Kate, и это мое спокойное пространство для кардиганов, шарфов, топов и уютной одежды ручной работы крючком. Каждую вещь я создаю вручную, с вниманием к фактуре, комфорту и тихим деталям.",
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
            groups: [
                {
                    title: "Кардиганы",
                    products: [
                        {
                            id: "cardigan-cloudy",
                            title: "Cardigan Cloudy",
                            description: "Мягкий кардиган крючком с воздушной фактурой и удобной посадкой для многослойных образов.",
                            imageAlt: "Фото Cardigan Cloudy",
                        },
                    ],
                },
                {
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
            intro: "Мягкие нейтральные оттенки, теплые натуральные цвета и более яркие акценты можно подобрать под вашу идею до начала заказа.",
            colors: [
                { name: "Milk", hex: "#f6eee6" },
                { name: "Powder", hex: "#e8b9c1" },
                { name: "Cloud blue", hex: "#b9c9d8" },
                { name: "Sage", hex: "#aebd9a" },
                { name: "Honey", hex: "#d8a657" },
                { name: "Cocoa", hex: "#8a6454" },
            ],
        },
        delivery: {
            eyebrow: "Доставка",
            title: "Детали доставки и оплаты",
        },
        contact: {
            eyebrow: "Контакты",
            title: "Социальные сети и контактная информация",
        },
    },
} satisfies Record<LandingLanguage, LandingTranslation>;
