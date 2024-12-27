import Categories from "./ui/Categories";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-[960px] w-full justify-center bg-gray-900 my-0 mx-auto">
        <Categories />
      </div>
      <Footer />
    </>
  );
}
