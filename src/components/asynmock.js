const misJuegos = [
    {id: "1", nombre: "Red Dead Redemption II", precio: 2500, img: "/imagenes/Juegos-img/miniatura-juegos/red-dead-redemption-II.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/red-dead-redemption-II.jpg", idCat:"PC"},
    {id: "2", nombre: "The Last Of Us I", precio: 3500, img: "/imagenes/Juegos-img/miniatura-juegos/the-last-of-us-I.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/the-last-of-us-part-I.jpg", idCat:"PlayStation"},
    {id: "3", nombre: "Horizon", precio: 1500, img: "/imagenes/Juegos-img/miniatura-juegos/horizon-forbidden.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/Horizon.jpg",  idCat:"PlayStation",},
    {id: "4", nombre: "Helldivers II", precio: 1000, img: "/imagenes/Juegos-img/miniatura-juegos/helldivers-II.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/Helldivers-II.jpg", idCat:"PlayStation",},
    {id: "5", nombre: "Ghost Of Tsushima", precio: 4000, img: "/imagenes/Juegos-img/miniatura-juegos/ghost-of-tsushima.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/ghost-of-tsushima.jpg", idCat:"PC",},
    {id: "6", nombre: "Destiny 2 La Forma Final", precio: 3000, img: "/imagenes/Juegos-img/miniatura-juegos/destiny-2-la-forma-final.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/destiny-2.jpg", idCat:"PC"},
    {id: "7", nombre: "Spider Man Miles Morales", precio: 5000, img: "/imagenes/Juegos-img/miniatura-juegos/sipder-man-miles-morales.jpg", imgFondo:"/imagenes/Juegos-img/fondo-juegos/marvels-spider-man-miles-morales.jpg", idCat:"PlayStation"},
]

export const getJuegos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misJuegos)
        }, 100)
    })
}

export const getUnJuego = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            const juego = misJuegos.find(item => item.id === id)
            resolve(juego)
        }, 100)
    })
}

export const getJuegosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const juego = misJuegos.filter(item => item.idCat === idCategoria)
            resolve(juego)
        }, 100);
    })
}