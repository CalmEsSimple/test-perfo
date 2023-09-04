export const menuData = [
    {
        name: "Colchones",
        redirect: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/colchones",
        header: "COLCHONES CALM",
        items: [
            {
                name: "colchón híbrido",
                pillMessage: "nuevo lanzamiento",
                redirect: "/colchones/colchon-hibrido",
                isYellowPill: true,
                id: "2067781",
            },
            {
                name: "colchón original",
                pillMessage: "más vendido",
                redirect: "/colchones/colchon-calm",
                id: "334",
            },
            {
                name: "colchón bb",
                pillMessage: "",
                redirect: "/colchones/colchon-bb",
                id: "1835498",
            },
            {
                name: "colchón para perros",
                pillMessage: "",
                redirect: "/colchones/colchon-perro",
                id: "1835538",
            }
        ],
        seeMoreText: "ver todos los colchones →",
        selectedProducts: [
            {
                image_url: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/02bce307-d2e0-4fe3-f976-0fff3c1c4f00/fit=cover',
                name: 'colchón original  →',
                description:'El mejor puntuado de Argentina.',
                redirect: "/colchones/colchon-calm",
                id: "334",
            },
            {
                image_url: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/7b5aa4a1-2850-4ebe-c499-2e142b51a000/fit=cover',
                name: 'colchón híbrido →',
                description:'Lo mejor de dos mundos.',
                redirect: "/colchones/colchon-hibrido",
                id: "2067781",
            }
        ]
    },
    {
        name: "Bases y sommiers",
        header: "BASES CALM",
        redirect: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + "/bases",
        items: [
            {
                name: "base de hierro",
                pillMessage: "más vendido",
                redirect: "/bases/base",
                id: "339",
            },
            {
                name: "sommier calm",
                pillMessage: "nuevo",
                redirect: "/bases/sommier",
                id: "1993786",
            }
        ],
        seeMoreText: "ver todas las bases y sommiers →",
        selectedProducts: [
            {
                image_url: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/cf02b442-6f6d-43f4-3f99-619239616c00/fit=cover',
                name: 'base de hierro →',
                redirect: "/bases/base",
                id: "339",
            },
            {
                image_url: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/8664bdcb-11d4-4dba-fe16-d52aa5948d00/fit=cover',
                name: 'sommier calm →',
                redirect: "/bases/sommier",
                id: "1993786",
            }
        ]
    },
    {
        name: "Almohadas",
        header: "NUESTRAS ALMOHADAS",
        redirect: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE +  "/almohadas",
        items: [
            {
                name: "alta almohada",
                pillMessage: "",
                redirect: "/almohadas/alta-almohada",
                id: "1855350",
            },
            {
                name: "almohada doble sensación",
                pillMessage: "",
                redirect: "/almohadas/doble-sensacion",
                id: "1831947",
            },
            {
                name: "almohada infinita",
                pillMessage: "",
                redirect: "/almohadas/almohada-infinita",
                id: "724708",
            },
            {
                name: "almohada inteligente",
                pillMessage: "más vendido",
                redirect: "/almohadas/almohada-inteligente",
                id: "537",
            }
        ],
        seeMoreText: "ver todas las almohadas →",
        selectedProducts: [
            {
                image_url: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/dec473fc-90bc-4b82-a2e1-3f7762f90c00/fit=cover',
                name: 'almohada inteligente →',
                redirect: "/almohadas/almohada-inteligente",
                id: "537",
            },
            {
                image_url: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/ec8385e2-99f1-4771-408c-3877f07b3000/fit=cover',
                name: 'alta almohada →',
                redirect: "/almohadas/alta-almohada",
                id: "1855350",
            }
        ]
    },
    {
        name: "Ropa de cama",
        header: "NUESTRA ROPA DE CAMA",
        redirect: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE +  "/ropa-de-cama",
        items: [
            {
                name: "edredón abrazo",
                pillMessage: "",
                redirect: "/ropa-de-cama/edredon-abrazo",
                id: "1851772",
            },
            {
                name: "funda de tusor 4 estaciones",
                pillMessage: "",
                redirect: "/ropa-de-cama/funda-tusor",
                id: "1851405",
            },
            {
                name: "sábanas suavidad",
                pillMessage: "",
                redirect: "/ropa-de-cama/sabanas-suavidad",
                id: "1835935",
            },
            {
                name: "sábanas algodón & frescura",
                pillMessage: "",
                redirect: "/ropa-de-cama/sabanas-algodon",
                id: "1851178",
            },
            {
                name: "protector impermeable de colchón",
                pillMessage: "",
                redirect: "/ropa-de-cama/protector-impermeable",
                id: "1851789",
            }
        ],
        seeMoreText: "ver toda la ropa de cama →",
        selectedProducts: [
            {
                image_url: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/a4708d35-4df7-4a10-c3e8-3fdeb701d900/fit=cover',
                name: 'sábanas suavidad →',
                redirect: "/ropa-de-cama/sabanas-suavidad",
                id: "1835935",
            },
            {
                image_url: 'https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/c91f966d-42cb-4801-edab-b56bcd63fb00/fit=cover',
                name: 'edredón abrazo →',
                redirect: "/ropa-de-cama/edredon-abrazo",
                id: "1851772",
            }
        ]
    },
]

export const staticLandings = [
    {name:"Localm", redirect: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE +  "/localm"},
    {name:"Nosotrxs", redirect: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE +  "/quienes-somos"},
    {name:"Blog", redirect: "https://calmessimple.com.ar/blog/"},
]