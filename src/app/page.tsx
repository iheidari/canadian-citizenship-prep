import Categories from "./ui/Categories";
import Header from "./ui/Header";

export default function Home() {
  return (
    <div className="max-w-[960px] w-full justify-center bg-gray-900 my-0 mx-auto">
      <Header />
      <Categories />
    </div>
  );
}
