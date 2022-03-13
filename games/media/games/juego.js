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
       <p>Hoy es un gran día para ti, hoy podrás ver el espectaculo de Harry Potter que tanto llevas esperando...</p>\
       <p>La alarma acaba de sonar son las 9:01 am y el espectaculo comienza a las 12:30.</p>\
       <p>Debes escoger la manera de empezar el día, puedes <a href='dormir'>Volver a dormir</a>,\
       <a href='desayuno'> bajar a desayunar</a> o bien\
       <a href='llamar'>llamar a tu acompañante.</a> Elige sabiamente tu elección... </p>"
    ),

    dormir: new undum.SimpleSituation(
        "<p> Decidiste dormirte, ha sido una mala decisión ya que no volviste a configurar la alarma\
         tu acompañante también se quedó dormido ya que el día anterior os dormisteis tarde por estar jugando a League of Legends,\
         son las 13:06 pm por lo que el espectaculo de Harry Potter comenzó hace un buen rato...</p>"
    ),

    desayuno: new undum.SimpleSituation(
        "<img src='./media/img/desayuno_imagen.jpg' class='float_right' width='250' height='250'>\
         <p>Escogiste bajar a desayunar, realmente ha sido una buena opción, ya que te espera un largo día.</p>\
         <p> Una vez acabado en desayuno mirás la hora y son las 10 de las mañana, tienes aún tiempo de sobra, ya que en una hora llegas al lugar\
         como aún te sobra tiempo puedes <a href='llamar2'> llamar a tu acompañante</a> o bien <a href='tele'> ver la tele</a> </p>"
    ),

    tele: new undum.SimpleSituation(
        "<p>Decidiste ver la tele por un rato, justo encontraste un programa que te resultaba demasiado interesante.</p>\
         <p> Después de un rato miras la hora y son las 11:45am, ¡El espectaculo comienza a las 12:30pm! por lo que vas tarde.</p>\
         <p> tu acompañante ni si quiera te contacto contigo en toda la mañana, por lo que deberías <a href='llamar3'>preguntarle si está listo</a></p>"
    ),

    llamar3: new undum.SimpleSituation(
      "<p> Llamas a tu acomañante, el cual tiene las entradas, y resulta que tiene el telefono en silencio y se ha quedado dormido\
       ,en este caso decides <a href='despertar2'>ir a su casa a despertarle</a> ,tardarás aproximadamente 20 minutos en llegar</p>"
    ),

    despertar2: new undum.SimpleSituation(
        "<p>Una vez llegas a su casa tarda un rato en recibirte, por lo que acaban siendo las 12:20, lamentablemente has perdido la oportunidad de\
         ver el espectaculo de harry potter y también perdiste el dinero de las entradas <\p>"
    )

};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";
