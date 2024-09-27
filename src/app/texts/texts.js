const title = "El arte de la almojabana";
const email = "Correo.alexlog.trb@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573213534882"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En El arte de la almojabana, nos enorgullecemos de ofrecer productos tradicionales como almojábanas, pandeyucas, pandebonos, masato, kumis casero y crema de avena. Sabemos que cada detalle hace la diferencia, y nos esforzamos por brindar productos de calidad para deleitar tu paladar.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Hace la diferencia.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565725179481", // Enlace específico de Facebook
        instagram: "https://www.instagram.com/elartedelaalmojabana/", // Enlace específico de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
