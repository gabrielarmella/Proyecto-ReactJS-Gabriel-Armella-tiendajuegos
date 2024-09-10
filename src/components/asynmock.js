const misJuegos = [
    {id: 1, nombre: "Red Dead Redemption II", precio: 2500, img: "/imagenes/Juegos-img/miniatura-juegos/red-dead-redemption-II.jpg"},
    {id: 2, nombre: "The Last Of Us I", precio: 3500, img: "/imagenes/Juegos-img/miniatura-juegos/the-last-of-us-I.jpg"},
    {id: 3, nombre: "Horizon", precio: 1500, img: "/imagenes/Juegos-img/miniatura-juegos/horizon-forbidden.jpg"},
    {id: 4, nombre: "Helldivers II", precio: 1000, img: "/imagenes/Juegos-img/miniatura-juegos/helldivers-II.jpg"},
    {id: 5, nombre: "Ghost Of Tsushima", precio: 4000, img: "/imagenes/Juegos-img/miniatura-juegos/ghost-of-tsushima.jpg"},
    {id: 6, nombre: "Destiny 2 La Forma Final", precio: 3000, img: "/imagenes/Juegos-img/miniatura-juegos/destiny-2-la-forma-final.jpg"},
]

export const getJuegos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misJuegos)
        }, 2000)
    })
}

export const getUnJuego = (id) => {
    return new Promise (resolve =>{
        setTimeout(() => {
            const juego = misJuegos.find(item => item.id === id)
            resolve(juego)
        }, 2000)
    })
}