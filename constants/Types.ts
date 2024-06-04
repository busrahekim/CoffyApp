type FilterItem = {
  title: string;
  active: boolean;
};

// type CoffeItem = {
//   name: string;
//   subTitle?: string;
//   price: string;
//   rating: string;
// };

type ApiCoffeItem = {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
  rating: number;
  price: number;
};

type CupSize = {
  title: string;
  sizePrice: number;
};
