import { useEffect, useState } from "react";
import Slideshow from "./components/Carousel/Slideshow";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import GridLoader from "react-spinners/GridLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const removePreloader = () => {
    setIsLoading(!isLoading);
  };

  useEffect(() => {
    setTimeout(() => {
      removePreloader();
    }, 2000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="flex justify-center items-center h-[100vh] bg-black/90">
          <GridLoader color="#f6f6f6" size={15} width={0} />
        </div>
      ) : (
        <>
          <Header />
          <Slideshow />
          <Product />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
