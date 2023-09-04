import { PrimerSection,PrimerDiv,PrimerTitle, PrimerCaption ,PasoAPaso} from "./30NochesLandingCss"

export const NochesLanding=()=>{
    return(
        <div>
            <PrimerSection>
                <div>
                    <PrimerDiv>
                        <PrimerTitle>Cómo funcionan las 30 noches de prueba</PrimerTitle>
                    </PrimerDiv>

                    <PrimerCaption>Probá cualquier producto de calm por 30 noches. Si no te gusta, lo devoles y te rembolsamos cada centavo. Así de simple como lo lees.
                    </PrimerCaption>
                </div>
            </PrimerSection>
            <PasoAPaso>Paso a paso:</PasoAPaso>
        </div>
    )
}