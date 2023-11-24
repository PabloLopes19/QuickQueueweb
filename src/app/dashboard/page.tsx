import Header from "@/components/header";
import Container from "./components/container";

import FakeData from "@/app/data/dashboard.json";
import { Order } from "../types/Product";

export default function Dashboard() {
  return (
    <div>
      <Header />

      <div className="flex justify-start items-center flex-col flex-1 bg-[#F2F9FF] p-10 min-h-[calc(100vh-80px)]">
        <Container data={FakeData as Order[]} />
      </div>
    </div>
  );
}
