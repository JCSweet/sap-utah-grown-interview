import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="container mx-auto w-full flex flex-col items-center justify-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
