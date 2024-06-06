type FilterItem = {
  key: string;
  value: string;
  active: boolean;
};

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

type CartItem = {
  id: number;
  image: string;
  title: string;
  price: number;
  cupSize: CupSize;
  quantity: number;
};
