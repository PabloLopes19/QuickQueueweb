import { Order } from "@/app/types/Product";
import OrderCard from "./orderCard";
import Link from "next/link";

interface ContainerProps {
  data: Order[] | null;
}

export default function Container({ data }: Readonly<ContainerProps>) {
  const pendentes = data!.filter((item) => item.status === "pendente");

  return (
    <div className="flex flex-col-reverse laptop:flex-row flex-1 gap-6 w-full min-h-full max-w-[1800px] bg-[#fff] p-[40px] rounded-[9px]">
      <div className="flex flex-1 w-full flex-col gap-3">
        <h1 className="text-base text-qq-description font-semibold select-none">
          Pedido atual
        </h1>

        <div className="flex p-[40px] bg-[#F8F8F8] rounded-[18px] flex-1">
          {data ? (
            <div className="flex w-full flex-col gap-3">
              {data[0].produtos.map((prod) => (
                <div
                  className="flex w-full items-center justify-between"
                  key={prod.id}
                >
                  <h1 className="text-lg font-bold text-qq-title">
                    {prod.descricao}
                  </h1>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-qq-light">x{prod.qnt}</span>
                    <span className="text-lg text-qq-description">
                      R${prod.preco.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <span className="text-sm text-qq-light select-none">
              Nada por enquanto 🙃
            </span>
          )}
        </div>

        <Link
          href={"/dashboard/details"}
          className="bg-qq-green flex items-center justify-center text-[#fff] font-semibold text-sm h-[55px] rounded-md hover:brightness-110 transition-all duration-200"
        >
          Finalizar pedido
        </Link>
      </div>

      <div className="flex flex-col gap-6 laptop:max-w-[400px]">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="font-semibold text-qq-description select-none">
            Novo pedido
          </h1>

          <div className="flex items-center justify-center bg-[#F8F8F8] p-[20px] rounded-[18px] w-full">
            {pendentes.length != 0 ? <OrderCard data={pendentes[0]} /> : null}
          </div>
        </div>

        <div className="flex flex-col h-[200px] gap-3 w-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="font-semibold text-qq-description select-none">
              Fila atual
            </h1>

            <span className="text-xs font-normal text-qq-light">
              {data?.length} restantes
            </span>
          </div>

          <div className="flex items-center flex-1 flex-col h-[200px] gap-3 justify-center bg-[#F8F8F8] no-scrollbar p-[20px] rounded-[18px] w-full">
            <div className="flex flex-col rounded-[9px] gap-3 h-full w-full overflow-y-scroll no-scrollbar">
              {data
                ?.filter((item) => item.status !== "pendente")
                .map((order) => (
                  <OrderCard key={order.id} data={order} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
