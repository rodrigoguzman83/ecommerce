import "./App.css";
import Nav from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav backgroundColor="dark" textColor="white" variant="dark" />
      <ItemListContainer greeting="Welcome to my ecommerce" />
      <Footer text="© Ecommerce " />
    </>
  );
}

export default App;
