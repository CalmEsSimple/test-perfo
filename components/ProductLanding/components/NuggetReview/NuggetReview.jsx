import { useEffect } from 'react'
import { NuggetWrapper } from "./styled.ts";

export const NuggetsReview = ({skus}) => {
    useEffect(() => {
        const script1 = document.createElement("script");
        script1.src = "https://widget.reviews.io/modern-widgets/nuggets.js";
        script1.async = true;
        document.body.appendChild(script1);
      }, []);

  return (
        <NuggetWrapper>
            <div 
                id="reviews-io-nuggets-widget"
                widget-id="xFoniUf9ZQEsSKJm"
                store-name="calmessimple.com.ar"
                lang='es'
                sku={skus}
            ></div>
        </NuggetWrapper>
  )
}
