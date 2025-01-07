import {Outlet} from "react-router-dom";
import {Footer, Header, PostForm} from "./components";


function App() {

  return (
      <div className="min-h-screen flex content-between bg-blue-200">

          <div className="w-screen block flex-col ">
              <Header />
              {/*<main >*/}
              {/*    <Outlet/>*/}
              {/*</main>*/}
              <PostForm />
              <Footer />
          </div>
      </div>

  )
}

export default App
