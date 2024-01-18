import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Hammad',
      email: 'Hammad6289@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Chohan',
      email: 'Hammadxstech@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'xstechsolution',
      email: 'xstechsolution@gmail.com',
      password: bcrypt.hashSync('Neemsay1133'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1', // underscore will make it compatible with MongoDB '1' is string
      name: 'TouchupXS 1oz Basecoat and Clearcoat With E-Z Dabber',
      slug: 'TouchupXS 1oz Basecoat and Clearcoat With E-Z Dabber',
      category: 'Touchup Paint with ez dabber',
      image: '/images/p1.jpg', // 679px × 829px
      price: 20,
      countInStock: 100,
      brand: 'TouchupXS',
      rating: 4.5,
      numReviews: 10,
      description:
        'All of our touch-up paints are custom mixed in house to ensure a match to your car. Unlike other companies selling lacquer, all of our touches up paints are modern durable urethane finishes. We are the only Amazon sellers selling professional quality paint and touch up products',
    },
    {
      //_id: '2', // underscore will make it compatible with MongoDB '1' is string
      name: 'TouchupXS 1oz Basecoat Clearcoat and Primer With E-Z Dabber',
      slug: 'TouchupXS 1oz Basecoat Clearcoat and Primer With E-Z Dabber',
      category: 'Touchup Paint with ez dabber',
      image: '/images/p2.jpg', // 679px × 829px
      price: 25,
      countInStock: 1000,
      brand: 'TouchupXS',
      rating: 5,
      numReviews: 10,
      description:
        'All of our touch-up paints are custom mixed in house to ensure a match to your car. Unlike other companies selling lacquer, all of our touches up paints are modern durable urethane finishes. We are the only Amazon sellers selling professional quality paint and touch up products',
    },
    {
      //_id: '3', // underscore will make it compatible with MongoDB '1' is string
      name: 'TouchupXS 2oz & 1oz Combo Touch Up Kit',
      slug: 'TouchupXS 2oz & 1oz Combo Touch Up Kit',
      category: '2oz Touchup Paint',
      image: '/images/p3.jpg', // 679px × 829px
      price: 8.99,
      countInStock: 0,
      brand: 'TouchupXS',
      rating: 4,
      numReviews: 15,
      description:
        'Each kit contains 2 oz basecoat mixed specifically for your car or truck and a 1 oz. container of high gloss durable clear coat. Includes micro-fine brushes for precision touch up application and concise instructions',
    },
    {
      //_id: '4', // underscore will make it compatible with MongoDB '1' is string
      name: 'TouchupXS 2oz & 1oz Combo Touch Up Kit with Surface Cleaner',
      slug: 'TouchupXS 2oz & 1oz Combo Touch Up Kit with Surface Cleaner',
      category: '2oz Touchup Paint',
      image: '/images/p4.jpg', // 679px × 829px
      price: 12.99,
      countInStock: 900,
      brand: 'TouchupXS',
      rating: 5,
      numReviews: 27,
      description:
        'Each kit contains 2 oz basecoat mixed specifically for your car or truck and a 1 oz. container of high gloss durable clear coat as well as surface cleaner Kit. Includes micro-fine brushes for precision touch up',
    },
    {
      //_id: '5', // underscore will make it compatible with MongoDB '1' is string
      name: 'TouchupXS 1oz Touch Up Paint',
      slug: 'TouchupXS 1oz Touch Up Paint',
      category: '1oz Touchup Paint',
      image: '/images/p5.jpg', // 679px × 829px
      price: 10.99,
      countInStock: 1000,
      brand: 'TouchupXS',
      rating: 5,
      numReviews: 20,
      description:
        'Each kit contains 1 oz basecoat mixed specifically for your car or truck',
    },
    {
      //_id: '6', // underscore will make it compatible with MongoDB '1' is string
      name: 'TouchupXS 1oz Touch Up Paint With E-Z Dabber',
      slug: 'TouchupXS 1oz Touch Up Paint With E-Z Dabber',
      category: '2oz Touchup Paint',
      image: '/images/p6.jpg', // 679px × 829px
      price: 15.99,
      countInStock: 1000,
      brand: 'TouchupXS',
      rating: 4,
      numReviews: 10,
      description: 'Each kit contains 2 oz basecoat bottle with ez dabber',
    },
    {
      //_id: '7', // underscore will make it compatible with MongoDB '1' is string
      name: 'TouchupXS 12oz Spray Kit',
      slug: 'TouchupXS 12oz Spray Kit',
      category: '12oz Aerosol Can',
      image: '/images/p7.jpg', // 679px × 829px
      price: 34.99,
      countInStock: 500,
      brand: 'TouchupXS',
      rating: 5,
      numReviews: 45,
      description:
        '12 ounce spray paint can filled with color basecoat and 12 ounce spray can filled with Clearcoat',
    },
  ],
};
export default data;
