import { productURLRedirectionByURL } from "@/utils/productURLById";
import FooterColumn from "./FooterColumn";
import Newsletter from "./NewsLetter/NewsLetter";
const FooterMobile = () => {
    return (
        <>  
            <Newsletter/>
            <div className="twoColumns">
                    <FooterColumn
                        title={'productos'}
                        items={[
                            {headerHref: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/colchones/', header: 'COLCHONES', links:[
                                {text:'colchón calm', href: productURLRedirectionByURL("334")},
                                {text:'colchón bb', href: productURLRedirectionByURL("1835498")},
                                {text:'colchón para perros', href: productURLRedirectionByURL("1835538")}
                            ]},
                            {headerHref: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/bases/', header:'BASES', links:[
                                {text:'base de cama calm', href: productURLRedirectionByURL("339")},
                                {text:'sommier calm', href: productURLRedirectionByURL("1993786")}
                            ]},
                            {headerHref: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/almohadas/', header:'ALMOHADAS', links:[
                                    {text:'alta almohada', href: productURLRedirectionByURL("1855350")},
                                    {text:'almohada doble sensación', href: productURLRedirectionByURL("1831947")},
                                    {text:'almohada infinita', href: productURLRedirectionByURL("724708")},
                                    {text:'almohada inteligente', href: productURLRedirectionByURL("537")}                    
                            ]}
                        ]}
                    />
                    <FooterColumn
                        title=''
                        items={[
                            {headerHref: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/ropa-de-cama/', header: 'ROPA DE CAMA', links:[
                                {text:'edredón abrazo', href: productURLRedirectionByURL("1851772")},
                                {text:'funda tusor 4 estaciones', href: productURLRedirectionByURL("1851405")},
                                {text:'sábanas algodon & frescura', href: productURLRedirectionByURL("1851178")},
                                {text:'sábanas suavidad', href: productURLRedirectionByURL("1835935")},
                                {text:'protector impermeable de colchón', href: productURLRedirectionByURL("1851789")}
                            ]},
                            {headerHref: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/producto/colchones-feria/', header:'FERIA CALM', links:[]},
                            {headerHref: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/producto/entrega-de-ensueno/', header:'entrega de ensueño', links:[]}    
                        ]}
                    />
                </div>
                <div className="twoColumns">
                    <FooterColumn
                        title={'nosotros'}
                        items={[
                            {links:[
                                {text:'¿qué es calm?', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/quienes-somos/'},
                                {text:'preguntas frecuentes', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/preguntas-frecuentes/'},
                                {text:'opiniones', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/opiniones-reales-de-clientes-reales/'},
                                {text:'blog', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/blog/'},                    
                                {text:'sumate', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/sumate/'},                    
                                {text:'compromiso', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/compromiso-descansados/'},                    
                                {text:'donde encontrarnos', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/localm/'},                    
                                {text:'rueda de la calma', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/rueda-de-la-calma/'}                    
                            ]}
                        ]}
                    />
                    <FooterColumn
                        title={'contacto'}
                        items={[
                            {links:[
                                {text:'tel: +5491151714371', href:"https://wa.me/5491151714371"},
                                {text:'hola@calmessimple.com.ar', href:"mailto:hola@calmessimple.com.ar"},
                                {text:'términos y condiciones', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/terminos-y-condiciones/'},
                                {text:'arrepentimiento de compra', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/cancelar-compra/'},
                                {text:'godoy cruz 1737, caba', href:"https://www.google.com/maps/place/Calm+es+simple/@-34.5874103,-58.43542,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcb59d58aacdfd:0x71f98f0b710a8bfe!8m2!3d-34.5874103!4d-58.4332313"},
                                {text:'santos dumont 3507, caba', href:"https://www.google.com/maps/place/Calm+es+simple/@-34.5834167,-58.4503761,17z/data=!4m6!3m5!1s0x95bcb5b6d532d689:0x51c26e4d59f2c83a!8m2!3d-34.5834211!4d-58.4478012!16s%2Fg%2F11kq2dklg1?entry=ttu"},                    
                                {text:'retirar mi compra en sucursal', href: process.env.NEXT_PUBLIC_REDIRECT_URL_BASE + '/pick-up/'},                    
                            ]}
                        ]}
                    />
                </div>
        </>
    )
}

export default FooterMobile;