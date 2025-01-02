export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Kazus Podatkowy 1(6)2019',
    price: 98.76,
    image: 'img1.png',
    quantity: 10,
  },
  {
    id: 2,
    name: 'Kazus Podatkowy 1(6)2019',
    price: 98.76,
    image: 'img1.png',
    quantity: 10,
  },
  {
    id: 3,
    name: 'Procedury administracyjne i podatkowe 2',
    price: 98.76,
    image: 'img3.png',
    quantity: 10,
  },
  {
    id: 4,
    name: 'Prawo Pomocy Publicznej',
    price: 98.76,
    image: 'img4.png',
    quantity: 10,
  },
  {
    id: 5,
    name: 'Kazus Podatkowy 1(6)2019',
    price: 98.76,
    image: 'img1.png',
    quantity: 10,
  },
  {
    id: 6,
    name: 'Prawo Pomocy Publicznej',
    price: 98.76,
    image: 'img4.png',
    quantity: 10,
  },
  {
    id: 7,
    name: 'Procedury administracyjne i podatkowe 2',
    price: 98.76,
    image: 'img3.png',
    quantity: 10,
  },
  {
    id: 8,
    name: 'Prawo Pomocy Publicznej',
    price: 98.76,
    image: 'img4.png',
    quantity: 10,
  },
  {
    id: 9,
    name: 'Kazus Podatkowy 1(6)2019',
    price: 98.76,
    image: 'img1.png',
    quantity: 10,
  },
  {
    id: 10,
    name: 'Kazus Podatkowy 1(6)2019',
    price: 98.76,
    image: 'img1.png',
    quantity: 10,
  },
  {
    id: 11,
    name: 'Prawo Pomocy Publicznej',
    price: 98.76,
    image: 'img4.png',
    quantity: 10,
  },
  {
    id: 12,
    name: 'Procedury administracyjne i podatkowe 2',
    price: 98.76,
    image: 'img3.png',
    quantity: 10,
  },

  {
    id: 13,
    name: 'Prawo Pomocy Publicznej',
    price: 98.76,
    image: 'img4.png',
    quantity: 10,
  },
  {
    id: 14,
    name: 'Kazus Podatkowy 1(6)2019',
    price: 98.76,
    image: 'img1.png',
    quantity: 10,
  },
  {
    id: 15,
    name: 'Prawo Pomocy Publicznej',
    price: 98.76,
    image: 'img4.png',
    quantity: 10,
  },
  {
    id: 16,
    name: 'Procedury administracyjne i podatkowe 2',
    price: 98.76,
    image: 'img3.png',
    quantity: 10,
  },
];

export async function getProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 300));

  return products;
}
