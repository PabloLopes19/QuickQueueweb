import { Order } from "@/app/types/Product";
import { CheckCircle } from "react-feather";

interface CardProps {
  data: Order;
}

export default function OrderCard({ data }: Readonly<CardProps>) {
  return (
    <div className="flex flex-col rounded-[9px] bg-[#fff] w-full">
      <div className="flex items-center gap-2 p-5">
        <CheckCircle className="text-qq-green" />

        <div className="flex flex-col truncate overflow-ellipsis select-none">
          <h1 className="text-sm w-full text-qq-title font-semibold">
            {data.produtos.map((item) => item.descricao).join(", ")}
          </h1>
          <span className="text-xs text-qq-light">
            Cliente: {data.clientName}
          </span>
        </div>
      </div>

      {data.status === "pendente" && (
        <div className="flex w-full h-[55px]">
          <button className="flex flex-1 items-center justify-center rounded-bl-[9px] hover:bg-qq-greenghost transition-all duration-200 text-sm text-qq-green">
            Aceitar
          </button>
          <button className="flex flex-1 items-center justify-center rounded-br-[9px] hover:bg-qq-greenghost transition-all duration-200 text-sm text-qq-red">
            Recusar
          </button>
        </div>
      )}
    </div>
  );
}
