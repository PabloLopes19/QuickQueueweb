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
