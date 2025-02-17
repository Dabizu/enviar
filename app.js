/*
private $from = 'no-replay@puntotattoo.com.mx';
private $user = 'no-replay@puntotattoo.com.mx';
private $pass = 'jxf*E717lAjxf*E717lA';
private $host = 'c2610354.ferozo.com';
*/
const nodemailer = require('nodemailer');

// Configuración del transportador SMTP
let transporter = nodemailer.createTransport({
    host: 'c2610354.ferozo.com', // Reemplaza con el host proporcionado por Ferozo.Host
    port: 587, // Reemplaza con el puerto proporcionado por Ferozo.Host
    secure: false, // Usa TLS si es necesario
    auth: {
        user: 'no-replay@puntotattoo.com.mx', // Reemplaza con tu correo electrónico
        pass: 'jxf*E717lAjxf*E717lA' // Reemplaza con tu contraseña
    }
});



const express=require("express");
const app=express();
app.listen(process.env.PORT || 3000,()=>{console.log("se ejecuta el servidor")});

app.post("/recuperar",(req,res)=>{
    var correo=req.params("correo");
    // Opciones del correo
    let mailOptions = {
        from: 'no-replay@puntotattoo.com.mx',
        to: correo,
        subject: 'Correo de prueba',
        text: 'Recuperar cuenta',
        html: '<p></p>'
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado: ' + info.response);
        }
    });
});

app.post("/confirmar",(req,res)=>{
    var correo=req.params("correo");
    // Opciones del correo
    let mailOptions = {
        from: 'no-replay@puntotattoo.com.mx',
        to: correo,
        subject: 'Correo de prueba',
        text: 'Recuperar cuenta',
        html: '<p></p>'
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado: ' + info.response);
        }
    });
})