import { ModalSidecart } from "./styled"
import { useRef, useEffect, ReactNode } from "react";

interface IProps {
    children: ReactNode;
    isOpen: boolean | (() => void);
    closeModal: () => void;
    titleHeader: string;
}

const Modal = ({ children, isOpen, closeModal, titleHeader }: IProps) => {

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
            <div ref={modalRef} className={`modal-container ${isOpen ? 'open' : ''}`}>

                <div className="header-cart">
                    <div className="header-cart-closer">
                        <p className="header-closer-1">{titleHeader}</p>
                        <button title="Cerrar modal" aria-label="Cerrar modal" className="header-closer-2" onClick={closeModal}><img src="https://imagedelivery.net/7yveHullsFjmXtPLdJPFsg/527083b1-56bb-4a75-1a98-e7cffd083800/fit=crop" alt="cerrar carrito img" /></button>
                    </div>
                </div>

                {children}
            </div>
        </ModalSidecart>
    )
}

export default Modal