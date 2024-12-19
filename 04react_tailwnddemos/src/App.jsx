import NavMenu from "./components/NavMenu.jsx";

function App() {


    // const data = ["Item 1", "Item 2", "Item 3"]

    return (
        <>
            <div className="h-screen bg-red-100">

                <div className="bg-maroon flex items-end justify-center pt-7 pb-5">
                    <img
                        src="https://naadpargaasusa.org/wp-content/uploads/2021/12/Logo_Circle-removebg-preview-2-100x100.png"
                        alt=""/>
                    <h1 className="font-serif font-medium text-7xl text-white ml-3">My Store</h1>
                    <h4 className="font-serif text-md text-white ml-5">A Vision</h4>
                </div>

                <div className="bg-maroon flex justify-center">

                    {/*<DropDown label="Literature Festival" />*/}
                    {/*<DropDown label="Poetry Festival" />*/}
                    {/*<DropDown label="Seminars" />*/}
                    {/*<DropDown label="Publications" />*/}

                    <NavMenu />


                </div>






                <div>
                    <h1>asfasdfasfd</h1>
                </div>


            </div>
        </>

    )
}

export default App

