import { PrincipalSection,PrincipalDiv,Title,ComponentContent,CaptionSection,H3,DivComponentContent,DivImg,TextDiv,TextTitle} from "./EnviosLandingCss"

const Envios=()=>{
    return(
        <div>

            <PrincipalSection>
                <PrincipalDiv>
                    
                        <Title>Nuestra política de envios</Title>
                  
                    <CaptionSection>
                        <H3>Es simple, envío gratis a todo el país.</H3>
                    </CaptionSection>
                </PrincipalDiv>
            </PrincipalSection>

            <ComponentContent>

           

                <DivComponentContent $position={true}>

                    <DivImg>
                        <img width="100" height="100" src="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-08-1.png" alt="Icono de Caja con colchón"/>
                    </DivImg>
                
                    <div>
                        
                        <TextTitle $isLeft={true}>Queremos compartir con vos los ahorros logisticos por hacer que entre un todo en una caja.</TextTitle>
                        
                        <TextDiv $isLeft={true} >Llegamos gratis a casi todo el país.</TextDiv>
                        
                    </div>

                    <DivImg/>

                </DivComponentContent>

                <DivComponentContent $position={false}>

                    <DivImg/>
                    <div>
                        <TextTitle $isLeft={false}>Entregas en menos de 24hs en el AMBA</TextTitle>

                        <TextDiv $isLeft={false}>Podes selccionar entre 2 rangos de entregas (9:00 a 14:00 o 13:00 a 19:00) y si compras antes de las 12:00hs podes recibir el mismo día.</TextDiv>
                        <TextDiv $isLeft={false}>
                            El envío en 24hs está sujeto a la  disponibilidad de stock y a la zona del AMBA en la que te encuentres. Calcula el tiempo de envío en la página del producto que quieras comprar para confirmar la fecha de entrega.
                        </TextDiv>
                    </div>
    
                    <DivImg>
                        <img src="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-18-1-1-e1615776944995.png" alt="Icono de camioneta calm"/>
                    </DivImg>
                </DivComponentContent>
           
                <DivComponentContent $position={true}>
                    <DivImg>
                        <img width="100" height="100" src="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-10.png" alt="Icono de casa"/>
                    </DivImg>
                    <div>
                        <TextTitle $isLeft={true}>Entregamos gratis en todo el pais</TextTitle>
                        <TextDiv $isLeft={true}>
                            Somos una empresa de argentinos para argentinos, por eso elegimos los mejores proveedores logísticos de cada zona para poder dar la mejor propuesta en cada rincón.
                        
                        </TextDiv>
                        <TextDiv $isLeft={true}>
                            Aún no hacemos envíos a Tierra del Fuego, pero estamos trabajando para llegar pronto.
                            
                        </TextDiv>
                    </div>
                    <DivImg/>
                </DivComponentContent>

                <DivComponentContent $position={false}>

                    <DivImg/>
                    <div>
                        <TextTitle $isLeft={false}>El envío gratis aplica para todos los productos</TextTitle>
                        <TextDiv $isLeft={false}>
                            En el caso de las almohadas es comprando a partir de 2 unidades.
                        </TextDiv>
                    </div>
                    <DivImg>
                        <img width="100" height="100" src="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-12-e1585764278939.png" alt="Icono de cada"/>
                    </DivImg>
                    
                </DivComponentContent>
         
                <DivComponentContent $position={true}>

                    <DivImg>
                        <img width="100" height="100" src="https://calmessimple.com.ar/wp-content/uploads/2019/10/Iconos-13-1.png" alt="Icono devolución de producto"/>
                    </DivImg>
                
                    <div>
                        
                        <TextTitle $isLeft={true}>
                         En caso de que no ames tu nuevo Calm, no te cobramos el envío devuelta.
                        </TextTitle>
                        
                        <TextDiv $isLeft={true} >
                            Proba cualquier producto de Calm por 30 noches. Si no te gusta, lo devolves y te reembolsamos cada centavo.Así de simple como lo lees.        
                        </TextDiv>
                        
                    </div>

                    <DivImg/>

                </DivComponentContent>
            </ComponentContent>
            
        </div>
    )
}
export default Envios