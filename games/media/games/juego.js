// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
       "<h1>Comienzo del día</h1>\
       <p>Hoy es un gran día para ti, hoy podrás ver el espectáculo de Harry Potter que tanto llevas esperando...</p>\
       <p>La alarma acaba de sonar son las 9:00 am y el espectáculo comienza a las 12:30.</p>\
       <p>Debes escoger la manera de empezar el día, puedes <a href='dormir'>Volver a dormir</a>,\
       <a href='desayuno'> bajar a desayunar</a> o bien\
       <a href='llamar'>llamar a tu acompañante.</a> Elige sabiamente tu elección... </p>"
    ),

    llamar: new undum.SimpleSituation(
      "<p> Llamaste a tu acompañante, pero no te cogío el telefono ya que aún sigue dormido, no le das mucha importancia, ya que aún es pronto \
       vuelves a plantearte ambas opciones, puedes <a href='desayuno'> bajar a desayunar</a> o bien <a href='dormir'>volver a dormir</a> </p>"
    ),

    dormir: new undum.SimpleSituation(
        "<img src='./media/img/reloj.jpg' class='float_right' width='250' height='250'>\
        <p> Decidiste dormirte, ha sido una mala decisión ya que no volviste a configurar la alarma\
         tu acompañante también se quedó dormido ya que el día anterior os dormisteis tarde por estar jugando a League of Legends,\
         son las 13:06 pm por lo que el espectáculo de Harry Potter comenzó hace un buen rato...</p>"
    ),

    desayuno: new undum.SimpleSituation(
        "<img src='./media/img/desayuno_imagen.jpg' class='float_right' width='250' height='250'>\
         <p> Escogiste bajar a desayunar, realmente ha sido una buena opción, ya que te espera un largo día.</p>\
         <p> Una vez acabado en desayuno mirás la hora y son las 10 de las mañana, tienes aún tiempo de sobra, ya que en una hora llegas al lugar\
         como aún te sobra tiempo puedes <a href='llamar2'> llamar a tu acompañante</a> o bien <a href='tele'> ver la tele</a> </p>"
    ),

    llamar2: new undum.SimpleSituation(
      "<p>Trás acabar el desayuno escoges llamar a tu acompañante y observas que no recibe la llamada, ya que tiene el\
       movil en silencio y se ha quedado dormido, el tiene las entradas, por lo que deberás <a href='despertar'>ir a su casa a despertarle</a>\
       son las 10 de la mañana y tardas 20 minutos en llegar a su casa, por lo que vas bien de hora.</p>"
    ),

    despertar: new undum.SimpleSituation(
        "<p> Una vez llegas a casa de tu acompañante tarda un rato en recibirte, alfinal acaban siendo las 11:30 am por lo que prácticamente\
          el espectáculo empieza en una hora, una vez podeis poner rumbo hacia el espectáculo tenéis dos opciones <a href='bus'> intentar coger el bus</a>\
          o bien <a href='taxi'> intentar pedir un taxi para ir más rápido. </a> </p>"
    ),

    bus: new undum.SimpleSituation(
      "<img src='./media/img/bus.jpg' class='float_right' width='250' height='250'>\
      <p> Escogisteis esperar al bus, lamentablemente llevaba un gran retraso debido al atasco ocasionado por la huelga de los alumnos que suspendieron  \
        física y aquí acaba tu viaje... </p>"
    ),

    taxi: new undum.SimpleSituation(
        "<img src='./media/img/taxi.jpg' class='float_right' width='250' height='250'>\
        <p> Escogisteis llamar a un taxi y llegó a las 11:55, en aproximadamente 20 minutos llegais el sitio del espectáculo, por suerte llegais con tiempo de sobra \
         para poder pasar aparte de la entrada el taquillero os pone una pequeña <a href='prueba'>prueba.</a> </p>"
    ),

    prueba: new undum.SimpleSituation(
        "<p> La prueba es bastante sencilla, si no eres un muggle claro... De los siguientes hechizos debeís escoger cual se útiliza para hacer volar los objetos. \
        Cuentas con las siguientes opciones: <a href='error'> abracadabra pata de cabra, </a> <a href='acierto'> wingardium leviosa, </a> <a href='error'> lumos máxima </a> o <a href='error'> bombarda </a> </p>"
    ),

    error: new undum.SimpleSituation(
        "<p> Parece que eres un muggle, aunque puede que simplemente te hayas equivocado de opción... <a href='prueba'> pulsa aquí para volver a intentarlo</a> </p>"
    ),

    acierto: new undum.SimpleSituation(
      "<p> ¡Correcto! ya puedes pasar a ver el espectáculo. </p>\
       <p> Una vez que ha concluido y te lo has pasado en grande llega la hora de volver a casa, por lo que vuelves con tu acompañante y aquí acaba tu historia.</p>"

    ),

    tele: new undum.SimpleSituation(
        "<p>Decidiste ver la tele por un rato, justo encontraste un programa que te resultaba demasiado interesante.</p>\
         <p> Después de un rato miras la hora y son las 11:45am, ¡El espectáculo comienza a las 12:30pm! por lo que vas tarde.</p>\
         <p> tu acompañante ni si quiera te contacto contigo en toda la mañana, por lo que deberías <a href='llamar3'>preguntarle si está listo</a></p>"
    ),

    llamar3: new undum.SimpleSituation(
      "<p> Llamas a tu acomañante, el cual tiene las entradas, y resulta que tiene el telefono en silencio y se ha quedado dormido\
       ,en este caso decides <a href='despertar2'>ir a su casa a despertarle</a> ,tardarás aproximadamente 20 minutos en llegar</p>"
    ),

    despertar2: new undum.SimpleSituation(
        "<p>Una vez llegas a su casa tarda un rato en recibirte, por lo que acaban siendo las 12:20, lamentablemente has perdido la oportunidad de\
         ver el espectáculo de harry potter y también perdiste el dinero de las entradas, aquí acaba tu historia. <\p>"
    )

};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";
