import Header from "@/components/header";
import Login from "./login/page";

export default function App() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Login />
    </div>
  );
}
