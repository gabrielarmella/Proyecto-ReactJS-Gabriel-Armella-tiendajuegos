import { initializeApp } from "firebase/app";
import {collection, doc, getFirestore, writeBatch} from "firebase/firestore" 


const firebaseConfig = {
  apiKey: "AIzaSyA1Dfufb0-OsYSJuvEesDmccBM70_kW7-8",
  authDomain: "tienda-juegos-ar.firebaseapp.com",
  projectId: "tienda-juegos-ar",
  storageBucket: "tienda-juegos-ar.appspot.com",
  messagingSenderId: "282834506303",
  appId: "1:282834506303:web:de1483a0a4c40a7cf05e8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

//////////////////////////
const misJuegos = [
    {nombre: "Red Dead Redemption II", stock:120, precio: 2500, img: "/imagenes/Juegos-img/miniatura-juegos/red-dead-redemption-II.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/red-dead-redemption-II.jpg", idCat:"PC", 
        descripcion: "Red Dead Redemption 2 es un videojuego de acción-aventura de mundo abierto ambientado en el Salvaje Oeste, desarrollado por Rockstar Games. Es la tercera entrega de la serie Red Dead y una precuela del juego de 2010. Juego y Sistema de Honor: El juego permite explorar un extenso mapa en primera o tercera persona, interactuar con NPCs, cazar, y participar en combates. Incluye un sistema de honor que influye en la reacción de los NPCs según las acciones del jugador. Además del modo para un jugador, el juego ofrece Red Dead Online, donde los jugadores pueden explorar juntos y participar en actividades cooperativas y eventos. En resumen, Red Dead Redemption 2 destaca por su historia profunda, su vasto mundo abierto y su sistema de juego detallado, centrado en la exploración y la supervivencia."},
    {nombre: "The Last Of Us I", stock:210, precio: 3500, img: "/imagenes/Juegos-img/miniatura-juegos/the-last-of-us-I.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/the-last-of-us-part-I.jpg", idCat:"PlayStation",
        descripcion:"The Last of Us es un videojuego de terror de acción y aventura en tercera persona, desarrollado por Naughty Dog y distribuido por Sony Computer Entertainment. La trama sigue a Joel y Ellie, dos supervivientes en un Estados Unidos devastado por una pandemia que convierte a los humanos en criaturas caníbales.El desarrollo del juego comenzó en 2009, tras el lanzamiento de Uncharted 2: El reino de los ladrones, bajo la dirección de Bruce Straley y Neil Druckmann. La narrativa del juego se centra en la relación entre los protagonistas, interpretados por Troy Baker y Ashley Johnson. Las influencias para el juego incluyen el documental Planeta Tierra y los libros La carretera, El mundo sin nosotros y City of Thieves, así como las películas No Country for Old Men y Gravity. La banda sonora fue compuesta por Gustavo Santaolalla, Andrew Buresh, Anthony Caruso y Jonathan Mayer."},
    {nombre: "Horizon", stock:125, precio: 1500, img: "/imagenes/Juegos-img/miniatura-juegos/horizon-forbidden.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/Horizon.jpg",  idCat:"PlayStation", 
        descripcion:"Horizon Forbidden West es un videojuego de rol de acción en tercera persona, desarrollado por Guerrilla Games y distribuido por Sony Interactive Entertainment. Es la secuela de Horizon Zero Dawn y se lanzó para PlayStation 4 y 5 en febrero de 2022, y para Microsoft Windows en marzo de 2024. Argumento: La historia sigue a Aloy en un mundo post-apocalíptico dominado por máquinas. En esta secuela, Aloy explora la región de la “Forbidden West” para investigar una nueva amenaza que pone en riesgo la supervivencia de la humanidad. A lo largo del juego, enfrenta nuevos enemigos y explora diversos entornos. Juego: El título presenta un sistema de combate mejorado con una amplia gama de armas y habilidades. Incluye un extenso sistema de exploración con distintas regiones, cada una con su propio estilo y enemigos.",},
    {nombre: "Helldivers II", stock:125, precio: 1000, img: "/imagenes/Juegos-img/miniatura-juegos/helldivers-II.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/Helldivers-II.jpg", idCat:"PlayStation", 
        descripcion:"Helldivers II es un juego de disparos en tercera persona cooperativo, desarrollado por Arrowhead Game Studios y publicado por Sony Interactive Entertainment. Es la secuela del título Helldivers de 2013. Modo de Juego: Los jugadores asumen el rol de Helldivers, una unidad de élite que busca expandir la paz y la democracia en una galaxia hostil. El juego se centra en el modo multijugador cooperativo para hasta cuatro jugadores, sin campaña para un solo jugador. Ambiente y Lore: La historia ocurre un siglo después de la victoria de “Super Earth” sobre los Cyborgs, Terminids y The Illuminate del primer juego. Los Helldivers son enviados desde la órbita para reclamar territorios colonizados. La narrativa ambiental se revela a través de registros, notas y mensajes de propaganda. Gráficos y Sonido: El juego ofrece buenos gráficos y una destacada ambientación en el campo de batalla, complementada con una banda sonora y efectos de sonido envolventes.",},
    {nombre: "Ghost Of Tsushima", stock:315, precio: 4000, img: "/imagenes/Juegos-img/miniatura-juegos/ghost-of-tsushima.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/ghost-of-tsushima.jpg", idCat:"PC", 
        descripcion:"Ghost of Tsushima es un juego de acción y aventura en mundo abierto desarrollado por Sucker Punch Productions y publicado por Sony Interactive Entertainment para PlayStation 4 y 5. Ambiente: Ambientado en la isla de Tsushima durante la primera invasión mongola de Japón en el siglo XIII, el jugador asume el papel de Jin Sakai, un samurái que lucha por liberar su tierra natal de la ocupación extranjera. Juego: El título combina acción, sigilo y estrategia en un mundo abierto. Los jugadores exploran la isla, completan misiones, y mejoran las habilidades de Jin mediante diversas armas y técnicas. El enfoque principal está en el combate cuerpo a cuerpo y la estrategia para enfrentar a enemigos, ya sean soldados mongoles o bandoleros japoneses."},
    {nombre: "Destiny 2 La Forma Final", stock:110, precio: 3000, img: "/imagenes/Juegos-img/miniatura-juegos/destiny-2-la-forma-final.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/destiny-2.jpg", idCat:"PC",
        descripcion:"La Edición Estándar de La Forma Final incluye la nueva campaña, tres nuevas súper, un nuevo destino, armas y armaduras originales y un episodio del año de La Forma Final.* Subclase prismática Por primera vez, la subclase prismática te permite combinar las energías solar, de arco, de vacío, de estasis y de atadura en una subclase a medida. Ya no tendrás que elegir entre Luz y Oscuridad. Campaña La Forma Final, una retorcida calcificación de la realidad diseñada por el Testigo, se cierne sobre nosotros. Embárcate en un peligroso viaje al corazón del Viajero, reúne a la Vanguardia y ponle fin a la guerra entre la Luz y la Oscuridad. Nuevas súper Para derrotar al Testigo, hará falta un poder inconmensurable. Los cazadores de arco, los titanes de vacío y los hechiceros solares podrán dominar una nueva súper para enfrentarse al olvido. Nuevo destino. Adéntrate en un paisaje imposible que altera el tiempo y el espacio. Sigue al Testigo y contempla lo que el Viajero alberga. * Si se compra esta edición por primera vez, se obtiene el episodio en curso en el momento en el que se inicia sesión por primera vez después de la compra.",},
    {nombre: "Spider Man Miles Morales", stock:220, precio: 5000, img: "/imagenes/Juegos-img/miniatura-juegos/sipder-man-miles-morales.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/marvels-spider-man-miles-morales.jpg", idCat:"PlayStation",
        descripcion:"Spider-Man: Miles Morales es un juego de acción y aventuras en mundo abierto, desarrollado por Insomniac Games y publicado por Sony Interactive Entertainment para PlayStation 4 y 5. Es la secuela de *Marvel’s Spider-Man* (2018). Historia: La trama sigue a Miles Morales, quien, después de ser mordido por una araña genéticamente mejorada, se convierte en Spider-Man. Un año después de los eventos del primer juego y su DLC The City That Never Sleeps, Miles defiende Nueva York en medio de una guerra entre una corporación energética y un ejército criminal de alta tecnología. Juego: El título combina combate, exploración y plataformas en un mundo abierto. Ofrece una nueva historia, escenarios, villanos y misiones únicas centradas en la experiencia de Miles Morales como Spider-Man. Novedades: La versión de PlayStation 5 incluye mejoras técnicas como gráficos en 4K a 60 fps en el Modo de rendimiento, una app móvil para gestionar misiones secundarias y una nueva mecánica de combate con poderes eléctricos."},
]


/* const subirJuegos = async () => {
    const batch = writeBatch(db)
    const juegosRef = collection(db, "juego")
    misJuegos.forEach((juego)=>{
        const nuevoDoc = doc(juegosRef) //crea un nuevo dociumento con un ID automatico
        batch.set(nuevoDoc, juego)// Agrega la operacion de escritura al batch
    })
    try {
        await batch.commit();
        console.log("Juego subidos exitosamente")
    } catch(error) {
        console.log("Error subiendo Juego:", error)
    }
}
subirJuegos()  */