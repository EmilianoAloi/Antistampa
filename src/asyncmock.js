

const products = [
    {
        id: '1',
        name: 'Jimi Hendrix',
        price: 1000,
        img: './img/jimihendrix.jpg',
        product: 'Remera unisex',
        cat: 'int',
    },
    {
        id: '2',
        name: 'Bad Religion',
        price: 1000,
        img: './img/badreligion.jpg',
        product: 'Remera unisex',
        cat: 'int',
    },
    {
        id: '3',
        name: 'Sex Pistols',
        price: 1000,
        img: './img/sexpistols.jpg',
        product: 'Remera unisex',
        cat: 'int',
    },
    {
        id: '4',
        name: 'The Smiths',
        price: 1000,
        img: './img/smiths.jpg',
        product: 'Remera unisex',
        cat: 'int',
    },
    {
        id: '5',
        name: 'Almendra',
        price: 1000,
        img: './img/almendra.jpg',
        product: 'Remera unisex',
        cat: 'nac',
    },
    {
        id: '6',
        name: 'Cadena Perpetua',
        price: 1000,
        img: './img/cadenaperpetua.jpg',
        product: 'Remera unisex',
        cat: 'int',
    },
    {
        id: '7',
        name: 'Diferentes Actitudes Juveniles',
        price: 1000,
        img: './img/actitudes.jpg',
        product: 'Remera unisex',
        cat: 'nac',
    },
    {
        id: '8',
        name: 'El Mato a un Policia Motorizado',
        price: 1000,
        img: './img/elmato.jpg',
        product: 'Remera unisex',
        cat: 'nac',
    },
    {
        id: '9',
        name: 'Tote Antistampa',
        price: 500,
        img: './img/toteanti.jpg',
        product: 'tote',
        cat: 'tote',
    },
    {
        id: '10',
        name: 'Tote Psycho Killer',
        price: 500,
        img: './img/totepsychokiller.jpg',
        product: 'tote',
        cat: 'tote',
    },
    {
        id: '11',
        name: 'Tote Dope',
        price: 500,
        img: './img/totedope.jpg',
        product: 'tote',
        cat: 'tote',
    },
    {
        id: '12',
        name: 'Tote No Future',
        price: 500,
        img: './img/totenofuture.jpg',
        product: 'tote',
        cat: 'tote',
    },
]

export const getproducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id)
            resolve(product);
        }, 2000)
    })
}

export const getCatproducts = (idCat) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const catProducts = products.filter(prod => prod.cat === idCat)
            resolve(catProducts);
        }, 2000)
    })
}