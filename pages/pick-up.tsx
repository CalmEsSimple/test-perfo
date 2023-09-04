import React from 'react'
import {PickUpComponent, GuiaVehiculos} from '@/components/pickUpComponent/pickUpComponent'
import CategoryFAQ from '@/components/CategoryFAQ/CategoryFAQ'
import faqAccordion from '@/jsons/FrequentQuestions/FrequentQuestions.json'
import helpJson from "@/utils/helpComponent.json"
import Help from "@/components/Compromiso/Help/Help"
import { Title, Text } from '@/components/pickUpComponent/propStyle/propStylePickUp'
function pickUpLanding() {
  return (
    <div>
      <PickUpComponent />
      <Help cards={helpJson.cardsPickUp} background="pickUp" Title={Title} Text={Text} carousel={true} />
      <GuiaVehiculos/>
      <CategoryFAQ
        faqAccordion={faqAccordion.PickUp}
        title=""
        boldTitle="Preguntas frecuentes"
      />
    </div>
  )
}

export default pickUpLanding
