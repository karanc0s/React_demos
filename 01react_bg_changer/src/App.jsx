import './App.css'
import {useState} from "react";

function App() {

    const [color, setColor] = useState("olive")

    return (
        <div className="w-full h-screen duration-200"
             style={{backgroundColor: color}}>
            <div
                className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"
                style={{backgroundColor: color , opacity: "1"}}
            >
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
                    <button
                        className="outline-none px-4 rounded-full text-white shadow-lg capitalize"
                        style={{backgroundColor: "red"}}
                        onClick={() => setColor("red")}
                    >red
                    </button>
                    <button
                        className="outline-none px-4 rounded-full text-white shadow-lg capitalize"
                        style={{backgroundColor: "firebrick"}}
                        onClick={() => setColor("firebrick")}
                    >firebrick
                    </button>
                    <button
                        className="outline-none px-4 rounded-full text-white shadow-lg capitalize"
                        style={{backgroundColor: "blue"}}
                        onClick={() => setColor("blue")}
                    >blue
                    </button>
                    <button
                        className="outline-none px-4 rounded-full text-white shadow-lg capitalize"
                        style={{backgroundColor: "violet"}}
                        onClick={() => setColor("violet")}
                    >violet
                    </button>
                    <button
                        className="outline-none px-4 rounded-full text-white shadow-lg capitalize"
                        style={{backgroundColor: "green"}}
                        onClick={() => setColor("green")}
                    >green
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
