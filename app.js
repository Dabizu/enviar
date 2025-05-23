/*
private $from = 'no-replay@puntotattoo.com.mx';
private $user = 'no-replay@puntotattoo.com.mx';
private $pass = 'jxf*E717lAjxf*E717lA';
private $host = 'c2610354.ferozo.com';
*/
/*
const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

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




app.listen(process.env.PORT || 3000,()=>{console.log("se ejecuta el servidor")});

app.post("/recuperar",(req,res)=>{
    var correo=req.param("correo");
    var id=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
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

app.post("/recuperarCliente",(req,res)=>{
    var correo=req.param("correo");
    var id=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: 'Correo de prueba',
        text: 'Recuperar cuenta',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
            '<center><h1>Recupera password</h1></center>'+
            '<p>Hola bienvenido al sistema de recuperacion de password de puntotattoo este correo es para recupera tu cuenta con un solo click iras a una pagina externa da click <a href="https://app.puntotattoo.com.mx/recoverAccount.php?user="'+id+'>Aqui</a> para recuperar tu cuenta</p></div>'
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

app.post("/mensajeAdmin",(req,res)=>{
    var correo=req.param("correo");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: 'Bienvenido a punto tattoo',
        text: 'Recuperar cuenta',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3>¡Felicidades! Tu perfil ha sido aceptado en la plataforma, ahora ya puedes gozar de todas las herramientas que punto tattoo tiene para ofrecerte. </h3>'+
                '<p>Tu plan actual es básico, si requieres un cambio de plan a premium por favor indícalo para actualizar tu cuenta, puedes consultar los beneficios aquí: app.puntotattoo.com.mx/partners  </p>'+
                '<p>No olvides terminar de llenar tu perfil y unificar tu agenda para poder explotar al máximo las herramientas que punto tattoo te ofrece, te dejo nuestro canal de youtube donde podrás ver tutoriales para editar todas las áreas correspondientes de tu panel administrativo. </p>'+
                '<p>Tutoriales: https://www.youtube.com/@PuntoTattooPartners </p></div>'
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
    res.send("1");
});

app.post("/confirmar",(req,res)=>{
    var correo=req.param("correo");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: 'Bienvenido a punto tattoo',
        text: 'Recuperar cuenta',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h1>Confirmación de cuenta</h1>'+
                '<p>Hola artista bienvenido a punto tattoo, es un placer para nosotros poder ayudar con toda tu gestión al mismo tiempo que conectamos con nuevos clientes dentro de la plataforma!</p>'+
                '<p>Es necesario que termines de llenar tu perfil, una vez que esté completo lo revisaremos y sete aceptará en un lapso de 1 a 3 días hábiles, así tu estudio virtual será visible para todos y tendrás las nuevas herramientas disponibles en tu panel.</p>'+
                '<p>Mira cómo terminar de editar tu perfil: https://youtu.be/PhDis9b9JFs?si=jDdLV_qOz4OY2bdd </p></div>'
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
    res.send("1");
});

app.post("/confirmarCliente",(req,res)=>{
    var correo=req.param("correo");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: 'Bienvenido a punto tattoo',
        text: 'Recuperar cuenta',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h1>Confirmación de cuenta cliente</h1>'+
                '<p>Hola bienvenido a punto tattoo, es un placer para nosotros poder ayudar a encontrar a tu artista ideal y descubrir miles de estilos para tu próximo tatuaje.</p>'+
                '<p>Recuerda que todos los artistas de la plataforma están certificados, así que puedes agendar tu cita sin problema con quien mas te guste, vamos!</p></div>'
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
    res.send("1");
});
//notificaciones al artista
app.post("/notificarArtista",(req,res)=>{
    var correo=req.param("correo");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' ¡Tienes una nueva cita! ',
        text: ' ¡Tienes una nueva cita! ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3>Tienes una nueva cita agendada, revisala ahora en tu panel: panel.puntotattoo.com.mx/authentication/flows/basic/sign-in.html </h3></div>'
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
    res.send("1");
});

//notificar al usuario cliente
app.post("/notificarUsuario",(req,res)=>{
    var correo=req.param("correo");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' ¡Tu cita esta lista! ',
        text: ' ¡Tu cita esta lista! ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3>Tu cita se agendo con éxito y se notificó a tu artista, revisala ahora en tu cuenta: app.puntotattoo.com.mx/sing-in.html </h3></div>'
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
    res.send("1");
});

//notificaciones al cliente que faltan 3 dias
app.post("/notificarArtistaTresDias",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' ¡Tu cita se aproxima! ',
        text: ' ¡Tienes una nueva cita! ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3>Faltan pocos días para tu cita con número '+idCita+', prepara todo y vamos por ello! </h3>'+
                '<p>Puedes verla en tu panel en la tabla de citas próximas: panel.puntotattoo.com.mx/authentication/flows/basic/sign-in.html </p></div>'
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

app.post("/notificarClienteTresDias",(req,res)=>{
    var correo=req.param("correo");
    var nombre=req.param("nombre");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' ¡Tu cita con '+nombre+' se aproxima! ',
        text: ' ¡Tienes una nueva cita! ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> ¡Tu cita con '+nombre+' se aproxima! </h3>'+
                '<p> Faltan pocos días para tu cita, estamos muy emocionados por tu próximo tatuaje, prepárate! </p>'+
                '<p>Puedes ver tu cita en tu cuenta:app.puntotattoo.com.mx/sing-in.html</p></div>'
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

//mandar cita el dia de su cita 5 horas antes
app.post("/notificarArtistaDiaDeCita",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' ¡Hoy tienes una cita! ',
        text: ' ¡Hoy tienes una cita! ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> ¡Prepara todo! Hoy tienes tu cita con número '+idCita+', suerte. </h3>'+
                '<p> Puedes verla en tu panel en la tabla de citas próximas: panel.puntotattoo.com.mx/authentication/flows/basic/sign-in.html  </p></div>'
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
//6
app.post("/notificarClienteDiaDeCita",(req,res)=>{
    var correo=req.param("correo");
    var nombre=req.param("nombre");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' ¡Hoy tienes una cita con '+nombre+'! ',
        text: ' ¡Hoy tienes una cita! ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> Hoy es el gran dia, preparate para tu tatuaje, todo saldrá excelente! </h3>'+
                '<p> Puedes ver tu cita en tu cuenta:app.puntotattoo.com.mx/sing-in.html  </p>'+
                '<p>Detalles generales de tu artista: (mandar link del perfil del artista con el que agendo) </p></div>'
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
//me faltan todas estas para poder mostrar en la api
//7 semandara al cliente diciendole que se a cambiado la cita por causas de fuerza mayor
app.post("/notificarCambioFechaCliente",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' Solicitud de Reagenda ',
        text: ' Solicitud de Reagenda ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> Lamentamos informarte que por causas mayores tu artista no podrá atenderte el día y la hora que seleccionaste para tu cita con número (Id de cita), selecciona una nueva fecha y hora para tu cita.  </h3>'+
                '<p> Ingresa a tu cuenta y selecciona la cita con número '+idCita+', al abrir la ficha da click en el botón reagendar y podrás seleccionar la nueva fecha, verifica que el espacio que selecciones esté disponible.   </p>'+
                '<p> Tienes 7 días para realizar esta acción, reagenda lo antes posible en tu cuenta: app.puntotattoo.com.mx/sing-in.html   </p></div>'
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
//pendiente en el server para hacer las demas
//8 se le mandara al cliente que se deber reagendar su cita o perdera su oportunidad para reagendarla
app.post("/notificarSeguimientoSolicitudReagenda",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' Urgente, reagenda tu cita ahora. ',
        text: ' Urgente, reagenda tu cita ahora. ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> Tu plazo está por vencer, reagenda lo antes posible tu cita con número '+idCita+', para que no se cancele, por favor selecciona una nueva fecha y hora para que tu artista pueda atenderte.   </h3>'+
                '<p> Ingresa a tu cuenta y selecciona la cita con número '+idCita+', al abrir la ficha da click en el botón reagendar y podrás seleccionar la nueva fecha, verifica que el espacio que selecciones esté disponible.   </p>'+
                '<p> Reagenda directo en tu cuenta: app.puntotattoo.com.mx/sing-in.html  </p></div>'
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
//pendiente
//9 mandar a artista que se a reagendado la cita
app.post("/notificarReagendarArtista",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' Se reagendo una cita ',
        text: ' ¡Hoy tienes una cita! ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> Tu cliente a reagendado la cita con número '+idCita+', ahora podrás verla en la tabla de citas próximas con la nueva fecha y hora actualizada.   </h3>'+
                '<p> Si tu cliente seleccionó una fecha que no está disponible puedes contactarlo o pedir que la vuelva a reagendar. </p>'+
                '<p> Puedes verla en tu panel: panel.puntotattoo.com.mx/authentication/flows/basic/sign-in.html </p></div>'
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

//10 conclusion de cita pendiente
app.post("/notificar",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' Pide una opinión y calificación a tu cliente ',
        text: ' Pide una opinión y calificación a tu cliente ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> No olvides concluir tu cita con número '+idCita+' cuando la termines, para que tu cliente pueda dejar una opinión y calificación en tu estudio virtual.  </h3>'+
                '<p> Ingresa a la tabla de citas en revisión y busca el número de cita '+idCita+', abre tu ficha y da click en el botón concluir.  </p>'+
                '<p> Concluye tu cita en tu panel: panel.puntotattoo.com.mx/authentication/flows/basic/sign-in.html </p></div>'
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

//11
app.post("/notificarRecordatorioCitaArtista",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' Urgente, concluye tu cita ahora. ',
        text: ' Urgente, cocluiye tu cita ahora. ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> No olvides concluir tu cita con número '+idCita+', de lo contrario pasará a canceladas y no podrás tener tus métricas de ganancias de esta cita, así como una calificación y opinión de tu cliente, realiza la acción antes de que cancele.  </h3>'+
                '<p> Ingresa a la tabla de citas en revisión y busca el número de cita '+idCita+', abre tu ficha y da click en el botón concluir. </p>'+
                '<p> Concluye tu cita en tu panel: panel.puntotattoo.com.mx/authentication/flows/basic/sign-in.html  </p>'+
                '<p> En caso de no haber realizado esta cita, ignora este mensaje y deja que pase a citas canceladas automáticamente. </p></div>'
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

//12
app.post("/notificarCitaConcluidaArtista",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' ¡Un logro más! ',
        text: ' ¡Un logro más! ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> Tu cita con número '+idCita+' se ha concluido con éxito, se mandó una notificación a tu cliente para compartir su experiencia contigo así como dejar una calificación. </h3>'+
                '<p> Ahora podrás ver lo que has ganado de esta cita  en la sección de mis ganancias de tu panel y ver todas las métricas de preferencia de estilos. </p>'+
                '<p> Mira tu avance en tu panel: panel.puntotattoo.com.mx/authentication/flows/basic/sign-in.html </p></div>'
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

//13
app.post("/notificarCitaConcluidaUsuario",(req,res)=>{
    var correo=req.param("correo");
    var nombreArtista=req.param("nombreArtista");
    var idArtista=req.param("idArtista");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' Califica tu experiencia con '+nombreArtista,
        text: ' Califica tu experiencia con '+nombreArtista,
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> Tu opinión es lo más importante para que tu artista siga creciendo y mejorando cada día.  </h3>'+
                '<p> Por favor comparte tu experiencia de cómo fue su trato, el resultado de tu tatuaje, asi como tu experiencia en general y lo que mas te gusto de tatuarte con '+nombreArtista+' </p>'+
                '<p> Publica la foto de tu tatuaje y deja tu opinión aquí: <span style="color:red;">(Hay que crear esta sección en cada estudio virtual de los artistas y direccionar a los clientes ahí)</span></p>'+
                '<p>app.puntotattoo.com.mx/opiniones.php?user='+idArtista+'</div>'
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

//14
app.post("/notificarCitaCancelarArtista",(req,res)=>{
    var correo=req.param("correo");
    var idCita=req.param("id");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' Cita Cancelada ',
        text: ' Cita Cancelada ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> Tu cita con número '+idCita+' ha sido cancelada, por algunos de los siguientes motivos… </h3>'+
                '<p></p>'+
                '<p> 1.-Tu cliente no reagendo su nueva fecha de cita y el tiempo expiró. </p>'+
                '<p> 2.-Fue una cita que no realizaste y cambió su estatus de revisión a cancelada. </p>'+
                '<p> 3.-Olvidaste concluir tu cita y expiró el tiempo. </p>'+
                '<p></p>'+
                '<p> Si necesitas ayuda con tu cita por favor comunicate a soporte para ayudarte: app.puntotattoo.com.mx/contactanos.html </p></div>'
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

//15
app.post("/notificarCitaCanceladaUsuario",(req,res)=>{
    var correo=req.param("correo");
    // Opciones del correo
    let mailOptions = {
        from: '"Punto tattoo" <no-replay@puntotattoo.com.mx>',
        to: correo,
        subject: ' Cita Cancelada ',
        text: ' Cita Cancelada ',
        html: '<div style="width: 400px; height: 400px; margin: 0 auto;">'+
                '<h3> Tu cita a sido cancelada ya que no pudo ser reagendada en el tiempo mencionado. </h3>'+
                '<p> Si tu cita fue cancelada por algún otro motivo que desconoces por favor comunicate a soporte para ayudarte: app.puntotattoo.com.mx/contactanos.html</p></div>'
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

app.get("/pagina",(req,res)=>{
    res.sendFile(__dirname+"/modelo.html");
});*/