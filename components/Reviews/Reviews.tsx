import { useEffect, useState, ChangeEvent } from 'react'
import {
  DivReviews,
  TabsContainer,
  Title,
  TabsContent,
  DivReviewsTabs,
} from './styled'
import Tab from './Tab/Tab'
import scriptReviews from './ScriptReviews'

const ReviewsLandingProduct = () => {
  useEffect(() => {
    function loadScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://widget.reviews.io/polaris/build.js'
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      })
    }

    loadScript()
      .then(() => {
        for (const element of scriptReviews) {
          setTimeout(() => {
            const script = document.createElement('script')
            script.innerHTML = element.script
            document.body.appendChild(script)
          }, 10)
        }
      })
      .catch((error) => {
        console.error('Error al cargar el script:', error)
      })
    return () => {
      for (const element of scriptReviews) {
        const scriptDelete = document.querySelector(
          `script[data-widget="${element.sku}"]`
        )
        if (scriptDelete) {
          document.body.removeChild(scriptDelete)
        }
      }
    }
  }, [])

  const [showReview, setShowReview] = useState('Colchón Calm')

  function tabHandle(e: ChangeEvent<HTMLInputElement>) {
    setShowReview(e.target.id)
  }

  return (
    <DivReviews>
      <Title>Opiniones reales de clientes reales.</Title>
      <TabsContainer>
        {scriptReviews.map((item) => (
          <Tab
            key={item.sku}
            sku={item.sku}
            name={item.name}
            tabHandle={tabHandle}
          />
        ))}
      </TabsContainer>
      <DivReviewsTabs>
        {scriptReviews.map((item) => (
          <TabsContent
            key={item.sku}
            id={item.sku}
            name={item.name}
            show={showReview}
          ></TabsContent>
        ))}
      </DivReviewsTabs>
    </DivReviews>
  )
}

export default ReviewsLandingProduct
