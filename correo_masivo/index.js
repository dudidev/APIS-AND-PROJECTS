const enviarCorreoMasivo = require('./mailer');

//Agregamos la lista de correos que necesitemos
const listaCorreos = [
    "correo1@ejemplo.com",
    "correo2@ejemplo.com",
    "correo3@ejemplo.com",
    "correo4@ejemplo.com",
];

//Estuctura del correo enviado
const asunto = "🎉 ¡Promoción especial!";
const contenido = `
    <h1>Hola 👋</h1>
    <p>Gracias por participar en nuestra campaña.</p>
    <p>Te agradecemos el apoyo que nos brindan <3.</p>
`;

enviarCorreoMasivo(listaCorreos, asunto, contenido);
