

const products = [
    {
        id: 1,
        name: 'Jimi Hendrix',
        price: 1000,
        img: './img/jimihendrix.jpg'
    },
    {
        id: 2,
        name: 'Bad Religion',
        price: 1000,
        img: './img/badreligion.jpg'
    },
    {
        id: 3,
        name: 'Sex Pistols',
        price: 1000,
        img: './img/sexpistols.jpg'
    },
    {
        id: 4,
        name: 'The Smiths',
        price: 1000,
        img: './img/smiths.jpg'
    },
    {
        id: 1,
        name: 'PearlJam',
        price: 1000,
        img: './img/pearljam.jpg'
    },
    {
        id: 2,
        name: 'AC/DC',
        price: 1000,
        img: './img/acdc.jpg'
    },
    {
        id: 3,
        name: 'Charly Garcia',
        price: 1000,
        img: './img/charlygarcia.jpg'
    },
    {
        id: 4,
        name: '2 Minutos',
        price: 1000,
        img: './img/2minutos.jpg'
    }
]

export const getproducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}