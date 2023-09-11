console.log("esta corriendo el chatconfig")
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
