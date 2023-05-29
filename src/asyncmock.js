

const products = [
    {
        id: '1',
        name: 'Jimi Hendrix',
        price: 1000,
        stock: 10,
        img: '../img/jimihendrix.jpg',
        product: 'Remera unisex',
        cat: 'internacional',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '2',
        name: 'Bad Religion',
        price: 1000,
        stock: 10,
        img: '../img/badreligion.jpg',
        product: 'Remera unisex',
        cat: 'internacional',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '3',
        name: 'Sex Pistols',
        price: 1000,
        stock: 10,
        img: '../img/sexpistols.jpg',
        product: 'Remera unisex',
        cat: 'internacional',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '4',
        name: 'The Smiths',
        price: 1000,
        stock: 10,
        img: '../img/smiths.jpg',
        product: 'Remera unisex',
        cat: 'internacional',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '5',
        name: 'Almendra',
        price: 1000,
        stock: 10,
        img: '../img/almendra.jpg',
        product: 'Remera unisex',
        cat: 'nacional',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '6',
        name: 'Cadena Perpetua',
        price: 1000,
        stock: 10,
        img: '../img/cadenaperpetua.jpg',
        product: 'Remera unisex',
        cat: 'nacional',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '7',
        name: 'Diferentes Actitudes Juveniles',
        price: 1000,
        stock: 10,
        img: '../img/actitudes.jpg',
        product: 'Remera unisex',
        cat: 'nacional',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '8',
        name: 'El Mato a un Policia Motorizado',
        price: 1000,
        stock: 10,
        img: '../img/elmato.jpg',
        product: 'Remera unisex',
        cat: 'nacional',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '9',
        name: 'Antistampa',
        price: 500,
        stock: 10,
        img: '../img/toteanti.jpg',
        product: 'Tote',
        cat: 'tote',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium? ` 
    },
    {
        id: '10',
        name: 'Psycho Killer',
        price: 500,
        stock: 10,
        img: '../img/totepsychokiller.jpg',
        product: 'Tote',
        cat: 'tote',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '11',
        name: 'Dope',
        price: 500,
        stock: 10,
        img: '../img/totedope.jpg',
        product: 'Tote',
        cat: 'tote',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
    },
    {
        id: '12',
        name: 'No Future',
        price: 500,
        stock: 10,
        img: '../img/totenofuture.jpg',
        product: 'Tote',
        cat: 'tote',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, culpa cupiditate hic quod quo asperiores magnam ipsam nesciunt libero officiis quasi odio sit dignissimos itaque aliquam sapiente aut molestiae accusantium?`
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

export const getCatproducts = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const catProducts = products.filter(prod => prod.cat === idCategory)
            resolve(catProducts);
        }, 2000)
    })
}