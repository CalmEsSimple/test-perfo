import { getOpenSideCart } from "@/state/cart/cartSelector";
import { IStore } from "@/state/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Chat = () => {
  const sideCartOpened = useSelector((state: IStore) => getOpenSideCart(state))
  const [isCartOpen, setIsCartOpen] = useState(sideCartOpened);

  const [displayModal, setDisplayModal] = useState(isCartOpen ? "none" : "block");

  useEffect(() => {
    setIsCartOpen(sideCartOpened)
    setDisplayModal(sideCartOpened ? "block" : "none");
    const hideChat = document.getElementById("reamaze-widget-container")
          if(hideChat){
            hideChat.style.display = `${displayModal}`
          }
  }, [sideCartOpened])

  useEffect(() => {
    function loadScript() {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.reamaze.com/assets/reamaze.js";
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    loadScript()
      .then(() => {
        const scriptColchones = document.createElement("script");
        scriptColchones.innerHTML = `
          var _support = _support || { 'ui': {}, 'user': {} };
            _support['account'] = 'calm-es-simple';
            _support['ui']['contactMode'] = 'mixed';
            _support['ui']['enableKb'] = 'true';
            _support['ui']['styles'] = {
              widgetColor: 'rgba(250, 189, 0, 0.99)',
              gradient: true,
            };
            _support['ui']['shoutboxFacesMode'] = 'default';
            _support['ui']['shoutboxHeaderLogo'] = true;
            _support['ui']['widget'] = {
              img: 'https://i.ibb.co/pjzD4pP/Logo-Chat-Web-Calm-1.png',
              displayOn: 'all',
              fontSize: 'default',
              allowBotProcessing: true,
              label: {
                text: 'Hola &#128155; &#191;Quer&#233;s descansar como en las nubes? Habl&#225; con nuestrxs especialistas del sue&#241;o &#128071;',
                mode: "notification",
                delay: 15,
                duration: 30,
                primary: "Si, quiero que me ayuden!",
                secondary: "No, gracias.",
                sound: true,
              },
              position: 'bottom-right',
              mobilePosition: 'bottom-right'
            };
            _support['apps'] = {
              faq: {"enabled":true},
              recentConversations: {"header":"Tus consultas recientes 😊"},
              orders: {"enabled":false,"header":"","find_order_button_text":"Busquemos tu orden"}
            };
            
          if(document.getElementById("reamaze-widget")){
            document.getElementById("reamaze-widget").addEventListener("click", function(){  hj('trigger', 'csatpoll'); });
          }
            
          if(document.getElementById("reamaze-widget-icon")){
          }
        `;
        document.body.appendChild(scriptColchones);
      })
      .catch((error) => {
        console.error("Error al cargar el script:", error);
      });

    return () => {
      const scriptColchones = document.querySelector(
        'script[data-widget="reamaze-widget"]'
      );
      if (scriptColchones) {
        document.body.removeChild(scriptColchones);
      }
    };
  }, []);

  return (
      <div id="reamaze-widget"></div>
  );
};

export default Chat;
