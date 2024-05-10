import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'thegrozzo@gmail.com',
		pass: 'juevixtodusbmcoa',
	},
})

export const sendMail = async (to: string, subject: string, text: string) => {
  try {
    const mailOptions = {
      from: process.env.FROM_EMAIL_ADMIN, // Correo del remitente
      to, // Destinatario
      subject, // Asunto del correo
      text // Cuerpo del mensaje
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
  }
};