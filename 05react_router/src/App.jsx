import Header from "./components/header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "./components/footer/Footer.jsx";

function App() {

  return (
      <>
          <Header />
          <Outlet />
          <Footer />
      </>
  )
}

export default App
