import { ImgGallery, ModalSidecart } from "./styled"
import { useRef, useEffect } from "react";

interface IProps {
    imgUrl?: string
    isOpen?: boolean
    closeModal: () => void
}

const ModalGallery = ({ imgUrl, isOpen, closeModal }: IProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);


    return (
        <ModalSidecart $isOpen={isOpen}>
            <div className="header-cart" id="hola">
                <button title="Cerrar modal" aria-label="Cerrar modal" className="header-closer-2" onClick={closeModal}><img src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/527083b1-56bb-4a75-1a98-e7cffd083800/fit=scale-down" alt="cerrar carrito img" /></button>
                <ImgGallery src={imgUrl} />
            </div>
        </ModalSidecart >
    )
}

export default ModalGallery