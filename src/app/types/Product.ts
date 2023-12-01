export type Order = {
  id: number;
  status: "pendente" | "producao" | "pronto";
  clientName: string;
  produtos: Product[];
};

type Product = {
  id: number;
  descricao: string;
  qnt: number;
  preco: number;
};

interface IUser {
  id: number;
  addressId: number;
  address: null;
  name: string;
  email: string;
  password: string;
  phone: string;
  cpf: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IRestaurant {
  id: 1;
  menuID: 1;
  menu: null;
  addressId: 1;
  address: null;
  name: string;
  description: string;
  email: string;
  password: string;
  phone: string;
  cnpjCpf: string;
  pix: string;
  isAdmin: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface INewOrder {
  id: number;
  userId: number;
  user: IUser;
  restaurantId: number;
  restaurant: IRestaurant;
  totalPrice: number;
  orderDate: string;
  orderStatus: number;
  createdAt: string;
  updatedAt: string;
}
