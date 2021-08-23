import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Pelumi',
            email: "pfajemilo@gmail.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Adenike',
            email: "ade@gmail.com",
            password: bcrypt.hashSync('1234', 8),
          
        }
    ],
    products: [ 
        {
           
            name: "Home Fridge",
            category: "Electronic",
            image:'/images/p1.jpeg',
            price: 120,
            brand: 'LG',
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'

        },
        {
           
            name: "Home plasma",
            category: "Electronic",
            image:'/images/p2.jpeg',
            price: 190,
            countInStock: 0,
            brand: 'LG',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'

        },
        {
            
            name: "Plasma",
            category: "Electronic",
            image:'/images/p3.jpeg',
            price: 120,
            countInStock: 10,
            brand: 'LG',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'

        },
        {
           
            name: "Buggati",
            category: "Car",
            image:'/images/p4.jpeg',
            price: 1200,
            countInStock: 2,
            brand: 'LG',
            rating: 3,
            numReviews: 10,
            description: 'High quality product'

        },
        {
           
            name: "Nimosene",
            category: "Car",
            image:'/images/p5.jpeg',
            price: 1000,
            countInStock: 34,
            brand: 'LG',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'

        },
        {
            
            name: "Benz",
            category: "Car",
            countInStock: 9,
            image:'/images/p6.jpeg',
            price: 1000,
            brand: 'LG',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'

        },
        {
           
            name: "NBMW",
            category: "Car",
            image:'/images/p7.jpeg',
            price: 1000,
            countInStock: 18,
            brand: 'LG',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'

        },
        {
         
            name: "RSV",
            category: "Motocycle",
            image:'/images/p8.jpeg',
            price: 1000,
            countInStock: 10,
            brand: 'LG',
            rating: 4.5,
            numReviews: 0,
            description: 'High quality product'

        },
        {
           
            name: "Power Bike",
            category: "MOtocycle",
            image:'/images/p9.jpeg',
            price: 1000,
            countInStock: 15,
            brand: 'LG',
            rating: 4.5,
            numReviews: 10,
            description: 'High quality product'

        },
    ],
}

export default data