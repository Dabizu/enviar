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
const cors=require("cors");
const app=express();
app.use(cors());
app.listen(process.env.PORT || 3000,()=>{console.log("se ejecuta el servidor")});

app.post("/recuperar",(req,res)=>{
    var correo=req.param("correo");
    var id=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: 'no-replay@puntotattoo.com.mx',
        to: correo,
        subject: 'Correo de prueba',
        text: 'Recuperar cuenta',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
            '<center><h1>Recupera password</h1></center>'+
            '<p>Hola bienvenido al sistema de recuperacion de password de puntotattoo este correo es para recupera tu cuenta con un solo click iras a una pagina externa da click <a href="https://panel.puntotattoo.com.mx/authentication/flows/basic/recoverAccount.php?user="'+id+'>Aqui</a> para recuperar tu cuenta</p></div>'
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado: ' + info.response);
        }
    });

    res.send("1");
});

app.post("/confirmar",(req,res)=>{
    var correo=req.param("correo");
    // Opciones del correo
    let mailOptions = {
        from: 'no-replay@puntotattoo.com.mx',
        to: correo,
        subject: 'Bienvenido a punto tattoo.',
        text: 'Recuperar cuenta',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h1>Confirmación de cuenta</h1>'+
                '<p>Hola artista bienvenido a punto tattoo, es un placer para nosotros poder ayudar con toda tu gestión al mismo tiempo que conectamos con nuevos clientes dentro de la plataforma!\n'+
                'Es necesario que termines de llenar tu perfil, una vez que esté completo lo revisaremos y sete aceptará en un lapso de 1 a 3 días hábiles, así tu estudio virtual será visible para todos y tendrás las nuevas herramientas disponibles en tu panel.\n'+
                'Mira cómo terminar de editar tu perfil: https://youtu.be/PhDis9b9JFs?si=jDdLV_qOz4OY2bdd </p>'
                //'<p>Para confirmar su cuenta puntotattoo y activarla de click <a href="https://back.puntotattoo.com.mx/api/confirmarCuenta?verificar=1&email='+correo+'">AQUI</a></p></div>'
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

app.get("/pagina",(req,res)=>{
    res.sendFile(__dirname+"/modelo.html");
});