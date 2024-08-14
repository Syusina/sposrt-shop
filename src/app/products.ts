export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    inCart?: boolean;
    count: number;
    like?: boolean;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod1.png',
      count: 0
    },
    {
      id: 2,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 17392,
      description: 'Мужской Сноуборд',
      image: './assets/prod2.png',
      count: 0
    },
    {
      id: 3,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod3.png',
      count: 0
    },
    {
      id: 4,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod4.png',
      count: 0
    },
    {
      id: 5,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod3.png',
      count: 0
    },
    {
      id: 6,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod4.png',
      count: 0
    },
    {
      id: 7,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod4.png',
      count: 0
    },
    {
      id: 8,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod4.png',
      count: 0
    },
    {
      id: 9,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod4.png',
      count: 0
    },
    {
      id: 10,
      name: 'Сноуборд GNU Asym Carbon Credit Btx Multicolor',
      price: 34392,
      description: 'Мужской Сноуборд',
      image: './assets/prod4.png',
      count: 0
    }
  ];
