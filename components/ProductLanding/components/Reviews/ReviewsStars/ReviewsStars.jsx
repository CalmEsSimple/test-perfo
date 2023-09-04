import { useEffect, useState } from 'react';
import { Wrapper } from "./ReviewsStarsCss"
import Modal from '../../Modal/Modal'

const ReviewsStars = ({skus}) => {

  const [modalHandle, setModalHandle] = useState(false)

  const showModal = () => {
    modalHandle ? setModalHandle(false) : setModalHandle(true)
  }
  
    useEffect(() => {
        const script1 = document.createElement("script");
        const script2 = document.createElement("script");
    
        script1.src = "https://widget.reviews.co.uk/product/dist.js";
        script2.src = "https://widget.reviews.co.uk/rating-snippet/dist.js";
        
        document.head.appendChild(script1);
        document.head.appendChild(script2);

        return () => {
          document.head.removeChild(script1);
          document.head.removeChild(script2);
        };
      }, []);
    
      useEffect(() => {
        setTimeout(() => {
          if(ratingSnippet) {
            ratingSnippet("ruk_rating_snippet",{
              store: "calmessimple.com.ar",
              color: "#FABD00",
              linebreak: false,
              text: "Reseñas",
              usePolaris: true,
              lang: 'es',
              minRating: 4,
              style: {
                fontFamily: "Arial, sans-serif"
              }
            });
          }
        }, 500);
      }, []);
    
      return (
        <Wrapper>
            <div onClick={showModal} className="ruk_rating_snippet" data-sku={skus}></div>
             {modalHandle ? <Modal Layout="Reviews" CloseHandle={showModal} skus={skus} /> : <></>}
        </Wrapper>
        
      );
    }

    export default ReviewsStars;
    